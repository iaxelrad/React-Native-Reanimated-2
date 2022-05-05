import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface RippleProps {
  style?: StyleProp<ViewStyle>;
  onTap?: () => void;
  children: any;
}

const Ripple: FC<RippleProps> = ({style, onTap, children}) => {
  return <View style={style}>{children}</View>;
};

export default Ripple;
