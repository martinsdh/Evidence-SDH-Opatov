import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJf1nlJOqkK1SLfxu4836RhV4VURejFgE",
  authDomain: "evidence-sdh-opatov.firebaseapp.com",
  projectId: "evidence-sdh-opatov",
  storageBucket: "evidence-sdh-opatov.firebasestorage.app",
  messagingSenderId: "910376724668",
  appId: "1:910376724668:web:37e8b08c3fa6e01d6b08b9"
};

const app = initializeApp(firebaseConfig);

window.auth = getAuth(app);
window.db = getFirestore(app);
