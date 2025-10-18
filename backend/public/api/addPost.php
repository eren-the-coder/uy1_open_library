<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");

  if ($_SERVER["REQUEST_METHOD"] !== "POST") {
      http_response_code(405);
      echo json_encode(["success" => false, "error" => "Méthode non autorisée"]);
      exit;
  }

  require 'config.php';

  // Récupérer les données JSON envoyées par React
  $data = json_decode(file_get_contents('php://input'), true);

  $name = $data['name'] ?? '';
  $description = $data['description'] ?? '';
  $type = $data['type'] ?? '';
  $teachingUnit = $data['teachingUnit'] ?? '';
  $authorId = $data['authorId'] ?? null;
  $file = $data['file'] ?? null; // pour l'instant, juste le nom du fichier

  $stmt = $conn->prepare("INSERT INTO ressources (name, description, type, teachingUnit, authorId, file) VALUES (?, ?, ?, ?, ?, ?)");
  $stmt->bind_param("ssssss", $name, $description, $type, $teachingUnit, $authorId, $file);

  if ($stmt->execute()) {
      echo json_encode(["success" => true, "id" => $stmt->insert_id]);
  } else {
      echo json_encode(["success" => false, "error" => $stmt->error]);
  }
?>