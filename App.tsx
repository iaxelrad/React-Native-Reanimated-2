import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Page from './components/Page';

const WORDS = ["what's", 'up', 'mobile', 'devs?'];

const App = () => {
  return (
    <Animated.ScrollView horizontal style={styles.container}>
      {WORDS.map((title, i) => {
        return <Page key={i.toString()} index={i} title={title} />;
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
