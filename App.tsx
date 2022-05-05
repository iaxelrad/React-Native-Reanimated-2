import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

const BACKGROUND_COLOR = '#444b6f';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#a6e1fa';

const {width, height} = Dimensions.get('window');

const CIRCLE_LENGTH = 1000;
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const App = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2000});
  }, []);

  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={CIRCLE_RADIUS}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={CIRCLE_RADIUS}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={CIRCLE_LENGTH * 0.5}
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
