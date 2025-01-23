/* eslint-disable react-native/no-inline-styles */
/*
 * Copyright (c) 2025, Stephen Mgbeojikwe. All rights reserved.
 * For license. See license.txt
 */


import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';

const CalendarApp = () => {
  const [selectedDate, setSelectedDate] = useState('');


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Calendar Mini-App</Text>
    <Calendar
      onDayPress={(day) => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
      }}
    />
    {selectedDate ? <Text style={styles.selectedDate}>Selected: {selectedDate}</Text> : null}
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default CalendarApp