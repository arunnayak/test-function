import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const env = process.env.DAY_OF_WEEK;
  response.send(`Hello from Firebase! > ${env}`);
});
