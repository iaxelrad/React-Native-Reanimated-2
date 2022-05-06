import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const BottomSheet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  line: {
    width: 74,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
