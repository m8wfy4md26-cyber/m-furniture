import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("=== ROUTE STARTED ===");

  try {
    const { name, phone, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    console.log("=== TELEGRAM CONFIG ===");
    console.log("TOKEN EXISTS:", !!token);
    console.log("CHAT ID:", chatId);

    if (!token) {
      console.error("TELEGRAM_BOT_TOKEN is missing");

      return NextResponse.json(
        {
          success: false,
          error: "TELEGRAM_BOT_TOKEN is missing",
        },
        { status: 500 }
      );
    }

    if (!chatId) {
      console.error("TELEGRAM_CHAT_ID is missing");

      return NextResponse.json(
        {
          success: false,
          error: "TELEGRAM_CHAT_ID is missing",
        },
        { status: 500 }
      );
    }

    const text = `
🔔 Новая заявка с сайта M Furniture

👤 Имя: ${name}

📞 Телефон: ${phone}

🪑 Что нужно изготовить:
${message}
`.trim();

    console.log("=== SENDING TO TELEGRAM ===");

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    const telegramData = await response.json();

    console.log("Telegram response:", telegramData);

    if (!telegramData.ok) {
      console.error("Telegram error:", telegramData.description);

      return NextResponse.json(
        {
          success: false,
          error: telegramData.description,
        },
        { status: 500 }
      );
    }

    console.log("=== TELEGRAM MESSAGE SENT ===");

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is working",
  });
}