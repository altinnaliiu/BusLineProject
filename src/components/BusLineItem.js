import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BusLineItem = props => {
  return (
    <View style={styles.lineItem}>
      <TouchableOpacity onPress={props.onSelectBusLine}>
        <View>
          <View style={{...styles.lineRow, ...styles.lineHeader}}>
            <Text style={styles.lineItemHeader}>
              <Ionicons
                name='bus-outline'
                size={20}
                color='#f50'
              />
              {props.data.company}
            </Text>
          </View>
          <View style={{...styles.lineRow, ...styles.lineDetails}}>
            <Text>
              <Ionicons
                name='time-outline'
                size={18}
                color='#f50'
              />
              {props.data.ora}
            </Text>
            <Text>
              <Ionicons
                name='location-outline'
                size={18}
                color='#f50'
              />
              {props.data.vendNisja}
            </Text>
            <Text style={styles.test}>
              <Ionicons
                name='navigate-outline'
                size={18}
                color='#f50'
              />
              {props.data.destinacioni}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  test: {
    fontSize: 14
  },
  lineItem: {
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    // borderColor: 'black',
    // borderWidth: 1,
    marginBottom: 30,
    borderRadius: 20,
  },
  lineItemHeader: {
    fontSize: 20,
    backgroundColor: '#edeff2',
    flex: 1,
    height: 26,
    textAlign: 'center',
    color: '#092245'
  },
  lineRow: {
    flexDirection: 'row'
  },
  lineHeader: {
    height: '77%',
  },
  lineDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
})

export default BusLineItem