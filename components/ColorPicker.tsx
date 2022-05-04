import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

interface ColorPickerProps extends LinearGradientProps {
  maxWidth: number;
}
type ContextType = {
  x: number;
};

const ColorPicker: FC<ColorPickerProps> = ({
  colors,
  start,
  end,
  style,
  maxWidth,
}) => {
  const translateX = useSharedValue(0);

  const adjustedTranslateX = useDerivedValue(() => {
    console.log('adjustedTranslateX', translateX.value);

    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE,
    );
  });

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.x = adjustedTranslateX.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: () => {},
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: adjustedTranslateX.value}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={{justifyContent: 'center'}}>
        <LinearGradient colors={colors} start={start} end={end} style={style} />
        <Animated.View style={[styles.picker, rStyle]} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ColorPicker;

const CIRCLE_PICKER_SIZE = 45;

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    backgroundColor: 'white',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
  },
});
