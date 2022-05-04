import React from 'react';
import {Text, StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import ColorPicker from './components/ColorPicker';

const COLORS = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];
const BACKGROUND_COLOR = 'rgba(0,0,0,0.9)';

const App = () => {
  return (
    <>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer}>
        <ColorPicker
          colors={COLORS}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradient}
          maxWidth={PICKER_WIDTH}
        />
      </View>
    </>
  );
};

const {width} = Dimensions.get('window');
const PICKER_WIDTH = width * 0.9;

const styles = StyleSheet.create({
  topContainer: {
    flex: 3,
    backgroundColor: 'white',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {height: 40, width: PICKER_WIDTH, borderRadius: 20},
});

export default App;
