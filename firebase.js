var admin = require("firebase-admin");

var serviceAccount = require("/home/avelino/clone-tabnews/Node.js-aplication-web/firebase/node-jay-s-firebase-adminsdk-hg9we-231039f45d.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

module.exports = db;
