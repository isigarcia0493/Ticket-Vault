import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from './components/Button';

const concertImage = require('./assets/concert.png');

export default function App() {
  let [userInput, setUserInput] = useState('');
  let [isEmpty, setIsEmpty] = useState(true);
  let [cost, setCost] = useState();

  const calculateCost = (value) => {
    if(value == "" || value == null){
      setIsEmpty(true);
    }else{
      const ticketCost = 99.99;
      let totalCost = (parseInt(value) * ticketCost);
      setCost(totalCost.toFixed(2));
      setIsEmpty(false);
    }
  }


  return (
    <View style={styles.container}>
        <Text style={styles.ticket}>Ticket Vault</Text>
        <TextInput 
          style={styles.input} 
          keyboardType='numeric'
          placeholder="Number of Tickets" 
          onChangeText={newInput => setUserInput(newInput)} />
        <View style={styles.buttonContainer}>
            <Button label="Find The Cost" onPress={() => calculateCost(userInput)}/>
        </View>
        <View>
          <Text style={styles.cost}>{isEmpty ? "" : "Ticket Cost: " + "$" + cost}</Text>
        </View>
      <View style={styles.imageContainer}>
          <Image source={concertImage} style={styles.Image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,    
  },
  ticket: {
    fontSize: 60,
    marginBottom: 20,
    marginTop: 100
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1/3,
    marginBottom: 50,
  },
  cost: {
    color: '#000',
    fontSize: 20,
    marginBottom: 50,
  }
});
