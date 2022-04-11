import React from 'react';

import {Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native';

const Button = ({image, text, goTo}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => goTo()}
      activeOpacity={0.8}
      underlayColor="transparent">
      <View>
        <Image source={image} width={24} height={24} />
        <Text>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default Button;
