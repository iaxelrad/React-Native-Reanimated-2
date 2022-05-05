import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {N, SQUARE_SIZE} from '../constants';

interface SquareProps {
  index: number;
}

const Square: FC<SquareProps> = ({index}) => {
  return (
    <View
      style={[
        styles.container,
        {
          opacity: (index + 1) / N,
          transform: [{translateY: -index * SQUARE_SIZE}],
        },
      ]}
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
