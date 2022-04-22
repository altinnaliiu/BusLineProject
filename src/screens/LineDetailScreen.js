import { React, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import { BUSLINES } from '../../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/index';

const LineDetailScreen = props => {
  const availableLines = useSelector(state => state.lines.lines)
  console.log(availableLines, 'available')
  const lineId = props.navigation.getParam('lineId')

  const selectedLine = BUSLINES.find(line => line.id === lineId) 

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    console.log('toggle favorite triggered')
    dispatch(toggleFavorite(lineId))
  }, [dispatch, lineId])

  useEffect(() => {
    // props.navigation.setParams({lineName: selectedLine.name})
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    props.navigation.setParams({test: 'bc'})
  }, [toggleFavoriteHandler])


  return (
    <View style={{...styles.lineItem, ...styles.shadow }}>
        <View>
          <View style={{...styles.lineRow, ...styles.lineHeader}}>
          <Text style={styles.lineItemHeader}>
              <Ionicons
                name='bus-outline'
                size={24}
                color='#f50'
              />
              {selectedLine.company}
            </Text>
          </View>
          <View style={{...styles.lineRow, ...styles.lineDetails}}>
            <Text style={styles.text}> Nisja: {selectedLine.ora}</Text>
            <Text style={styles.text}>Company: {selectedLine.company}</Text>
          </View>
          <View style={{...styles.lineRow, ...styles.lineDetails}}>
            <Text style={styles.text}>Numri uleseve: {selectedLine.numriUleseve}</Text>
            <Text style={styles.text}>Lloji: {selectedLine.lloji}</Text>
          </View>
          <View style={{...styles.lineRow, ...styles.lineDetails}}>
            <Text style={styles.text}>Vendnisja: {selectedLine.vendNisja}</Text>
            <Text style={styles.text}>Destinacioni: {selectedLine.destinacioni}</Text>
          </View>
        </View>
    </View>
  )
}

LineDetailScreen.navigationOptions = navigationData => {
  // const lineId = navigationData.navigation.getParam('lineId')
  const lineVendNisja = navigationData.navigation.getParam('lineVendNisja')
  const lineDesctinaconi = navigationData.navigation.getParam('lineDestinacioni')
  // const selectedLine = BUSLINES.find(line => line.id === lineId) 

  console.log(navigationData.navigation, 'QIKJO')

  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  return {
    headerTitle: lineVendNisja + ' - ' + lineDesctinaconi,
    headerRight:() => (
      <Text>
        <Ionicons
          name='ios-star'
          size={23}
          style={{paddingRight: 50}}
          // type='font-awesome'
          // color='#f50'
          onPress={() => toggleFavorite}
        />
      </Text>
    )
    // (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title='Favorite'
    //       iconName='ios-star'
    //       onPress={() => {
    //         console.log('favorite button')
    //       }}
    //     />
    //   </HeaderButtons>
    // )
  }
}

const styles = StyleSheet.create({
  icon : {
    marginRight: 100
  },
  lineItem: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 30,
    borderRadius: 20
  },
  lineItemHeader: {
    fontSize: 24,
    backgroundColor: '#edeff2',
    flex: 1,
    height: 50,
    textAlign: 'center',
    color: '#092245',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  lineRow: {
    flexDirection: 'row'
  },
  lineDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 25,
  },
  text: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#a7abb0',
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
    fontSize: 14
  }
})

export default LineDetailScreen