import 'dotenv/config';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5cwyrE98SlOSuTEPUOxAR_Av4SRlZ6L4",
  authDomain: "api-rest-node-js-data-dcd.firebaseapp.com",
  projectId: "api-rest-node-js-data-dcd",
  storageBucket: "api-rest-node-js-data-dcd.firebasestorage.app",
  messagingSenderId: "363038599019",
  appId: "1:363038599019:web:2b85d88628c556084c0e2e"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};