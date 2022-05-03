import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface PageProps {
  title: string;
  index: number;
}

const Page: FC<PageProps> = ({index, title}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}
    />
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
