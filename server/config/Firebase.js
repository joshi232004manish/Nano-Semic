import admin from "firebase-admin";
import serviceAccount from "../src/new.js" 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
