import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import Page from './components/Page';
import {BACKGROUND_COLOR, PAGES} from './constants';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {PAGES.map((page, index) => (
          <Page key={index.toString()} page={page} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollView: {flex: 1},
});

export default App;
