import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error: "Не найдены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID",
        },
        { status: 500 }
      );
    }

    const text = `🔔 Новая заявка с сайта M Furniture

👤 Имя: ${name}
📞 Телефон: ${phone}

🪑 Что нужно изготовить:
${message}`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const result = await response.json();

    console.log("Ответ Telegram:", result);

    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          error: result.description,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Ошибка сервера",
      },
      { status: 500 }
    );
  }
}