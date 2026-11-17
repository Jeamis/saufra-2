import React, { useCallback, useEffect, useState } from 'react';
import {
  AdvancedMarker,
  APILoadingStatus,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { ExternalLink, Loader2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';

interface ResolvedPlace {
  lat: number;
  lng: number;
  placeId?: string;
  formattedAddress?: string;
}

const MAUGUIO_TEXT_QUERY = 'Rue Roland Garros, 34130 Mauguio, France';

function isQuotaError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error ?? '');
  return (
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('OVER_QUERY_LIMIT') ||
    msg.includes('QuotaExceeded') ||
    msg.includes('OverQuota') ||
    msg.includes('429')
  );
}

function buildDirectionsUrl(resolved: ResolvedPlace | null): string {
  const query = encodeURIComponent(resolved?.formattedAddress || COMPANY_INFO.addressLine);
  if (resolved?.placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${query}&query_place_id=${encodeURIComponent(
      resolved.placeId
    )}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

const MauguioMapCanvas: React.FC = () => {
  const loadingStatus = useApiLoadingStatus();
  const placesLib = useMapsLibrary('places');
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [resolvedPlace, setResolvedPlace] = useState<ResolvedPlace | null>(null);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState<boolean>(true);

  useEffect(() => {
    if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
      window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
      setLoadError('La carte interactive n’a pas pu être authentifiée pour le moment.');
      setIsSearching(false);
    } else if (loadingStatus === APILoadingStatus.FAILED) {
      setLoadError('Impossible de charger le service cartographique Google Maps.');
      setIsSearching(false);
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (!placesLib) return;

    let cancelled = false;

    const resolveMauguioLocation = async () => {
      setIsSearching(true);
      setLoadError(null);

      try {
        const { places } = await placesLib.Place.searchByText({
          textQuery: MAUGUIO_TEXT_QUERY,
          fields: ['location', 'id', 'formattedAddress'],
          language: 'fr',
          region: 'FR',
          maxResultCount: 1,
          internalUsageAttributionIds: ['gmp_mcp_codeassist_v1_aistudio'],
        });

        if (cancelled) return;

        const firstPlace = places?.[0];
        const loc = firstPlace?.location;

        if (!loc) {
          setLoadError('Secteur Rue Roland Garros, 34130 Mauguio non localisé.');
          return;
        }

        setResolvedPlace({
          lat: loc.lat(),
          lng: loc.lng(),
          placeId: firstPlace.id,
          formattedAddress: firstPlace.formattedAddress ?? undefined,
        });
      } catch (err) {
        if (cancelled) return;
        if (isQuotaError(err)) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        setLoadError('La localisation interactive est momentanément indisponible.');
      } finally {
        if (!cancelled) {
          setIsSearching(false);
        }
      }
    };

    void resolveMauguioLocation();

    return () => {
      cancelled = true;
    };
  }, [placesLib]);

  const handleMarkerClick = useCallback(() => {
    setInfoOpen(true);
  }, []);

  const handleInfoClose = useCallback(() => {
    setInfoOpen(false);
  }, []);

  const directionsHref = buildDirectionsUrl(resolvedPlace);

  if (loadError) {
    return (
      <div className="space-y-3">
        <div className="h-72 sm:h-80 w-full rounded-xl bg-[#0B1D36] text-white p-6 flex flex-col justify-between">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-display text-lg font-semibold">{COMPANY_INFO.fullTitle}</p>
              <p className="text-sm text-white/85">{COMPANY_INFO.addressLine}</p>
              <p className="text-xs text-white/65">{COMPANY_INFO.addressNote}</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs text-amber-200/90">{loadError}</p>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C69C4D] hover:bg-[#b58c40] text-[#0B1D36] font-semibold text-xs px-4 py-2.5 transition-colors"
            >
              <span>Ouvrir dans Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <p className="text-xs text-slate-600">
          Accès rapide D66 / A709 — Déplacement à domicile dans tout le bassin montpelliérain.
        </p>
      </div>
    );
  }

  if (isSearching || !resolvedPlace) {
    return (
      <div className="space-y-3">
        <div className="h-72 sm:h-80 w-full rounded-xl bg-[#F8F9FB] border border-[#0B1D36]/10 flex flex-col items-center justify-center gap-2 text-slate-600">
          <Loader2 className="w-5 h-5 animate-spin text-[#C69C4D]" />
          <span className="text-xs font-medium">Chargement de la carte Google Maps…</span>
        </div>
        <p className="text-xs text-slate-600">
          Accès rapide D66 / A709 — Déplacement à domicile dans tout le bassin montpelliérain.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="h-72 sm:h-80 w-full rounded-xl overflow-hidden border border-[#0B1D36]/15 shadow-inner">
        <Map
          className="w-full h-full"
          defaultCenter={{ lat: resolvedPlace.lat, lng: resolvedPlace.lng }}
          defaultZoom={14}
          mapId="DEMO_MAP_ID"
          gestureHandling="cooperative"
          mapTypeControl={false}
          streetViewControl={true}
          fullscreenControl={true}
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        >
          <AdvancedMarker
            ref={markerRef}
            position={{ lat: resolvedPlace.lat, lng: resolvedPlace.lng }}
            onClick={handleMarkerClick}
            title={COMPANY_INFO.fullTitle}
          >
            <Pin
              background="#0B1D36"
              borderColor="#C69C4D"
              glyphColor="#C69C4D"
              scale={1.15}
            />
          </AdvancedMarker>

          {infoOpen && marker && (
            <InfoWindow anchor={marker} maxWidth={250} onCloseClick={handleInfoClose}>
              <div className="text-[#0B1D36] space-y-1.5 pr-1">
                <p className="font-semibold text-sm leading-tight">{COMPANY_INFO.fullTitle}</p>
                <p className="text-xs text-slate-700 leading-snug">
                  {resolvedPlace.formattedAddress || COMPANY_INFO.addressLine}
                </p>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {COMPANY_INFO.addressNote}
                </p>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D3456] hover:text-[#C69C4D] pt-0.5"
                >
                  <span>Itinéraire Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <span>
          Accès rapide D66 / A709 — Déplacement à domicile dans tout le bassin montpelliérain.
        </span>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-[#0B1D36] hover:text-[#C69C4D] shrink-0"
        >
          <span>Ouvrir dans Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export const MauguioGoogleMap: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  return (
    <div className="bg-white rounded-2xl border border-[#0B1D36]/10 p-5 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-base font-semibold text-[#0B1D36]">
          Localisation Mauguio (34130)
        </h3>
        <span className="text-xs text-slate-500">Secteur Fréjorgues</span>
      </div>

      {apiKey ? (
        <APIProvider apiKey={apiKey} language="fr" region="FR">
          <MauguioMapCanvas />
        </APIProvider>
      ) : (
        <div className="space-y-3">
          <div className="h-72 sm:h-80 w-full rounded-xl bg-[#0B1D36] text-white p-6 flex flex-col justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C69C4D] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-display text-lg font-semibold">{COMPANY_INFO.fullTitle}</p>
                <p className="text-sm text-white/85">{COMPANY_INFO.addressLine}</p>
                <p className="text-xs text-white/65">{COMPANY_INFO.addressNote}</p>
              </div>
            </div>
            <a
              href={buildDirectionsUrl(null)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-[#C69C4D] hover:bg-[#b58c40] text-[#0B1D36] font-semibold text-xs px-4 py-2.5 transition-colors"
            >
              <span>Ouvrir dans Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <p className="text-xs text-slate-600">
            Accès rapide D66 / A709 — Déplacement à domicile dans tout le bassin montpelliérain.
          </p>
        </div>
      )}
    </div>
  );
};
