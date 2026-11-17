<?php
/**
 * Saufra Menuiseries (SARL SFBT) - Script d'envoi de demande de devis pour PlanetHoster
 * À configurer avec l'adresse e-mail définitive du client avant mise en production.
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
    $data = $_POST;
}

// Honeypot anti-spam
if (!empty($data['website'])) {
    echo json_encode(['success' => true, 'message' => 'Demande enregistrée.']);
    exit;
}

$fullName = trim(strip_tags($data['fullName'] ?? ''));
$phone    = trim(strip_tags($data['phone'] ?? ''));
$email    = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$city     = trim(strip_tags($data['city'] ?? ''));
$message  = trim(strip_tags($data['message'] ?? ''));
$projects = isset($data['projectTypes']) && is_array($data['projectTypes'])
    ? implode(', ', array_map('strip_tags', $data['projectTypes']))
    : trim(strip_tags($data['projectType'] ?? 'Menuiserie sur mesure'));

if (!$fullName || !$phone) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Merci de renseigner votre nom et votre téléphone.']);
    exit;
}

// À remplacer par l'adresse e-mail validée par Saufra
$recipient = 'contact@sauframenuiseries.fr';
$subject = "Nouvelle demande de devis Saufra - $fullName ($city)";

$body = "Nouvelle demande de devis depuis sauframenuiseries.fr\n\n"
      . "Nom : $fullName\n"
      . "Téléphone : $phone\n"
      . "E-mail : " . ($email ?: 'Non renseigné') . "\n"
      . "Commune : " . ($city ?: 'Non renseignée') . "\n"
      . "Projet(s) : $projects\n"
      . "Détails : $message\n";

$headers = "From: Saufra Menuiseries <no-reply@sauframenuiseries.fr>\r\n";
if ($email) {
    $headers .= "Reply-To: $email\r\n";
}

$sent = @mail($recipient, $subject, $body, $headers);

if ($email) {
    $ackSubject = "Confirmation de votre demande de devis - Saufra Menuiseries";
    $ackBody = "Bonjour $fullName,\n\n"
             . "Nous avons bien reçu votre demande de devis pour : $projects.\n"
             . "Un conseiller technique Saufra vous recontactera prochainement pour étudier votre projet sur mesure.\n\n"
             . "Du projet à la pose, on est à vos côtés !\n"
             . "Saufra Menuiseries – Mauguio (34130)\n";
    @mail($email, $ackSubject, $ackBody, "From: Saufra Menuiseries <no-reply@sauframenuiseries.fr>\r\n");
}

echo json_encode([
    'success' => true,
    'mailSent' => $sent,
    'message' => 'Votre demande de devis a bien été transmise.'
]);
