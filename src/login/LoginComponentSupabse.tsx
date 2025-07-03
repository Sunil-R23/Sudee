import { useEffect } from 'react';
import { supabaseClient } from '../supabase/Supabase';
import { useNavigate } from 'react-router-dom';


 export  const LoginComponentSupabse = () => {

    const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Login error:', error.message);
  };

  useEffect(() => {

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event, session);
      if (event === 'SIGNED_IN' && session?.user) {
        console.log('User signed in:', session.user);
        navigate('/dashboard'); // Redirect to dashboard
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
  const storeUser = async () => {
    const { data } = await supabaseClient.auth.getUser();
    if (data?.user) {
      const { email, id } = data.user;

      // Get IP info
      const ipRes = await fetch('https://ipapi.co/json/');
      const ipData = await ipRes.json();

      await supabaseClient.from('visitors').insert({
        user_id: id,
        email,
        city: ipData.city || 'Unknown',
        country: ipData.country_name || 'Unknown',
        user_agent: navigator.userAgent,
      });
    }
  };

  storeUser();
}, []);


  return <button onClick={signInWithGoogle}>Login with Google using supabase</button>;
};
