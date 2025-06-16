import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={['top', 'bottom', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default ScreenWrapper;
