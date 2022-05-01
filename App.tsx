import React from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Pinch Gesture Handler</Text>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
