import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

import { CITIES } from '../../data/dummy-data'
import CityItem from '../components/CityItem';


// import { getLines } from '../store/actions';
// import { useSelector, useDispatch } from "react-redux";
// import { useFocusEffect } from '@react-navigation/native';

const CompaniesScreen = props => {
  // const dispatch = useDispatch();
  // const { lines }  = useSelector((state) => state.lineReducer);

  // console.log(lines, 'lines')
  
  
  //   const useFetching = (getLines) => {
  //     useFocusEffect(
  //       React.useCallback(() => {
  //       dispatch(getLines());
  //         }, [dispatch,getLines]
  //       ))
  //   }
  //   useFetching(getLines);



  const renderGridItem = itemData => {
    return ( 
      <CityItem
        name={itemData.item.name}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'BusLine',
            params: {
              companyId: itemData.item.id,
              cityName: itemData.item.name
            }
          })
        }}
      />
    )
  }

  return (
    <View>
      <Text style={styles.text__container}>Zgjedh qytetin</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CITIES}
        renderItem={renderGridItem}
        // numColumns={1} 
      />
    </View>
  )
}

CompaniesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Qytetet'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
  text__container: {
    fontSize: 22,
    width: '100%',
    textAlign: 'center',
    padding: 10
  }
})

export default CompaniesScreen