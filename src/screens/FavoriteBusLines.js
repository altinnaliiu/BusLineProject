import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import LinesList from '../components/LinesList';
import { BUSLINES } from '../../data/dummy-data';

const FavoriteBusLines = props => {

  const favLines = useSelector(state => state.lines.favoriteLines)

  return (
    <LinesList
      listData = {favLines}
      navigation={props.navigation} 
    />
  )
}

const styles = StyleSheet.create({
})

export default FavoriteBusLines