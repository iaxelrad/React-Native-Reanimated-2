import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

const ICON_SIZE = 20;

const SlidingCounter = () => {
  const translateX = useSharedValue(0);

  const onPanGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        translateX.value = event.translationX;
        console.log(event.translationX);
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

  return (
    <View style={styles.button}>
      <Icon name="minus" size={ICON_SIZE} color="#ffffff" />
      <Icon name="close" size={ICON_SIZE} color="#ffffff" />
      <Icon name="plus" size={ICON_SIZE} color="#ffffff" />
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View style={[styles.circleContainer, rStyle]}>
          <View style={styles.circle} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 170,
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
    height: 50,
    width: 50,
    backgroundColor: '#232323',
    borderRadius: 25,
    position: 'absolute',
  },
});

export default SlidingCounter;
