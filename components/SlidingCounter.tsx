import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

const ICON_SIZE = 20;
const CIRCLE_SIZE = 50;

const BUTTON_WIDTH = 170;
const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;

const SlidingCounter = () => {
  const translateX = useSharedValue(0);

  const clamp = (value: number, min: number, max: number) => {
    'worklet';
    return Math.min(Math.max(value, min), max);
  };

  const onPanGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        translateX.value = clamp(
          event.translationX,
          -MAX_SLIDE_OFFSET,
          MAX_SLIDE_OFFSET,
        );
      },
      onEnd: () => {
        translateX.value = withSpring(0);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const rPlusMinusIconStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET],
      [0.4, 0.8, 0.4],
    );
    return {
      opacity,
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={styles.button}>
        <Animated.View style={rPlusMinusIconStyle}>
          <Icon name="minus" size={ICON_SIZE} color="#ffffff" />
        </Animated.View>
        <Icon
          name="close"
          size={ICON_SIZE}
          color="#ffffff"
          style={styles.clear}
        />
        <Animated.View style={rPlusMinusIconStyle}>
          <Icon name="plus" size={ICON_SIZE} color="#ffffff" />
        </Animated.View>
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View style={[styles.circleContainer, rStyle]}>
            <View style={styles.circle} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: BUTTON_WIDTH,
    backgroundColor: '#111111',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    backgroundColor: '#232323',
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
  },
  clear: {
    opacity: 0,
  },
});

export default SlidingCounter;
