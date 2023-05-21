function sendMessage($chatId, $message, $token)
{
    $url = "https://api.telegram.org/{$token}/sendMessage?" . http_build_query([
            'chat_id' => $chatId,
            'text' => $message
        ]);
    $ch = curl_init();
    $optArray = [
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
    ];
    curl_setopt_array($ch, $optArray);
    curl_exec($ch);
    curl_close($ch);
}