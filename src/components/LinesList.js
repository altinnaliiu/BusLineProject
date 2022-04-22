import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import BusLineItem from '../components/BusLineItem';

const LinesList = props => {
  const renderBusLineItem = itemData => {
    return (
      <BusLineItem
        data={itemData.item}
        onSelectBusLine={() => {
          props.navigation.navigate({
            routeName: 'BusLineDetails',
            params: {
              lineId: itemData.item.id,
              lineVendNisja: itemData.item.vendNisja,
              lineDestinacioni: itemData.item.destinacioni
            }
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <Text>Shfaq linjat me</Text>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderBusLineItem}
        style={{width: '100%'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LinesList