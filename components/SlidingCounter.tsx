import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ICON_SIZE = 20;

const SlidingCounter = () => {
  return (
    <View style={styles.container}>
      <Icon name="minus" size={ICON_SIZE} color="#ffffff" />
      <Icon name="close" size={ICON_SIZE} color="#ffffff" />
      <Icon name="plus" size={ICON_SIZE} color="#ffffff" />
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 170,
    backgroundColor: '#111111',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: '#232323',
    borderRadius: 25,
    position: 'absolute',
  },
});

export default SlidingCounter;
