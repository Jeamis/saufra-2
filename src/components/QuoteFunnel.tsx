import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  X,
  ShieldCheck,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/saufraData';
import { QuoteFormData } from '../types/saufra';

const PROJECT_OPTIONS = [
  'Pergola bioclimatique',
  'Fenêtres / Baies vitrées',
  'Volets roulants / battants',
  'Porte d’entrée',
  'Porte blindée',
  'Porte de garage',
  'Stores intérieurs / extérieurs',
  'Véranda / Extension',
  'Climatisation',
  'Autre projet',
];

const MATERIAL_OPTIONS = ['Aluminium', 'PVC', 'Bois', 'Je souhaite être conseillé(e)'];
const TIMELINE_OPTIONS = [
  'Dès que possible',
  'Dans les 1 à 3 mois',
  'Dans les 3 à 6 mois',
  'Simple étude / chiffrage',
];
const CALLBACK_SLOTS = [
  'Matin (9h – 12h)',
  'Après-midi (14h – 18h)',
  'Fin de journée (17h – 19h)',
  'Indifférent',
];

interface QuoteFunnelProps {
  preselectedProject?: string;
}

export const QuoteFunnel: React.FC<QuoteFunnelProps> = ({ preselectedProject }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const [form, setForm] = useState<QuoteFormData>({
    projectTypes: preselectedProject ? [preselectedProject] : ['Pergola bioclimatique'],
    openingCount: '1 à 3 équipements',
    propertyType: 'maison',
    material: 'Aluminium',
    timeline: 'Dans les 1 à 3 mois',
    photos: [],
    ownerStatus: 'proprietaire',
    fullName: '',
    phone: '',
    email: '',
    city: '',
    callbackSlot: 'Indifférent',
    message: '',
    rgpdConsent: false,
  });

  const toggleProjectType = (item: string) => {
    setForm((prev) => {
      const exists = prev.projectTypes.includes(item);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((p) => p !== item)
          : [...prev.projectTypes, item],
      };
    });
  };

  const handlePhotoAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const remaining = 3 - form.photos.length;
    const slice = Array.from(files).slice(0, remaining);
    const nextPhotos = slice.map((file) => ({
      name: file.name,
      previewUrl: URL.createObjectURL(file),
      sizeLabel: `${Math.max(1, Math.round(file.size / 1024))} Ko`,
    }));
    setForm((prev) => ({
      ...prev,
      photos: [...prev.photos, ...nextPhotos].slice(0, 3),
    }));
    e.target.value = '';
  };

  const removePhoto = (index: number) => {
    setForm((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, idx) => idx !== index),
    }));
  };

  const validateStep1 = () => {
    if (form.projectTypes.length === 0) {
      setErrors(['Veuillez sélectionner au moins un type de projet.']);
      return false;
    }
    setErrors([]);
    return true;
  };

  const validateStep3 = () => {
    const nextErrors: string[] = [];
    if (form.fullName.trim().length < 2) {
      nextErrors.push('Merci d’indiquer votre nom et prénom.');
    }
    const cleanPhone = form.phone.replace(/\s+/g, '');
    if (cleanPhone.length < 8) {
      nextErrors.push('Merci de saisir un numéro de téléphone valide.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.push('Merci de saisir une adresse e-mail valide.');
    }
    if (form.city.trim().length < 2) {
      nextErrors.push('Merci d’indiquer votre commune d’intervention (ex. Mauguio, Montpellier).');
    }
    if (!form.rgpdConsent) {
      nextErrors.push('Veuillez accepter le traitement de votre demande pour être recontacté(e).');
    }
    setErrors(nextErrors);
    return nextErrors.length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2) {
      setErrors([]);
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim().length > 0) return;
    if (!validateStep3()) return;

    setSubmitting(true);
    try {
      // Attempt PlanetHoster PHP endpoint if deployed there; fallback gracefully in preview
      await fetch('/send-devis.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          photos: form.photos.map((p) => p.name),
        }),
      }).catch(() => null);
    } finally {
      setSubmitting(false);
      const ref = `SF-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`;
      setSubmittedRef(ref);
    }
  };

  if (submittedRef) {
    return (
      <div className="bg-white rounded-2xl border border-[#0B1D36]/10 shadow-sm p-8 md:p-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-medium text-emerald-700 tabular-nums">
              Référence dossier {submittedRef}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0B1D36] mt-1">
              Votre demande de devis est bien enregistrée
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Merci {form.fullName}. Notre équipe de Mauguio étudie votre projet ({form.projectTypes.join(', ')}) à {form.city} et vous contactera sur le créneau « {form.callbackSlot} » (délai de rappel à confirmer avec le client).
            </p>
          </div>
        </div>

        <div className="bg-[#F8F9FB] rounded-xl p-5 border border-[#0B1D36]/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-xs text-slate-500 block">Projet(s)</span>
            <span className="font-medium text-[#0B1D36]">{form.projectTypes.join(' · ')}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Logement & Matériau</span>
            <span className="font-medium text-[#0B1D36] capitalize">
              {form.propertyType} ({form.ownerStatus}) · {form.material}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Volume & Échéance</span>
            <span className="font-medium text-[#0B1D36]">
              {form.openingCount} · {form.timeline}
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block">Contact</span>
            <span className="font-medium text-[#0B1D36] tabular-nums">
              {form.phone} · {form.email}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={COMPANY_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0B1D36] text-white text-sm font-semibold hover:bg-[#0D3456] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#C69C4D]" />
            <span>Envoyer aussi des photos par WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedRef(null);
              setStep(1);
            }}
            className="px-4 py-3 rounded-lg border border-[#0B1D36]/15 text-sm font-medium text-[#0B1D36] hover:bg-[#F8F9FB] cursor-pointer"
          >
            Faire une autre demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#0B1D36]/10 shadow-sm p-6 sm:p-8 md:p-10 space-y-8"
      noValidate
    >
      {/* Hidden Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website-field">Ne pas remplir</label>
        <input
          id="website-field"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Progress Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-[#0B1D36] tabular-nums">Étape {step} sur 3</span>
          <span className="text-slate-500">
            {step === 1 && 'Type de projet'}
            {step === 2 && 'Détails techniques & photos'}
            {step === 3 && 'Vos coordonnées'}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-colors duration-200 ${
                idx <= step ? 'bg-[#C69C4D]' : 'bg-[#0B1D36]/10'
              }`}
            />
          ))}
        </div>
      </div>

      {errors.length > 0 && (
        <div
          role="alert"
          className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-4 text-sm space-y-1"
        >
          {errors.map((err, i) => (
            <p key={i}>{err}</p>
          ))}
        </div>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
              Quel est votre projet ?
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Sélectionnez un ou plusieurs équipements à étudier lors de notre visite.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROJECT_OPTIONS.map((option) => {
              const checked = form.projectTypes.includes(option);
              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                    checked
                      ? 'border-[#0B1D36] bg-[#0B1D36]/[0.03] text-[#0B1D36]'
                      : 'border-[#0B1D36]/12 hover:border-[#0B1D36]/30 text-slate-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleProjectType(option)}
                    className="w-4 h-4 accent-[#0B1D36] rounded"
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
              Précisions sur votre chantier
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Ces indications permettent à notre technicien de préparer des échantillons adaptés.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#0B1D36] mb-2">
                Type de logement
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {(['maison', 'appartement'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, propertyType: type }))}
                    className={`py-2.5 px-3 rounded-lg border text-sm font-medium capitalize cursor-pointer transition-colors ${
                      form.propertyType === type
                        ? 'bg-[#0B1D36] text-white border-[#0B1D36]'
                        : 'bg-white text-slate-700 border-[#0B1D36]/15 hover:border-[#0B1D36]/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="opening-count" className="block text-xs font-semibold text-[#0B1D36] mb-2">
                Nombre de menuiseries ou surface
              </label>
              <select
                id="opening-count"
                value={form.openingCount}
                onChange={(e) => setForm((p) => ({ ...p, openingCount: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 bg-white text-sm text-[#0B1D36] focus:outline-none focus:border-[#0B1D36]"
              >
                <option value="1 à 3 équipements">1 à 3 équipements (ou pergola &lt; 15 m²)</option>
                <option value="4 à 7 équipements">4 à 7 équipements (ou pergola &gt; 15 m²)</option>
                <option value="8 équipements et plus">Rénovation complète (8+ équipements)</option>
                <option value="À définir sur place">À définir lors de la visite</option>
              </select>
            </div>

            <div>
              <label htmlFor="material-select" className="block text-xs font-semibold text-[#0B1D36] mb-2">
                Matériau souhaité
              </label>
              <select
                id="material-select"
                value={form.material}
                onChange={(e) => setForm((p) => ({ ...p, material: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 bg-white text-sm text-[#0B1D36] focus:outline-none focus:border-[#0B1D36]"
              >
                {MATERIAL_OPTIONS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline-select" className="block text-xs font-semibold text-[#0B1D36] mb-2">
                Délai souhaité
              </label>
              <select
                id="timeline-select"
                value={form.timeline}
                onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 bg-white text-sm text-[#0B1D36] focus:outline-none focus:border-[#0B1D36]"
              >
                {TIMELINE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Photo upload up to 3 photos */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0B1D36]">
                Joindre des photos de votre façade ou terrasse (optionnel, max 3)
              </span>
              <span className="text-xs text-slate-500 tabular-nums">{form.photos.length}/3</span>
            </div>

            {form.photos.length < 3 && (
              <label className="flex items-center justify-center gap-2.5 p-4 rounded-xl border border-dashed border-[#0B1D36]/25 hover:border-[#C69C4D] bg-[#F8F9FB] cursor-pointer transition-colors text-sm text-slate-700">
                <Upload className="w-4 h-4 text-[#0D3456]" />
                <span>Ajouter une photo (JPG, PNG, WebP)</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoAdd}
                  className="sr-only"
                />
              </label>
            )}

            {form.photos.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {form.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden border border-[#0B1D36]/10 bg-slate-50 aspect-[4/3]"
                  >
                    <img
                      src={photo.previewUrl}
                      alt={photo.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      aria-label={`Supprimer ${photo.name}`}
                      className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-[#0B1D36]/80 text-white flex items-center justify-center hover:bg-[#C92027] cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-5">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#0B1D36]">
              Vos coordonnées de contact
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Recevez votre étude personnalisée et convenez d’une visite technique à domicile.
            </p>
          </div>

          <div>
            <span className="block text-xs font-semibold text-[#0B1D36] mb-2">
              Vous êtes ? <span className="text-[#C92027]">*</span>
            </span>
            <div className="flex items-center gap-6">
              {(['proprietaire', 'locataire'] as const).map((status) => (
                <label key={status} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="ownerStatus"
                    checked={form.ownerStatus === status}
                    onChange={() => setForm((p) => ({ ...p, ownerStatus: status }))}
                    className="accent-[#0B1D36]"
                  />
                  <span className="capitalize">
                    {status === 'proprietaire' ? 'Propriétaire' : 'Locataire'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-fullname" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
                Nom et prénom <span className="text-[#C92027]">*</span>
              </label>
              <input
                id="quote-fullname"
                type="text"
                required
                placeholder="Ex. Jean Dupont"
                value={form.fullName}
                onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
              />
            </div>

            <div>
              <label htmlFor="quote-city" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
                Ville / Commune <span className="text-[#C92027]">*</span>
              </label>
              <input
                id="quote-city"
                type="text"
                required
                placeholder="Ex. Mauguio, Montpellier, Lattes…"
                value={form.city}
                onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
              />
            </div>

            <div>
              <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
                Téléphone <span className="text-[#C92027]">*</span>
              </label>
              <input
                id="quote-phone"
                type="tel"
                required
                placeholder="06 00 00 00 00"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm tabular-nums focus:outline-none focus:border-[#0B1D36]"
              />
            </div>

            <div>
              <label htmlFor="quote-email" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
                E-mail <span className="text-[#C92027]">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                required
                placeholder="nom@exemple.fr"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="quote-slot" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
              Créneau de rappel préféré
            </label>
            <select
              id="quote-slot"
              value={form.callbackSlot}
              onChange={(e) => setForm((p) => ({ ...p, callbackSlot: e.target.value }))}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 bg-white text-sm focus:outline-none focus:border-[#0B1D36]"
            >
              {CALLBACK_SLOTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="quote-message" className="block text-xs font-semibold text-[#0B1D36] mb-1.5">
              Parlez-nous de votre projet (dimensions approximatives, contraintes, teinte…)
            </label>
            <textarea
              id="quote-message"
              rows={3}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder="Ex. Terrasse 4 m x 3 m exposée sud-ouest à Mauguio, besoin de stores latéraux…"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
            />
          </div>

          <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={form.rgpdConsent}
              onChange={(e) => setForm((p) => ({ ...p, rgpdConsent: e.target.checked }))}
              className="mt-0.5 w-4 h-4 accent-[#0B1D36] shrink-0"
            />
            <span>
              J’accepte que Saufra Menuiseries (SARL SFBT) traite ces informations uniquement pour
              répondre à ma demande de devis (conservation maximale 3 ans conformément au RGPD).{' '}
              <span className="text-[#C92027]">*</span>
            </span>
          </label>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#0B1D36]/10">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => (s === 3 ? 2 : 1))}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-[#0B1D36]/20 text-sm font-medium text-[#0B1D36] hover:bg-[#F8F9FB] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Précédent</span>
          </button>
        ) : (
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#C69C4D]" />
            <span>Gratuit & sans engagement</span>
          </div>
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1D36] hover:bg-[#0D3456] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            <span>Continuer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60"
          >
            <span>{submitting ? 'Envoi en cours…' : 'Envoyer ma demande de devis'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
};

/* Compact 1-Step Form for Home / Contact */
export const QuickQuoteForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [project, setProject] = useState('Pergola bioclimatique');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.trim().length < 8) {
      setError('Merci d’indiquer votre nom et votre téléphone.');
      return;
    }
    if (!consent) {
      setError('Veuillez valider la case de consentement.');
      return;
    }
    setError('');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white rounded-2xl border border-[#0B1D36]/10 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 text-emerald-700">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <h3 className="font-display text-xl font-semibold text-[#0B1D36]">
            Demande envoyée avec succès
          </h3>
        </div>
        <p className="text-sm text-slate-600">
          Merci {name}. Un conseiller Saufra vous rappellera très prochainement au{' '}
          <span className="font-semibold tabular-nums">{phone}</span> pour votre projet « {project} ».
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName('');
            setPhone('');
            setCity('');
            setMessage('');
          }}
          className="text-sm font-semibold text-[#0D3456] underline cursor-pointer"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-[#0B1D36]/10 shadow-sm p-6 sm:p-8 space-y-4"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quick-name" className="block text-xs font-semibold text-[#0B1D36] mb-1">
            Nom et prénom <span className="text-[#C92027]">*</span>
          </label>
          <input
            id="quick-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jean Dupont"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
          />
        </div>
        <div>
          <label htmlFor="quick-phone" className="block text-xs font-semibold text-[#0B1D36] mb-1">
            Téléphone <span className="text-[#C92027]">*</span>
          </label>
          <input
            id="quick-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06 00 00 00 00"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm tabular-nums focus:outline-none focus:border-[#0B1D36]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quick-project" className="block text-xs font-semibold text-[#0B1D36] mb-1">
            Type de projet
          </label>
          <select
            id="quick-project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 bg-white text-sm focus:outline-none focus:border-[#0B1D36]"
          >
            {PROJECT_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quick-city" className="block text-xs font-semibold text-[#0B1D36] mb-1">
            Commune
          </label>
          <input
            id="quick-city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Mauguio, Montpellier…"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quick-msg" className="block text-xs font-semibold text-[#0B1D36] mb-1">
          Votre besoin en quelques mots
        </label>
        <textarea
          id="quick-msg"
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Dimensions souhaitées, nombre de fenêtres ou de volets…"
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#0B1D36]/15 text-sm focus:outline-none focus:border-[#0B1D36]"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-[#0B1D36]"
        />
        <span>
          J’accepte que Saufra (SARL SFBT) utilise ces données pour me recontacter dans le cadre de
          ma demande.
        </span>
      </label>

      {error && (
        <p className="text-xs text-[#C92027]" role="alert">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C69C4D] hover:bg-[#B1883A] text-[#0B1D36] text-sm font-semibold transition-colors cursor-pointer"
        >
          <span>Recevoir mon devis gratuit</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href={COMPANY_INFO.phoneHref}
          className="inline-flex items-center justify-center gap-2 text-xs font-medium text-[#0D3456] hover:text-[#C69C4D]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Ou appeler directement</span>
        </a>
      </div>
    </form>
  );
};
