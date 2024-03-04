import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Image, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import menu from '../../../../../assets/image/menu.png';
import thermometer from '../../../../../assets/image/thermometer.png';

const API_KEY = '89e540382ebe3310999da425312cf172'; // API key của bạn

const HomeAppScreen = ({ navigation }) => {
  const [isSwitch1Enabled, setSwitch1Enabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState(null);

  const toggleSwitch1 = () => setSwitch1Enabled(prevState => !prevState);

  useEffect(() => {
    // Lấy thời gian hiện tại
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(`${now.getHours()}:${now.getMinutes()}`);
    }, 1000);

    // Lấy nhiệt độ hiện tại từ API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ho%20Chi%20Minh%20City&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.main && data.main.temp) {
          setCurrentTemperature(data.main.temp);
        } else {
          console.error('Error fetching temperature: Data not available');
        }
      })
      .catch(error => console.error('Error fetching temperature:', error));

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image source={menu} style={styles.menu} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.speedText}>{currentTime}</Text>
          <View style={styles.thermometerContainer}>
            <Image source={thermometer} style={styles.thermometer} />
            <Text style={styles.speedText}>{currentTemperature}°C</Text>
          </View>
        </View>

        <View style={styles.switchContainer}>
          <View style={styles.switchRow}>
            <Text style={styles.emoji}>💡</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isSwitch1Enabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isSwitch1Enabled}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  menu: {
    width: 25,
    height: 25,
    top: 10,
    left: 10,
    padding: 10,
  },
  emoji: {
    fontSize: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  speedText: {
    fontSize: 20,
    marginBottom: 10,
  },
  thermometerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thermometer: {
    width: 30,
    height: 30,
  },
  switchContainer: {
    marginVertical: 10,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'rgba(175, 238, 238, 0.8)',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeAppScreen;
