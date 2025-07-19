const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors({ origin: true }));

const { extractTextFromImage } = require("./ocr");
const { translateText } = require("./translate");

// OCR Endpoint
app.post("/extract", async (req, res) => {
  try {
    const imageBase64 = req.body.imageBase64;
    const text = await extractTextFromImage(imageBase64);
    res.json({ extractedText: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Translation Endpoint
app.post("/translate", async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    const translated = await translateText(text, targetLanguage);
    res.json({ translatedText: translated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

exports.api = functions.https.onRequest(app);
