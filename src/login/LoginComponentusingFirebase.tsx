import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const LoginComponentusingFirebase = () => {

    const navigate = useNavigate();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log('✅ Logged in:', {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('❌ Login error:', error);
    }
  };

  return (
    <button onClick={handleLogin} className="btn btn-primary">
      Login with Google through Firebase
    </button>
  );
};
