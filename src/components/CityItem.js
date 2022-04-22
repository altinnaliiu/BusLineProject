import React from 'react';
import { View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native';

const CompanyItem = props => {
  let TouchableCmp = TouchableOpacity;

  // const url = require(`../../assets/${props.name}.png`)

  const checkCityUrl = name => {
    switch (name) {
      case 'Prishtine':
        return require(`../../assets/Prishtine.png`)
      case 'Ferizaj':
        return require(`../../assets/Ferizaj.png`)
      case 'Mitrovice': 
        return require(`../../assets/Mitrovice.png`)
      case 'Prizren': 
        return require(`../../assets/Prizren.png`)
      case 'Gjilan': 
        return require(`../../assets/Gjilan.png`)
      case 'Peje': 
        return require(`../../assets/Peje.png`)
    }
  }

  return (
  <View style={styles.container}>
    <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
      <View style={styles.card_template}>
        <Image 
          style={styles.card_image}
          source={checkCityUrl(props.name)}
        />
      <View style={styles.text_container}>
        <Text style={styles.card_title}>{props.name}</Text>
      </View>
      </View>
    </TouchableCmp>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_template:{
    width: 360,
    height: 250,
    marginBottom: 20
  },
  card_image: {
    width: 360,
    height: 250,
    borderRadius : 10
  },
  text_container:{
    position: "absolute",
    width: 360,
    // height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "#f50",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_title: {
     color: "white",
     fontSize: 24
  }
})

export default CompanyItem;