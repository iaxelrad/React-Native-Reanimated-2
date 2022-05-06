import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './components/Page';
import {BACKGROUND_COLOR, PAGES} from './constants';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Animated.ScrollView
        style={styles.scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16} //to achieve 60fps -> 1/60 = 0.0166 = 16ms
      >
        {PAGES.map((page, index) => (
          <Page
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {/* Paginator */}
        <View style={styles.fillCenter}>
          {PAGES.map((page, index) => {
            return <View style={styles.dot} />;
          })}
        </View>
        {/* Text Container */}
        <View style={styles.fillCenter}>
          <Text style={styles.text}>View Board</Text>
        </View>
        {/* Icon Container */}
        <View style={styles.fillCenter}>
          <Icon name="arrowright" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {flex: 1},
  footer: {
    height: 50,
    marginBottom: 50,
    flexDirection: 'row',
  },
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.7,
    fontWeight: '500',
  },
  dot: {},
});

export default App;
