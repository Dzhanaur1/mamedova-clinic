import axios from "axios";

type NotifiCationProps = {
  name: string;
  phone: string;
};

export async function sendTelegramNotification(data: NotifiCationProps) {
  const message = `
    Новый клиент на консультацию!\n
    Имя: ${data.name}\n
    Телефон: ${data.phone}\n
  `;

  const telegramBotToken = "6627355491:AAE8Qowy9MRF7qXoqBk66SQGgStsP3dNkNk";
  const chatId = "642721543";

  const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  await axios.post(telegramApiUrl, {
    chat_id: chatId,
    text: message,
    parse_mode: "Markdown",
  });
}
