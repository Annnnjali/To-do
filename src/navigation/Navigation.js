import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screen/Home';
import Completed from '../screen/Completed';
import Todo from '../screen/Todo';
import Task from '../screen/Task';
import Images from '../components/atoms/Images';
import EStyleSheet from 'react-native-extended-stylesheet';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTransparent: true,
      headerTitle: '',
      headerLeftContainerStyle: {
        paddingLeft: 20,
      },
    }}>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen name="Task" component={Task} 
      options={{
        tabBarLabel: 'Task',
      }} />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: EStyleSheet.value('$PRIMARY'),
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerLeft: () => <Images />,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Icon name="home" color={'black'} size={30} />
            ),
          }}
        />
        <Tab.Screen name="Todo" component={Todo} options={{
            tabBarLabel: 'Todo',
            tabBarIcon: () => (
              <Icon name="signal" color={'black'} size={30} />
            ),
          }}/>
        <Tab.Screen name="Completed" component={Completed} options={{
            tabBarLabel: 'Completed',
            tabBarIcon: () => (
              <Ionicons name="checkmark-done-circle-sharp" color={'black'} size={30} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
