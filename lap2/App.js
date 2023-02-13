import  React from 'react';
import {  Provider } from 'react-redux';
import {  createStore } from 'redux';
import Reducer from './Store/Reducer'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AddFav from './Components/AddFav';
import Movies from './Components/Movies';
import Details from'./Components/Details';
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Components/Login'

function App() {
  const Stack = createNativeStackNavigator();
  const store = createStore(Reducer ,applyMiddleware(thunk))
  return (
  <Provider store={store}>
      <NavigationContainer  >
      
            {/* <Tab.Navigator > 
          <Tab.Screen   name="Login" component={Login}  
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" color="orange" size={40} />
            ),
          }}
          
          />
          
          
          <Tab.Screen name="Films" component={Movies}  
          options={{
            tabBarLabel: 'Films',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="film" color="orange" size={40} />
            ),
            
          }}
          
          
          />
          <Tab.Screen name="Fav" component={AddFav}  
          options={{
            tabBarLabel: 'Fav',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="star" color="orange" size={40} />
            ),
            
          }}
          
          
          />
           <Tab.Screen   name="Details" component={Details}  
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="film" color="orange" size={40} />
            ),
            
          }}
          
          
          />
            
        </Tab.Navigator>  */}
  
  <Stack.Navigator >
  <Stack.Screen name="Login" component={Login}  />
                    <Stack.Screen name="Films" component={Movies}  />
                    <Stack.Screen name="Details" component={Details}  />
                   <Stack.Screen name="Fav" component={AddFav} />
        </Stack.Navigator >
      </NavigationContainer>
      </Provider>
  );
}



export default App;
