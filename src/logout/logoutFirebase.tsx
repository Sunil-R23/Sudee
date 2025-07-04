import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export const logoutFirebase = async () => {
  try {
    await signOut(auth);
    console.log('✅ Logged out from Firebase');
  } catch (error) {
    console.error('Firebase logout error:', error);
  }
};
