import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';
import Square from './components/Square';
import {N, SQUARE_SIZE} from './constants';

const App = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(2 * Math.PI, {
      duration: 1000,
      easing: Easing.linear,
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {new Array(12).fill(0).map((_, index) => {
        return <Square index={index} key={index} progress={progress} />;
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
