import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import plus from '../../../../../assets/image/plus.png'

const ControlDeviceSceen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions1And2, setShowOptions1And2] = useState(false);
  const [showOptions3And4, setShowOptions3And4] = useState(false);
  const [isAutomationSelected, setIsAutomationSelected] = useState(false);
  const [isScenarioSelected, setIsScenarioSelected] = useState(false);

  const handleOptionSelect = (option) => {
    if (option === 'Automation') {
      setShowOptions1And2(true);
      setShowOptions3And4(false);
      setIsAutomationSelected(true);
      setIsScenarioSelected(false);
    } else if (option === 'Scenario') {
      setShowOptions1And2(false);
      setShowOptions3And4(true);
      setIsAutomationSelected(false);
      setIsScenarioSelected(true);
    } else {
      setSelectedOption(option);
      navigation.navigate('Smart', {
        selectedText: option,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.optionMain,
            isAutomationSelected && styles.selectedOptionMain,
          ]}
          onPress={() => handleOptionSelect('Automation')}>
          <Text style={[styles.optionTextMain, isAutomationSelected && { color: '#068B8B', fontWeight: 'bold' }]}>Automation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionMain,
            isScenarioSelected && styles.selectedOptionMain,
          ]}
          onPress={() => handleOptionSelect('Scenario')}>
          <Text style={[styles.optionTextMain, isScenarioSelected && { color: '#068B8B', fontWeight: 'bold' }]}>Scenario</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        {showOptions1And2 && (
          <>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Option1' && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect('Option1')}>
              <Text style={styles.optionText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Option2' && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect('Option2')}>
              <Text style={styles.optionText}>Option 2</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.rowContainer}>
        {showOptions3And4 && (
          <>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Option3' && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect('Option3')}>
              <Text style={styles.optionText}>Option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOption === 'Option4' && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect('Option4')}>
              <Text style={styles.optionText}>Option 4</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Image source={plus} style={styles.image} />
          <Text style={styles.text}>Add new </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'flex-start',
    marginHorizontal: 10,
  },
  optionMain: {
    padding: 10,
    borderRadius: 20,

  },
  rowContainer: {
    flexDirection: 'row',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#b0e0e6',
  },
  optionText: {
    fontSize: 18,
  },
  optionTextMain: {
    fontSize: 16,


  },
  selectedOptionMain:{
    backgroundColor: '#E5E5E5',
    color: '#b0e0e6'
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

export default ControlDeviceSceen;
