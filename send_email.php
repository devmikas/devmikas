<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);

    $to = "mikadetona@gmail.com"; // Substitua pelo seu e-mail
    $subject = "Novo Login do Usuário";
    $message = "Usuário: $username\nE-mail: $email";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail enviado com sucesso.";
    } else {
        echo "Falha no envio do e-mail.";
    }
} else {
    echo "Método de solicitação inválido.";
}
?>
