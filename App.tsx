import React, {useCallback, useRef} from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './components/BottomSheet';

const App = () => {
  const ref = useRef<BottomSheetRefProps>(null);
  const onPress = useCallback(() => {
    const isActive = ref.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureRoot}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{flex: 1, backgroundColor: 'orange'}} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureRoot: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    opacity: 0.6,
  },
});

export default App;
