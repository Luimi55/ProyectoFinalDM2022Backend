import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredInputState, setEnteredInputState] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function userInputHandler(inputText){
    setEnteredInputState(inputText);
  };

  function addInputHandler(){
    setItemsList(currentItemsList => [
      ...currentItemsList,
      enteredInputState
    ])
  };


  return (
    <View style={styles.app_container}>
      <View style={styles.input_container}>
        <TextInput 
          style={styles.textInput} 
          placeholder='What are you looking for?'
          onChangeText={userInputHandler} />

        <Button 
          title='Agregar'
          onPress={addInputHandler}/>
      
      </View>
      <View style={styles.listContainer}>
        {itemsList.map((items) =>(
          <View 
          style={styles.listStyle} 
          key={items}>   
              <Text>
                {items}
              </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app_container:{
    flex:1,
    paddingTop:50,
    paddingHorizontal: 16,

  },

  input_container:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },

  textInput:{

    borderWidth: 1,
    borderColor: 'green',
    width:'80%',
    marginRight: 8,
    padding: 8

  },

  listContainer:{
    flex:7
  },

  listStyle:{
    padding:10,
    borderRadius:3,
    backgroundColor: '#5eeaa0',
    margin:5,
    color:'white'
  }

});
