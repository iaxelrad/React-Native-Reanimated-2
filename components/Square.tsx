import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import {N, SQUARE_SIZE} from '../constants';

interface SquareProps {
  index: number;
  progress: SharedValue<number>;
}

const Square: FC<SquareProps> = ({index, progress}) => {
  const offsetAngle = (2 * Math.PI) / N;
  const finalAngle = offsetAngle * (N - 1 - index);

  const rStyle = useAnimatedStyle(() => {
    const rotate = Math.min(finalAngle, progress.value);

    return {
      transform: [{rotate: `${rotate}rad`}, {translateY: -index * SQUARE_SIZE}],
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
