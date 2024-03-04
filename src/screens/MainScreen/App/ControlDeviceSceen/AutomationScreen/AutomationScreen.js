import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const AutomationScreen = ({ navigation }) => {
  const [selectedText, setSelectedText] = useState('');

  const handleTextPress = (Text) => {
    setSelectedText(Text);
    navigation.navigate('Smart', {
      selectedText: Text,
    });
  };

  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    navigation.navigate('Smart', {
      selectedText: option,
    });
  };

  return (
    
    <View>
      <TouchableOpacity onPress={() => handleTextPress('HIHI')}>
        <Text>HIHI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Quạt' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Quạt')}>
        <Text style={styles.optionText}>Quạt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Đèn' && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect('Đèn')}>
        <Text style={styles.optionText}>Đèn</Text>
      </TouchableOpacity>
    </View>
    
   
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#b0e0e6',
  },
  optionText: {
    fontSize: 18,
  },
});

export default AutomationScreen;

