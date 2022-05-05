import React from 'react';
import {StyleSheet, View} from 'react-native';
import SlidingCounter from './components/SlidingCounter';

const App = () => {
  return (
    <View style={styles.container}>
      <SlidingCounter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
