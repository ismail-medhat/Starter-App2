import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ScreenNames from 'navigation/ScreenNames';
const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the onboarding Screen!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.BottomTabs)}
        style={styles.btnBox}>
        <Text style={styles.btnTxt}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;
