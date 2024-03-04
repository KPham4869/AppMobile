import React, {useState} from 'react';
import {View,SafeAreaView, Switch, StyleSheet} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeAppScreen = () => {

  const [ isEnabled_f, setIsEnabled_f] = useState(false);
  const [isEnabled_s, setIsEnabled_s] = useState(false);
  const toggleSwitch_f = () => setIsEnabled_f(previousState => !previousState);
  const toggleSwitch_s = () => setIsEnabled_s(previousState => !previousState);
  
  return (
    <SafeAreaView>
      <View style={styles.second}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled_s ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch_s}
        value={isEnabled_s}
      />
    </View>
    <View style={styles.first}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled_f ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch_f}
        value={isEnabled_f}
      />
    </View>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  second: {
    flex: 2,
    padding: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  first: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeAppScreen;