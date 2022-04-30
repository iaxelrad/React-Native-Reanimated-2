import React, {useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';

const Colors = {
  dark: {
    background: '#1e1e1e',
    circle: '#252525',
    text: '#f8f8f8',
  },
  light: {
    background: '#f8f8f8',
    circle: '#fff',
    text: '#1e1e1e',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'light' | 'dark';

const App = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <View style={styles.backgroundStyle}>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggled => {
          setTheme(toggled ? 'dark' : 'light');
        }}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor={'violet'}
      />
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
