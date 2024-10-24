import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps = { onFinish: () => {} }) {
  useEffect(() => {
    // Simulate a delay before calling onFinish
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>秘</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
  },
  logo: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#000000', // Black color for the symbol
  },
});