import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: any;
}

const Ripple: FC<RippleProps> = ({style, onTap, children}) => {
  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: () => {
        if (onTap) {
          runOnJS(onTap)();
        }
      },
      onEnd: () => {},
    });

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = 200;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      backgroundColor: 'red',
      position: 'absolute',
      opacity: 0.2,
      transform: [
        {
          scale: 0.5,
        },
      ],
    };
  });

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={style}>
        <View>{children}</View>
        <Animated.View style={rStyle} />
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  circle: {},
});

export default Ripple;
