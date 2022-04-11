import React from 'react';
import IconSetting from '../assets/Setting.svg';
import {Text, View, StyleSheet} from 'react-native';

import {size} from '../consts/consts';
import MenuBtn from '../components/MenuBtn';
import LinearGradient from 'react-native-linear-gradient';
import CustomLineChart from '../components/CustomLineChart';

const screenWidth = size.width;
const screenHeight = size.height;

const Diabetes = ({navigation}) => {
  return (
    <LinearGradient colors={['#fff', '#d6f1ff']}>
      <View style={styles.container}>
        <LinearGradient colors={['#fff', 'transparent']}>
          <View style={styles.header}>
            <View style={styles.settings} />
            <View style={styles.charts}>
              <CustomLineChart label={[]} dataSet={[]} />
            </View>
          </View>
          <View style={styles.body}>
            <View />
            <LinearGradient colors={['#fff', 'transparent']}>
              <View style={styles.menu}>
                <Text>Menu</Text>
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <MenuBtn navigation={navigation} />
        </View>
      </View>
    </LinearGradient>
  );
};

const bodyHeight = screenHeight / 2.15;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    maxWidth: screenWidth,
  },
  header: {
    height: 330,
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: bodyHeight,
  },
  menu: {
    display: 'flex',
    width: 350,
    height: 188,
    borderRadius: 10,
    padding: 10,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    shadowRadius: 2,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#F8F8F8',
    elevation: 4,
  },
  settings: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    width: screenWidth - 10,
    height: 24,
  },
  charts: {
    width: screenWidth,
    height: 286,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#58A6CD',
    borderRadius: 10,
    width: 36,
    height: 36,
  },
});

export default Diabetes;
