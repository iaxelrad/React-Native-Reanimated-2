import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';

const App = () => {
  const doubleTapRef = useRef();

  return (
    <View style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onHandlerStateChange={() => console.log('SINGLE_TAP')}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={() => console.log('DOUBLE_TAP')}>
          <Image source={require('./assets/image.jpeg')} style={styles.image} />
        </TapGestureHandler>
      </TapGestureHandler>
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
