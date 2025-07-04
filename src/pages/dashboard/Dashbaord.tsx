// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from '../../supabase/Supabase';

const Dashboard: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data } = await supabaseClient.auth.getUser();
//       if (data?.user) {
// setUserEmail(data.user.email ?? null);
//       } else {
//         navigate('/'); // Redirect if not logged in
//       }
//     };
//     fetchUser();
//   }, []);

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {userEmail}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
