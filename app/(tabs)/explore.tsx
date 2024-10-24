import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from '../../components/SplashScreen'; // Import your splash screen

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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome to the Anime Streaming App!</Text>
          {/* Main app content goes here */}
        </View>
      )}
    </>
  );
}
