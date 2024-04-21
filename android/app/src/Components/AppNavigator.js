import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login";

import Count from "./Count";

import Product from "./Product";
import Display from "./Display";
import Display2 from "./Display2";
import Flex from "./Flex";
import BottomNavBar from "./BottomNavbar";
import PageHeadBar from "./PageHeaderBar";
import Carbofats from "./Carbofats";
import Home from './Home'

const AppNavigator=()=>
{
    const Stack=createNativeStackNavigator();
    return (
        <>
           <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="Carbofats" component={Carbofats} options={{headerShown:false}}/>
                <Stack.Screen name="PageHeaderBar" component={PageHeadBar} options={{headerShown:false}}/>
                <Stack.Screen name="BottomNavbar" component={BottomNavBar} />
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

                <Stack.Screen name="Count" component={Count}/>
                <Stack.Screen name="Product" component={Product}/>
                <Stack.Screen name="Display" component={Display}/>
                <Stack.Screen name="Display2" component={Display2}/>
                <Stack.Screen name="Flex" component={Flex}/>
            </Stack.Navigator>
           </NavigationContainer>
        </>
    )
}
export default AppNavigator;