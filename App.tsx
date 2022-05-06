import React, {useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const LIST_ITEM_COLOR = '#1798DE';

interface Item {
  id: number;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, {id: nextItemId}];
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {items.map(item => {
          return <View style={styles.listItem} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollView: {flex: 1},
  scrollViewContent: {paddingVertical: 50},
  listItem: {
    height: 100,
    backgroundColor: LIST_ITEM_COLOR,
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
  },
  floatingButton: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    bottom: 50,
    right: '5%',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: 'white', fontSize: 40},
});

export default App;
