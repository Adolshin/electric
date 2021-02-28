<?php


    $phone = $_POST['user-phone'];
    $message = $_POST['message'];
    $mail = $_POST['user-mail'];

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>                
                <li>Телефон: ' . $phone . '</li>
                <li>Почта: ' . $mail . '</li>
                <li>Комментарий: ' . $message . '</li>            
            </ul>
        </body>
    </html>';

    $headers = "From: Администратор сайта <admin@electricavam.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('elektrik24.7@mail.ru', 'Заказ', $mail_message, $headers);

    $data;

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Сообщение отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "Ошибка сервера";
    }

    echo json_encode($data);

?>