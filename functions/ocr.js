const Tesseract = require("tesseract.js");

async function extractTextFromImage(base64Image) {
  const buffer = Buffer.from(base64Image, "base64");

  const result = await Tesseract.recognize(buffer, "eng");
  return result.data.text;
}

module.exports = { extractTextFromImage };
