const functions = require('firebase-functions');

// Simple HTTPS function
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
