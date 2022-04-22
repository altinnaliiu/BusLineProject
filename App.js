import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/index'
import lineReducer from './src/store/reducers';

import CityItem from './src/components/CityItem';
import CompanyInput from './src/components/CompanyInput'

const rootReducer = combineReducers({
  lines: lineReducer
})

const store = createStore(rootReducer)

export default function App() {
  // const [companyNames, setCompanyNames] = useState([])

  // const addCompanyHandler = companyName => {
  //   setCompanyNames(currentCompanies => [
  //     ...currentCompanies,
  //     {id: Math.random().toString(), value: companyName}
  //   ])
  // }

  // const removeCompanyHandler = companyId => {
  //   setCompanyNames(currentCompanies => {
  //     return currentCompanies.filter(company => company.id !== companyId)
  //   })
  // }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
    // <View style={styles.screen}>
    // comment
    //   <Button title='Add new Company' />
    //   <CompanyInput onAddCompany={addCompanyHandler} />
    //   <FlatList
    //     keyExtractor={(item, index) => item.id}
    //     data={companyNames}
    //     renderItem={itemData => (
    //       <CityItem
    //         id={itemData.item.id}
    //         onDelete={removeCompanyHandler}
    //         title={itemData.item.value} 
    //       />
    //     )
    //   }
    //   />
    // </View>
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    paddingTop: 100
  },
});
