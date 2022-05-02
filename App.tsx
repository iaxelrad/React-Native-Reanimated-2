import React, {useCallback, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const App = () => {
  const scale = useSharedValue(0);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onHandlerStateChange={() => console.log('SINGLE_TAP')}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('./assets/image.jpeg')}
              style={styles.image}>
              <AnimatedImage
                source={require('./assets/heart.png')}
                style={[styles.image, styles.heart, rStyle]}
                resizeMode="center"
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

const {width: SIZE} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  heart: {
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.3,
    shadowRadius: 35,
    shadowColor: 'black',
  },
});

export default App;
