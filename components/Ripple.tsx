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
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: any;
}

const Ripple: FC<RippleProps> = ({style, onTap, children}) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const scale = useSharedValue(0);

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: event => {
        centerX.value = event.x;
        centerY.value = event.y;

        scale.value = 0;
        scale.value = withTiming(1, {duration: 1000});
      },
      onActive: () => {
        if (onTap) {
          runOnJS(onTap)();
        }
      },
      onEnd: () => {},
    });

  const rStyle = useAnimatedStyle(() => {
    const circleRadius = 200;

    const translateX = centerX.value - circleRadius;
    const translateY = centerY.value - circleRadius;

    return {
      width: circleRadius * 2,
      height: circleRadius * 2,
      borderRadius: circleRadius,
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0.2,
      transform: [
        {translateX},
        {translateY},
        {
          scale: scale.value,
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
