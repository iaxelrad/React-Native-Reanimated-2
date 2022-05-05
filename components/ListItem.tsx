import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TaskInterface} from '../App';

interface ListItemsProps {
  task: TaskInterface;
}

const LIST_ITEM_HEIGHT = 70;

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
    <GestureHandlerRootView>
      <View style={styles.taskContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name={'trash-alt'}
            size={LIST_ITEM_HEIGHT * 0.4}
            color={'red'}
          />
        </View>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.task, rStyle]}>
            <Text style={styles.taskTitle}>{task.title}</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
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
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
