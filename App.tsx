import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/image.jpeg')} style={styles.image} />
    </View>
  );
};

const {width: SIZE} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
});

export default App;
