// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

const firebaseConfig = {
  apiKey: 'AIzaSyCUxjAY_bSs1H0kAq4n5EXAWUKfl2PbcLM',
  authDomain: 'svelte-linktree.firebaseapp.com',
  projectId: 'svelte-linktree',
  storageBucket: 'svelte-linktree.appspot.com',
  messagingSenderId: '665585776568',
  appId: '1:665585776568:web:591e3b8843d4f62176814d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, set => {
    unsubscribe = onAuthStateChanged(auth, user => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();
