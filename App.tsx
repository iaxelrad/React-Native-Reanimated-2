import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './components/Page';

const WORDS = ["what's", 'up', 'mobile', 'devs?'];

const App = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={styles.container}>
      {WORDS.map((title, i) => {
        return (
          <Page
            key={i.toString()}
            index={i}
            title={title}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
