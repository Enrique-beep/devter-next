const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://devter-82047.firebaseio.com',
  });
} catch (error) {
  
}

export const firestore = admin.firestore();
