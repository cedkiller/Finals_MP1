import { Text, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [background, setBackground] = useState(require('./assets/ice.jpg'));
  const [input, setInput] = useState('');
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('˙F');

  const onChangeBackground = (text) => {
    setInput(text);
      if (text >= 32)
      {
        setBackground(require('./assets/hot.jpg'));
      }
      else {
        setBackground(require('./assets/ice.jpg'));
      }
  };

  const onPressable = () => {
    setCount(count + 1);

    if (count % 2 === 0)
    {
      setValue('˙C');
    }
    else {
      setValue('˙F');
    }
  };

  const onCompute = () => {
    
      if (val === '˙F')
        {
          return parseFloat(input) * 1.8 + 32;
        }
        else {
          return (parseFloat(input) - 32) / 1.8;
        }
    
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image}>
          <Text style={styles.head}>{onCompute().toFixed(1)} {val}</Text>
          <TextInput
            placeholder="Input Temp" 
            style={styles.input}
            onChangeText={onChangeBackground}
            value={input}
            keyboardType="numeric"
          />
          <TouchableOpacity style = {styles.button} onPress = {onPressable}>
            <Text style = {{color: 'white', fontWeight: 'bold', paddingLeft: 25, paddingTop: 10, fontSize: 17}}>Convert to {val}</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontWeight: 'bold', marginTop: 30}}>Copyright By Cedrick Jasper R. Sarabia</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  head: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold'
  },

  input: {
    height: 50,
    width: 300,
    margin: 30,
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: 'white'
  },

  button: {
    height: 50,
    width: 150,
    borderRadius: 30,
    backgroundColor: 'black',
    marginLeft: 105
  }
});
