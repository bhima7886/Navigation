import { StyleSheet, Text, View,Image,Pressable} from 'react-native'
import React from 'react'

const PageHeadBar = ({title,navigation}) => {

  function showSearchPage(){
    navigation.navigate("SearchPage")
  }
  function showMyCart(){
    navigation.navigate("MyCartPage")
  }
  function showMyProfile(){
    navigation.navigate("MyProfile")
  }
  function showNotificationPage(){
    navigation.navigate("MyProfile")
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
      <Pressable onPress={showMyProfile} style={{padding:5}}>
         <Image source={require('../images/profilePic.png')} style={{height:35,width:35}} ></Image>
        </Pressable>
        <View>
        <Text style={{fontSize:12,fontWeight:"bold",color:"#8C8E91"}}>Good Morning</Text> 
      <Text style={{fontSize:16,fontWeight:"bold",color:"black"}}>Jeremiah Weber</Text>
      </View>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable onPress={showSearchPage}>
          
        </Pressable>
        <Pressable onPress={showNotificationPage}>
           
        </Pressable>
        <Pressable onPress={showMyCart}>
            
        </Pressable>
        
        <Pressable onPress={showMyProfile}>
         <Image source={require('../images/profilePic.png')} ></Image>
        </Pressable>
      </View>

    </View>
    
  )
}

export default PageHeadBar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:"10%",
        paddingHorizontal:20,
        backgroundColor:"white",
        borderWidth:1,
        borderColor:'#F2F2F2',
       
    },
    iconsContainer:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        justifyContent:"center"
    },
    headerProfile:{
        flexDirection:'row',
        
    }
})

