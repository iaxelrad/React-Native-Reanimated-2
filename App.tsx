import React from 'react';
import {Text, StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const BACKGROUND_COLOR = '#444b6f';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#a6e1fa';

const {width, height} = Dimensions.get('window');

const CIRCLE_LENGTH = 1000;
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const App = () => {
  return (
    <View style={styles.container}>
      <Svg
        x={width / 2}
        y={height / 2}
        stroke={BACKGROUND_STROKE_COLOR}
        strokeWidth={30}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={CIRCLE_RADIUS}
          stroke={STROKE_COLOR}
          strokeWidth={15}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
