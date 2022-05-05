import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {N, SQUARE_SIZE} from '../constants';

interface SquareProps {
  index: number;
  progress: SharedValue<number>;
}

const Square: FC<SquareProps> = ({index, progress}) => {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rotate = useDerivedValue(() => {
    return Math.min(finalAngle, progress.value);
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(-N * SQUARE_SIZE);
    }
    return -index * SQUARE_SIZE;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${rotate.value}rad`},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <Animated.View
      style={[styles.container, {opacity: (index + 1) / N}, rStyle]}
      key={index}
    />
  );
};

export default Square;

const styles = StyleSheet.create({
  container: {
    height: SQUARE_SIZE,
    aspectRatio: 1,
    backgroundColor: 'white',
    position: 'absolute',
  },
});
