import React, {Component} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import List from './src/components/List';

export default class App extends Component
{
  constructor(propos)
  {
    super(propos);

    this.state = {
      productsData: [],
      marketsData: [],
      isLoading: true
    };

}

async getAll()
  {
    try
    {
      const response = await fetch('https://localhost:7204/api/Products');
      const json = await response.json();
      this.state.productsData = json;
      const response1 = await fetch('https://localhost:7204/api/Markets');
      const json1 = await response1.json();
      this.state.marketsData = json1;
    }
    catch(error)
    {
      console.error('Error API', error);
    }
    finally
    {
      this.setState({isLoading:false});
    }
  }

  componentDidMount()
  {
    this.getAll();
  }

  render()
  {
    const {productsData, marketsData, isLoading} = this.state;
    
    return (
      
      <View style={{flex:1, padding:25, backgroundColor: '#a6edab'}}>
        <View style={{backgroundColor: '#fff', marginBottom: 20, alignItems: 'center', borderWidth: 3}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Products</Text>
        </View>
        {isLoading ? <ActivityIndicator/> : (
          <List productsData={productsData} marketsData={marketsData}/>
        )}
      </View>
      
    );
  }
  
}