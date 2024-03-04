import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import plus from '../../../../../assets/image/plus.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const SmartScreen = ({ route, navigation }) => {
  const { selectedText } = route.params || { selectedText: '' }; 
  const [currentSelectedText, setCurrentSelectedText] = useState(selectedText);

  const handleAddPress = () => {
    navigation.navigate('ControlDevice');
    
    
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddPress}>
          <Image source={plus} style={styles.image} />
          <Text style={styles.text}>Add new </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.selectedTextView}>
        <Text style={{ color: 'white', fontSize: 20 }}>{currentSelectedText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column', 
    // alignItems: 'center', 
    marginHorizontal: 10
  },
  button: {
    marginVertical: 10, 
    width: 100,
    height: 100,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#008C8C',
  },
  selectedTextView: {
    marginTop: 20, 
    width: 100,
    height: 100,
    backgroundColor: '#008C8C',
    color: 'white',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 50,
    fontWeight: 'bold',
  },
  image: {
    height: 25,
    position: 'absolute',
    width: 25,
    top: 20,
    left: 35,
  },
});

export default SmartScreen;
