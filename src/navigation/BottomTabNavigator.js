// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MyTicketScreen,
  NotificationScreen,
  ProfileScreen,
} from '../screens';
import ScreenNames from './ScreenNames';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {Colors, ScaleHeight, ScaleWidth} from 'common';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {color: focused ? Colors.blackColor : Colors.extraGreyColor},
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          let IconName;
          if (route.name === ScreenNames.Home) {
            IconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ScreenNames.MyTicket) {
            IconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === ScreenNames.Notification) {
            IconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === ScreenNames.Profile) {
            IconName = focused ? 'heart' : 'heart-outline';
          }
          return <Icon name={IconName} size={22} />;
        },
        headerShown: false,
        tabBarStyle: [
          styles.tapStyles,
          {
            backgroundColor: Colors.white,
            borderTopColor: Colors.lightGray2,
            borderTopWidth: 0.3,
            borderWidth: 0,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}>
      <Tab.Screen name={ScreenNames.Home} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.MyTicket} component={MyTicketScreen} />
      <Tab.Screen
        name={ScreenNames.Notification}
        component={NotificationScreen}
      />
      <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleHeight(80),
    width: ScaleWidth('100%'),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === 'ios' ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === 'android' ? ScaleHeight(14) : 0,
  },
});
