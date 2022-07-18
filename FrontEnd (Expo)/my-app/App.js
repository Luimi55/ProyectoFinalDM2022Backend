import React, {Component} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends Component
{
  constructor(propos)
  {
    super(propos);

    this.state = {
      data: [],
      isLoading: true
    };

}

async getProducts()
  {
    try
    {
      const response = await fetch('https://localhost:7204/api/Products');
      const json = await response.json();
      this.state.data = json;
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
    this.getProducts();
  }

  render()
  {
    const {data, isLoading} = this.state;

    return (
      <View style={{flex:1, padding:25, backgroundColor: '#a6edab'}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList data={data}
          keyExtractor={({id}, index) => id}
          renderItem ={({item}) => (
            <View style={{flex:1, marginBottom:  10, borderWidth: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Image source={{uri: 'https://random.imagecdn.app/70/70'}} style={{ width: 100, height: 100 }} />
              <Text style={{fontSize: 18}}>{item.name} - {item.price}$ </Text>
              <TouchableOpacity
                onPress={() => alert('Prodcuct: ' + item.name + '\nPrice: ' + item.price)}
                style={{backgroundColor: '#33b2e8', height: 100, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: 20, color: '#fff'}}>More Info</Text>
              </TouchableOpacity>
            </View>
          )}/>
        )}
      </View>
      
    );
  }
  
}