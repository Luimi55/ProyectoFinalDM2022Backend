import React, {Component} from 'react';
import { ActivityIndicator, Flatlist, Text, View } from 'react-native';

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
      this.state({data: json})
    }
    catch(error)
    {
      console.log('Error API', error);
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

    return 
    (
      <View style={{flex:1, padding:25}}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList data={data}
          keyExtractor={({id}, index) => id}
          renderItem ={({item}) => (
            <Text>{item.name} - {item.price}</Text>
          )}/>
        )}
      </View>
    );
  }

}

