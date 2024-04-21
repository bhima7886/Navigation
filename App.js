import * as React from 'react';

import { Button, Pressable, Text, View } from 'react-native';
import AppNavigator from './android/app/src/Components/AppNavigator';
import { Provider } from 'react-redux';
import store from './android/app/src/Redux/Store';

const App = () => {
  return (
   <> 
   <Provider store={store} >
   <AppNavigator></AppNavigator>
   </Provider>
   </>
  )
  } 

  /*const Home=(props)=>
  {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:30}}>Home Screen</Text>
<Pressable ><Text onPress={()=>props.navigation.navigate('Flex')}>FlexPage</Text></Pressable>

      </View>
    )
  }
  const Login=(props)=>
  {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>LoginScreen</Text>
        <Text onPress={()=>props.navigation.navigate("Home")}>Go to Home Page</Text>
    
      </View>
    )
  }*/
export default App;
