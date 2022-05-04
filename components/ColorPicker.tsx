import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface ColorPickerProps extends LinearGradientProps {}

const ColorPicker: FC<ColorPickerProps> = ({colors, start, end, style}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <LinearGradient colors={colors} start={start} end={end} style={style} />
      <View style={styles.picker} />
    </View>
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
