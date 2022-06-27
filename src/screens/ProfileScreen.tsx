import React from 'react';
import { Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const ProfileScreen = () => {
  return (
    <>
    <Text>ProfileScreen</Text>
    <Calendar theme={{  arrowColor: '#f59e0b', todayTextColor: '#f59e0b'}}/>
    </>
  )
} 

export default ProfileScreen;