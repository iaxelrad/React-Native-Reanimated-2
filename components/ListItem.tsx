import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TaskInterface} from '../App';

interface ListItemsProps {
  task: TaskInterface;
}

const ListItem: FC<ListItemsProps> = ({task}) => {
  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      translateX.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.taskContainer, rStyle]}>
        <View style={styles.task}>
          <Text style={styles.taskTitle}>{task.title}</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
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
