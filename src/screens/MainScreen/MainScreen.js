import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image,View, StyleSheet, TouchableOpacity } from 'react-native';

import MicroScreen from './App/MicroScreen';
import NotificationScreen from './App/NotificationScreen';
import SmartScreen from './App/SmartScreen';
import HomeScreen from './App/HomeScreen';
import AddScreen from './App/AddScreen';

import micro from '../../../assets/image/micro.png'
import home from '../../../assets/image/home.png'
import add from '../../../assets/image/users.png'
import notification from '../../../assets/image/alarm.png'
import smart from '../../../assets/image/app.png'



const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {
          height: 10,
        }
      }}
      onPress={onPress}
    >
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#3CC1C1'
      }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};


const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarStyle:{
        position: 'absolute',
        bottom: 20,
        // flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20, 
        backgroundColor: '#fff', 
        height: 60,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset:{
        width: 5,
        height: 5,
      }
      }
      }}
      >
    <Tab.Screen 
      name="Dashboard"
      component={HomeScreen} 
      options={({route}) => ({
        tabBarLabel: route.name === 'Dashboard' ? ' ' : 'Dashboard',
      tabBarIcon: ({focused}) => (
    <View style={styles.root}>
    <Image 
      source={home}
      resizeMode='contain'
      style={{
        width: 25,
        height: 25,
        tintColor: focused ? '#E32F45' : '#748C94'
      }}
      />
    <Text 
      style={{
        fontStyle: 'normal',
        marginTop: 5,
        fontSize: 12,
        color: focused ? '#E32F45' : '#748C94',

      }}>HOME
    </Text>
    </View>
      )
      })}
    />

<Tab.Screen 
  name="Add by me"
  component={AddScreen} 
  options={({route}) => ({
    tabBarLabel: route.name === 'Add by me' ? ' ' : 'Add by me',
    tabBarIcon: ({focused}) => (
      <View style={styles.root}>
        <Image 
          source={add}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#E32F45' : '#748C94'
          }}
        />
        <Text style={{
          fontStyle: 'normal',
          marginTop: 5,
          fontSize: 12,
          color: focused ? '#E32F45' : '#748C94',
         
        }}>ADD</Text>
      </View>
    )
  })}
/>
        <Tab.Screen 
  name=" "
  component={MicroScreen} 
  options={{
    tabBarIcon: ({focused}) => (
      <Image 
        source={micro} 
        style={{
          width: 40,
          height: 40,
          tintColor: focused ? '#E32F45' : '#fff',
          marginTop: 10,
        }}
      />
    ),
    tabBarButton: (props) => (
      <CustomTabBarButton {...props} />
    )
  }}
/>
<Tab.Screen 
  name="Smart"
  component={SmartScreen} 
  options={({route}) => ({
    tabBarLabel: route.name === 'Smart' ? ' ' : 'Smart',
    tabBarIcon: ({focused}) => (
      <View style={styles.root}>
        <Image 
          source={smart}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#E32F45' : '#748C94'
          }}
        />
        <Text style={{
          fontStyle: 'normal',
          marginTop: 5,
          fontSize: 12,
          color: focused ? '#E32F45' : '#748C94',
         
        }}>SMART</Text>
      </View>
    )
  })}
/>
<Tab.Screen 
  name="Notification"
  component={NotificationScreen} 
  options={({route}) => ({
    tabBarLabel: route.name === 'Notification' ? ' ' : 'Notification',
    tabBarIcon: ({focused}) => (
      <View style={styles.root}>
        <Image 
          source={notification}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#E32F45' : '#748C94'
          }}
        />
        <Text style={{
          fontStyle: 'normal',
          marginTop: 5,
          fontSize: 12,
          color: focused ? '#E32F45' : '#748C94',
         
        }}>NOTIFICATION</Text>
      </View>
    )
  })}
/> 
    </Tab.Navigator>
   
  );
};
const styles = StyleSheet.create({
  root:{
    
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    marginHorizontal: -10,
  },
  icon:{
    width: 25,
    height: 25,
  
   
  },
  setting:{
    width: 50,
    height: 50,
    borderRadius: 30,
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  -30,
     
  }
})

export default MainScreen;
