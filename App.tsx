import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const SIZE = 100;

const App = () => {
  const translateX = useSharedValue(0);

  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: event => {},
      onActive: event => {
        translateX.value = event.translationX;
      },
      onEnd: event => {},
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View style={styles.backgroundStyle}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.square, rStyle]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 20,
  },
});

export default App;
