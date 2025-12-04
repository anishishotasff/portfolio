// Firebase initialization and helper to submit contact form to Firestore
// Replace the values in `firebaseConfig` with your Firebase project's credentials.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'REPLACE_WITH_API_KEY',
  authDomain: 'portfolio-56bf9.firebaseapp.com',
  projectId: 'portfolio-56bf9',
  storageBucket: 'portfolio-56bf9.appspot.com',
  messagingSenderId: 'REPLACE_WITH_MESSAGING_SENDER_ID',
  appId: 'REPLACE_WITH_APP_ID'
};

try {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Attach a helper to window to be used by non-module legacy scripts
  window.submitContactToFirebase = async function (formData) {
    if (!formData) throw new Error('No form data provided');

    const doc = {
      name: formData.name || '',
      email: formData.email || '',
      subject: formData.subject || '',
      message: formData.message || '',
      createdAt: serverTimestamp()
    };

    // Save to a `contacts` collection
    const colRef = collection(db, 'contacts');
    return await addDoc(colRef, doc);
  };
  console.log('Firebase initialized (config placeholders must be replaced).');
} catch (err) {
  console.warn('Firebase initialization failed or environment unsupported:', err);
}

export {};
