import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

function getApp(): FirebaseApp | null {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
  return getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]!;
}

/** Returns Firestore when `NEXT_PUBLIC_FIREBASE_*` env vars are set; otherwise `null`. */
export function getFirestoreDb(): Firestore | null {
  const app = getApp();
  return app ? getFirestore(app) : null;
}

/** True when the client bundle has the minimum vars to initialize Firebase (same condition as `getFirestoreDb()`). */
export function isFirebaseClientConfigured(): boolean {
  return Boolean(
    typeof process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'string' &&
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY.length > 0 &&
      typeof process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === 'string' &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID.length > 0,
  );
}
