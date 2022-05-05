import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {TaskInterface} from '../App';

interface ListItemsProps {
  task: TaskInterface;
}

const ListItem: FC<ListItemsProps> = ({task}) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.task}>
        <Text style={styles.taskTitle}>{task.title}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
  },
  task: {
    width: '90%',
    height: 70,
    marginVertical: 10,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
});
