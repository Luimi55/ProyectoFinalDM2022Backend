import React from 'react';
import {View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Button from './Button';

const List = (props) => {
  return (
    <FlatList data={props.productsData}
    keyExtractor={({id}, index) => id}
    renderItem ={({item}) => (
        <View style={styles.container}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548682.png'}} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.name} - {item.price}$ </Text>
        <Button item={item} marketsData={props.marketsData}/>
      </View>
    )}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginBottom:  10, 
    borderWidth: 2, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#ffffffff'
  },
  imageStyle: {
    width: 100, 
    height: 100, 
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default List;