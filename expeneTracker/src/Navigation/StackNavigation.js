import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import ExpenseForm from '../Screens/AddExpense';

const Stack = createStackNavigator();

const MainStackNavigator = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{ 
      headerStyle:{
        backgroundColor:'#9ACAF8',
      },
      headerTintColor:"white"
     }}
    >
    <Stack.Screen component={Login} name="Login" />
  </Stack.Navigator>
  );
}
export {MainStackNavigator};