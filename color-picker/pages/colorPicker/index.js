import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as React from 'react';

export default function ColorPicker() {
    const [red, setRed] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    const [green, setGreen] = React.useState(0);

    const backgroundColor = `rgb(${red}, ${blue}, ${green})`

    const removeLetter = (value) => {
        console.log('recebeu ', value);
        let onlyNumbers = value;
        const lastChar = (value.substring(value.length -1));
        console.log('lastchar ', lastChar);
        const convertedNumber = parseInt(lastChar)
        if (convertedNumber === NaN){
            return lastChar
        } else {
            return value
        }
        return onlyNumbers
    }

    React.useEffect(() => {
        console.log(backgroundColor)
    }, [red, blue, green])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veja sua cor</Text>
      <View style={{...styles.square, backgroundColor: backgroundColor}}></View>
      <View style={styles.container2}>
        <Text style={styles.text}>R</Text>
        <TextInput
            style={styles.input}
            value={red.toString()}
            onChangeText={(value) => setRed(removeLetter(value))}
            keyboardType="numeric"
            maxLength ={3}
            inputMode = {"numeric"}

        />
        <Text style={styles.text}>G</Text>
        <TextInput
            style={styles.input}
            value={blue.toString()}
            onChangeText={(value) => setBlue(removeLetter(value))}
            keyboardType="numeric"
            maxLength ={3}
            inputMode = "numeric"
        />
        <Text style={styles.text}>B</Text>
        <TextInput
            style={styles.input}
            value={green.toString()}
            onChangeText={(value) => setGreen(removeLetter(value))}
            keyboardType="numeric"
            maxLength = {3}
            inputMode = "numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
  },
  square: {
    width: 235,
    height: 235,
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    width: 80,
    height: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',

  },
});
