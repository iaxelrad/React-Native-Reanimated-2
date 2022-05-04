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
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
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
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const adjustedTranslateX = useDerivedValue(() => {
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

      translateY.value = withSpring(-CIRCLE_PICKER_SIZE);
      scale.value = withSpring(1.2);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: () => {
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustedTranslateX.value},
        {scale: scale.value},
        {translateY: translateY.value},
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = colors.map((_, i) => (i / colors.length) * maxWidth);
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors,
    );

    return {
      backgroundColor,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={{justifyContent: 'center'}}>
        <LinearGradient colors={colors} start={start} end={end} style={style} />
        <Animated.View style={[styles.picker, rStyle]}>
          <Animated.View
            style={[styles.internalPicker, rInternalPickerStyle]}
          />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default ColorPicker;

const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    backgroundColor: 'white',
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
