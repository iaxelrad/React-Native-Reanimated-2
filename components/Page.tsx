import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get('window');

const SIZE = width * 0.7;

const Page = ({index, title, translateX}: PageProps) => {
  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={styles.square}></Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  pageContainer: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,

    backgroundColor: 'rgba(0,0,256,0.4)',
  },
});
