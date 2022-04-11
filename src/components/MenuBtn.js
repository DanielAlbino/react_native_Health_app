import React from 'react';
import HomeIcon from '../assets/home_icon.svg';
import {View, TouchableHighlight, StyleSheet} from 'react-native';

const MenuBtn = ({navigation}) => {
  return (
    <View style={styles.button}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="transparent"
        onPress={() => navigation.navigate('Home')}>
        <HomeIcon width={24} height={24} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58A6CD',
    borderRadius: 10,
    width: 36,
    height: 36,
  },
});

export default MenuBtn;
