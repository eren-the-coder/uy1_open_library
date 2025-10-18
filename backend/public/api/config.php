<?php
  // backend/api/config.php
  // Connexion à la base MySQL

  $servername = "localhost";
  $username   = "openlibuser";
  $password   = "motdepasse";
  $dbname     = "openlibrary";

  // Création de la connexion
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Vérifier la connexion
  if ($conn->connect_error) {
      die(json_encode([
          "success" => false,
          "error" => "Échec de la connexion à la base de données : " . $conn->connect_error
      ]));
  }

  // Définir le jeu de caractères UTF-8
  $conn->set_charset("utf8");

?>