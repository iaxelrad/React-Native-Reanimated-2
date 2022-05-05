import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Square from './components/Square';
import {N, SQUARE_SIZE} from './constants';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {new Array(12).fill(0).map((_, index) => {
        return <Square index={index} key={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
