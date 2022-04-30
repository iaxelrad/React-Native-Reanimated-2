import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 100;

const App = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * 2 * Math.PI}rad`},
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true); // For infinite loop set 2nd parameter of withRepeat to -1
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      <Animated.View
        style={[
          {height: SIZE, width: SIZE, backgroundColor: 'blue'},
          reanimatedStyle,
        ]}
      />
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
});

export default App;
