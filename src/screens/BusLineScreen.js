import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CITIES, BUSLINES } from '../../data/dummy-data';
import LineList from '../components/LinesList'

const BusLineScreen = props => {

  const cityName = props.navigation.getParam('cityName')

  const displayBusLines = BUSLINES.filter(line => line.vendNisja === cityName || line.destinacioni === cityName)

  return (
    <LineList
      listData={displayBusLines}
      navigation={props.navigation} 
    />
  )
}

BusLineScreen.navigationOptions = navigationData => {
  const compId = navigationData.navigation.getParam('companyId')
  
  const selectedCompany = CITIES.find(obj => obj.id === compId)

  return {
    headerTitle: selectedCompany.name,
  }
}

export default BusLineScreen