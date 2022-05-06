import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureRoot: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});

export default App;
