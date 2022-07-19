import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity 
      onPress={() => {
      let market = props.marketsData.find(market => market.id === props.item.marketId);
        alert('Product: ' + props.item.name + '\nPrice: ' + props.item.price + '$' + '\nMarket: ' + market.name + '\nMarket Rating: ' + market.rating);
      }}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>More Info</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#33b2e8', 
    height: 100, 
    width: 100, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  textStyle: {
    fontSize: 20, 
    color: '#fff'
  }
});

export default Button;
