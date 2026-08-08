import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("=== ROUTE STARTED ===");
  try {
    const { name, phone, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.log("ENV ERROR:", {
        token: !!token,
        chatId: !!chatId,
      });

      return NextResponse.json(
        {
          success: false,
          error: "ENV variables not found",
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
`;

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

    const telegram = await response.json();

    console.log("Telegram response:", telegram);

    if (!telegram.ok) {
      return NextResponse.json(
        {
          success: false,
          telegram,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}