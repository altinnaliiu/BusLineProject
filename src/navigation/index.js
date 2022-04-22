import { Platform } from 'react-native-web';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import CitiesScreen from '../screens/CitiesScreen'
import BusLineScreen from '../screens/BusLineScreen'
import LineDetailScreen from '../screens/LineDetailScreen'
import FavoriteBusLines from '../screens/FavoriteBusLines'
import FiltersScreen from '../screens/FiltersScreen'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: ''
  },
  headerTintColor: '#f50'
}

const AppNavigator = createStackNavigator({
  Companies: {
    screen: CitiesScreen
  },
  BusLine: {
    screen: BusLineScreen,
  },
  BusLineDetails: {
   screen: LineDetailScreen,
  }
}, 
{
  defaultNavigationOptions: defaultStackNavOptions
})

const FavoriteNavigator = createStackNavigator({
  Favorites: FavoriteBusLines,
  BusLineDetails: LineDetailScreen
},
{
  defaultNavigationOptions: defaultStackNavOptions
})

const AppBottomNavigator = createBottomTabNavigator({
  Lines: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: tabInfo => {
        return <Ionicons name="bus" size={20} color={tabInfo.tintColor}/>
      }
    }
  },
  Favorites: {
    screen: FavoriteNavigator,
    navigationOptions: {
      backgroundColor: 'black',
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={20} color={tabInfo.tintColor}/>
      }
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
}
)

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
})


export default createAppContainer(AppBottomNavigator)