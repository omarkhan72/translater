const axios = require("axios");

const OPENROUTER_API_KEY = "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";  // Replace securely later

async function translateText(text, targetLanguage) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Translate the following text into ${targetLanguage}:`,
        },
        {
          role: "user",
          content: text, 
        },
      ],
    },
    {
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const reply = response.data.choices[0].message.content;
  return reply;
}

module.exports = { translateText };
