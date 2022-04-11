import React from 'react';
import {View, StyleSheet, Image, Text, Switch} from 'react-native';

import {size} from '../consts/consts';
import MenuBtn from '../components/MenuBtn';
import LinearGradient from 'react-native-linear-gradient';
import ButtonMenu from '../components/Button';
import AddIcon from '../assets/add.svg';
import StatisticsIcon from '../assets/statistics.svg';

const screenWidth = size.width;
const screenHeight = size.height;

const Diabetes = ({navigation}) => {
  const [toggled, setToggle] = React.useState(true);
  const [progress, setProgress] = React.useState(75);
  return (
    <LinearGradient colors={['#fff', '#d6f1ff']}>
      <View style={styles.container}>
        <LinearGradient colors={['#fff', 'transparent']}>
          <View style={styles.header}>
            <View style={styles.progressHeader}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Image
                  source={require('../assets/hydrate_big.png')}
                  style={styles.image}
                />
                <View style={styles.progressBar}>
                  <View style={[styles.innerBar, {height: progress}]} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[styles.h2, {color: '#000'}]}>0.75 / 1.5L</Text>
                <Text style={[styles.h2, {color: '#065C87'}]}>
                  You are Half way!
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.h2}>You need to drink</Text>
            <Text style={styles.h1}>3 of 6</Text>
            <Text style={styles.h2}>To reach your goal</Text>
          </View>
          <View style={styles.body}>
            <LinearGradient colors={['#fff', 'transparent']}>
              <View style={styles.menu}>
                <View style={styles.line}>
                  <ButtonMenu SvgIcon={<AddIcon />} text={'Glass ml'} />
                  <ButtonMenu
                    SvgIcon={<StatisticsIcon />}
                    text={'Statistics'}
                  />
                </View>
              </View>
            </LinearGradient>
            <View style={styles.switch}>
              <Switch
                onValueChange={value => setToggle(value)}
                value={toggled}
              />
              <Text style={styles.switchText}>Notify me to drink water</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.footer}>
          <MenuBtn navigation={navigation} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    maxWidth: screenWidth,
  },
  header: {
    height: 330,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    width: screenWidth,
    height: 240,
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
  },
  switch: {
    display: 'flex',
    flexDirection: 'row',
    top: 27,
  },
  switchText: {
    marginTop: -2,
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000',
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
  progressHeader: {
    width: screenWidth,
    height: 286,
    display: 'flex',
    justifyContent: 'flex-end',
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
  image: {
    width: 150,
    height: 155,
  },
  h1: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 20,
    height: 150,
    borderRadius: 50,
    backgroundColor: '#C4C4C4',
  },
  innerBar: {
    width: 20,
    borderRadius: 50,
    backgroundColor: '#00A3FF',
  },
});

export default Diabetes;
