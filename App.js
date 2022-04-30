import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text>App.Js</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
