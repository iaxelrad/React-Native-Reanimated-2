import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import Svg, {Circle} from 'react-native-svg';

const BACKGROUND_COLOR = '#444b6f';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#a6e1fa';

const {width, height} = Dimensions.get('window');

const CIRCLE_LENGTH = 1000;
const CIRCLE_RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const App = () => {
  const [buttonText, setButtonText] = useState('Run');
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onPress = useCallback(() => {
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {duration: 2000});
    setButtonText(progress.value > 0 ? 'Run' : 'Reset');
  }, []);

  return (
    <View style={styles.container}>
      <ReText style={styles.progressText} text={progressText} />
      <Svg style={{position: 'absolute'}}>
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
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
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
  progressText: {
    fontSize: 80,
    color: 'rgba(255, 255, 255, 0.7)',
    width: 200,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.8,
    height: 60,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    letterSpacing: 2,
  },
});

export default App;
