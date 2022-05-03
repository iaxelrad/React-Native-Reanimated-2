import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Page from './components/Page';

const titles = ['whats', 'up', 'mobile', 'developers?'];

type ContextType = {
  x: number;
};

const App = () => {
  const translateX = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: event => {
      translateX.value = withDecay({velocity: event.velocityX});
    },
  });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.animatedView]}>
          {titles.map((title, index) => {
            return (
              <Page
                key={index.toString()}
                translateX={translateX}
                title={title}
                index={index}
              />
            );
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  animatedView: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
