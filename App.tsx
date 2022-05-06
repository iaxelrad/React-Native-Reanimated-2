import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useFollowAnimatedPosition} from './useFollowAnimatedPosition';

const App = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({x: 0, y: 0});
  //useAnimatedGestureHandler({})
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  const {
    followX: blueFollowX,
    followY: blueFollowY,
    rStyle: rBlueCircleStyle,
  } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });

  const {
    followX: redFollowX,
    followY: redFollowY,
    rStyle: rRedCircleStyle,
  } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY,
  });

  const {rStyle: rGreenCircleStyle} = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, styles.greenCircle, rGreenCircleStyle]}
      />
      <Animated.View
        style={[styles.circle, styles.redCircle, rRedCircleStyle]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rBlueCircleStyle]} />
      </GestureDetector>
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
  circle: {
    height: 80,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: 'blue',
    opacity: 0.8,
    position: 'absolute',
  },
  redCircle: {backgroundColor: 'red'},
  greenCircle: {backgroundColor: 'green'},
});

export default App;
