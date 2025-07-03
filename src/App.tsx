import React, { useRef, useEffect, useState,  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logoText from './assets/birth.jpeg';
import type { BackgroundMusicHandle } from '../src/components/BackgroundAudio';
import { supabaseClient } from './supabase/Supabase';
//import BackgroundMusic from '../src/components/BackgroundAudio';
import { LoginComponentSupabse } from './login/LoginComponentSupabse';
import { LoginComponentusingFirebase } from './login/LoginComponentusingFirebase';
import SideBArtwo from './components/SideBArtwo';
import Login from './login/Login';
import Navigation from './navigation/Navigation';

const App: React.FC = () => {
  const bgMusicRef = useRef<BackgroundMusicHandle>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🎯 Target date: 7 August 2025
  const targetDate = new Date('2025-08-07T00:00:00');

  // useEffect(() => {
  //   const initializeVisitor = async () => {
  //     // 1. Get IP location
  //     const res = await fetch('https://ipapi.co/json/');
  //     const data = await res.json();
  //     const city = data.city || 'Unknown';
  //     const country = data.country_name || 'Unknown';

  //     // 2. Count visits locally
  //     let visits = localStorage.getItem('visitCount');
  //     const visitCount = visits ? parseInt(visits) + 1 : 1;
  //     localStorage.setItem('visitCount', visitCount.toString());

  //     // 3. Get user agent
  //     const userAgent = navigator.userAgent;

  //     // 4. Save to Supabase
  //     const { error } = await supabaseClient.from('visitors').insert([
  //       {
  //         city,
  //         country,
  //         user_agent: userAgent,
  //         visit_count: visitCount,
  //       },
  //     ]);

  //     if (error) {
  //       console.error('Error saving visitor:', error.message);
  //     } else {
  //       console.log('Visitor data saved to Supabase');
  //     }
  //   };

  //   initializeVisitor();

  //   // 5. Unmute background music after delay
  //   const timeout = setTimeout(() => {
  //     console.log('Unmuting background music after 2 seconds');
  //     bgMusicRef.current?.unMute();
  //   }, 2000);

  //   // 6. Countdown timer
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const distance = targetDate.getTime() - now.getTime();

  //     if (distance <= 0) {
  //       clearInterval(interval);
  //       return;
  //     }

  //     setTimeLeft({
  //       days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((distance / (1000 * 60)) % 60),
  //       seconds: Math.floor((distance / 1000) % 60),
  //     });
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleImageClick = () => {
    bgMusicRef.current?.unMute(); // Unmute background music
  };

  return (
    <div className="text-center text-white  repeating-text-background" onClick={handleImageClick}>
      <Navigation />
{/* <Login /> */}
      {/* <SideBArtwo />

      <LoginComponentSupabse />
      <LoginComponentusingFirebase />
      <BackgroundMusic ref={bgMusicRef} />
      <img
        src={logoText}
        alt="Logo"
        height="440"
        className="rounded d-block mx-auto my-3"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      <h1 className="mb-4 text-danger logo-spin">🎉 ಮುಂಗಡವಾಗಿ ಜನುಮದಿನದ ಶುಭಾಶಯಗಳು! 🎉</h1>

      <h3 className="mb-5 text-danger">
        {timeLeft.days} ದಿನ {timeLeft.hours} ಗಂಟೆ {timeLeft.minutes} ನಿಮಿಷ {timeLeft.seconds} ಸೆಕೆಂಡ್
      </h3>

      <h1 className="mb-5 text-danger">Sorry !!!</h1>
      <h1 className="mb-5 text-danger">Miss you 🥹🥹 !!!</h1>
       <h1 className="mb-5 text-danger">I failed to be your man🫶😔</h1> */}

    </div>
  );
};

export default App;
