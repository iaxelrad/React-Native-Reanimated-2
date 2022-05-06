import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const App = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  //useAnimatedGestureHandler({})
  const gesture = Gesture.Pan().onUpdate(event => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);
  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rStyle]} />
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
  },
});

export default App;
