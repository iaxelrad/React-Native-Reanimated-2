import React, {useCallback, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListItem from './components/ListItem';

const TITLES = [
  'Record the dismissible tutorial 🎥',
  'Leave 👍🏼 to the video',
  'Check YouTube comments',
  'Subscribe to the channel 🚀',
  'Leave a ⭐️ on the GitHub Repo',
];

export interface TaskInterface {
  title: string;
  index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({title, index}));

const BACKGROUND_COLOR = '#fafbff';

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const onDismiss = useCallback((task: TaskInterface) => {
    setTasks(tasks.filter(item => item.index !== task.index));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Tasks</Text>
      <ScrollView style={{flex: 1}}>
        {tasks.map(task => (
          <ListItem key={task.index} task={task} onDismiss={onDismiss} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
  },
});

export default App;
