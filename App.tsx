import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ripple from './components/Ripple';

const App = () => {
  return (
    <View style={styles.container}>
      <Ripple style={styles.ripple} onTap={() => {}}>
        <Text style={styles.text}>Tap</Text>
      </Ripple>
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
  ripple: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
    elevation: 2,
  },
  text: {fontSize: 20},
});

export default App;
