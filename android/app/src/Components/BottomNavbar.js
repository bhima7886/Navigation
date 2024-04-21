import { StyleSheet, Text, View,Dimensions,Pressable, Image } from 'react-native'
import React from 'react'
const width=Dimensions.get("screen").width;



const BottomNavBar = ({navigation}) => { 

  function showHome(){
    navigation.navigate("Home");
  }
  function showCategories(){
    navigation.navigate("MainCategory");
  }
  function showSearchPage(){
    navigation.navigate("SearchPage");
  }
  function showProductList(){
    navigation.navigate("BottomSheetComponent");
  }
  function showMyCart(){
    navigation.navigate("MyCartPage");
  }
  return (
   
  <View style={styles.BottomNavBar}>
    <Pressable style={styles.iconsContainer} onPress={showHome}>
      <Image source={require('../assets/appleicon.png')} style={styles.icon}></Image>
        <Text>Home</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showCategories}>
    <Image source={require('../assets/facebook.png')} style={styles.icon}></Image>
        <Text>Insights</Text>
    </Pressable>
    <Pressable  onPress={showSearchPage}>
        <View style={styles.searchIcon}>
         <Image source={require('../assets/google.png')} style={styles.icon}></Image>
        <Text>Search</Text>
        </View>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showProductList}>
       <Image source={require('../assets/images.png')} style={styles.icon}></Image>
        <Text>Al</Text>
    </Pressable>
    <Pressable style={styles.iconsContainer} onPress={showMyCart}>
    <Image source={require('../assets/appleicon.png')} style={styles.icon}></Image>
        <Text>More</Text>
    </Pressable>
  </View>
 
  )
}

export default BottomNavBar

const styles = StyleSheet.create({

    BottomNavBar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        minHeight:(0.20*width),
        minWidth:"100%",
       // borderTopRightRadius:(0.5*0.15*width),
        //borderTopLeftRadius:(0.5*0.15*width),
        shadowRadius:(0.25*width),
        alignSelf:"center",
        position:"absolute",
        bottom:0,
        elevation:29,
        backgroundColor:"white",
        overflow:'hidden',
        
      },
      iconsContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      },
      icon:{
        width:20,
        height:20,
        margin:7,
      },
     
      

})



