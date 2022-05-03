import React from 'react';
import {StyleSheet, View} from 'react-native';
import Page from './components/Page';

const titles = ['whats', 'up', 'mobile', 'developers?'];

const App = () => {
  return (
    <View style={styles.container}>
      {titles.map((title, index) => {
        return <Page key={index.toString()} title={title} index={index} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
