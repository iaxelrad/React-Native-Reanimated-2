import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {PageInterface} from '../constants';

interface PageProps {
  page: PageInterface;
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const Page: FC<PageProps> = ({page}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />
        <Image source={page.source} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{page.title}</Text>
      <Text style={styles.description}>{page.description}</Text>
    </View>
  );
};

export default Page;

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
  image: {
    height: PAGE_HEIGHT * 0.5,
    aspectRatio: 1,
    position: 'absolute',
  },
  circle: {
    width: '100%',
    height: '100%',
    borderRadius: CIRCLE_WIDTH / 2,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: 'grey',
  },
});
