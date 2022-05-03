import React, {FC} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {width: PAGE_WIDTH} = Dimensions.get('window');

const Page: FC<PageProps> = ({index, title, translateX}) => {
  const pageOffset = PAGE_WIDTH * index;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value + pageOffset}],
    };
  });

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: `rgba(0,0,256,0.${index + 2})`,
        },
        rStyle,
      ]}
    />
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
