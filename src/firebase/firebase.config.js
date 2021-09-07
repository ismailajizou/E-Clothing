const {FIREBASE_API_KEY, FIREBASE_APP_ID, FIREBASE_DB_URL} = process.env;

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "e-clothing-db-2e653.firebaseapp.com",
    databaseURL:FIREBASE_DB_URL,
    projectId: "e-clothing-db-2e653",
    storageBucket: "e-clothing-db-2e653.appspot.com",
    messagingSenderId: "23529814391",
    appId: FIREBASE_APP_ID,
    measurementId: "G-MHFYBVCZ7Z"
};

export default firebaseConfig;