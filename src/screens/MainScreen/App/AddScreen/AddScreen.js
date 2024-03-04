import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, PanResponder } from 'react-native';

const App = () => {
  const [value, setValue] = useState(0);
  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const newValue = Math.round(gestureState.dx / 3);
      setValue(newValue);
    },
  })).current;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Giá trị: {value}</Text>
      <View style={styles.bar} {...panResponder.panHandlers}>
        {Array.from({ length: 101 }).map((_, i) => (
          <View key={i} style={[styles.segment, { backgroundColor: i === value ? '#000' : '#ccc' }]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  bar: {
    width: 300,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  segment: {
    width: 3,
    height: 20,
  },
});

export default App;
