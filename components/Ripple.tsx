import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: any;
}

const Ripple: FC<RippleProps> = ({style, onTap, children}) => {
  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        console.log('onActive', event);
      },
      onEnd: () => {},
    });

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View style={style}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default Ripple;
