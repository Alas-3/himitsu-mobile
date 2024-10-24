import React, { useState } from 'react';
import SplashScreen from '../../components/SplashScreen'; // Import your splash screen
import HomeScreen from '../../components/HomeScreen'; // Import your HomeScreen component

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setSplashVisible(false); // Hide splash screen after it's done
  };

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <HomeScreen />
      )}
    </>
  );
}
