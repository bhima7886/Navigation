import { View,Text, StyleSheet ,Image,Pressable} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Display2 from "./Display2";
import { ScrollView } from "react-native";
const Display=()=>
{
      const data=useSelector((state)=>state.cart)
     
    return (
        <>
        <ScrollView >
     <View  style={{rowGap:20}}>
      {data.map((item,index)=>
      {
        return (
            <Display2 item={item}key={index}></Display2>
        )
      })}
      </View>
      </ScrollView>
      
     
       
     
        </>
    )
}

const styles=StyleSheet.create({
    container:{
        alignSelf:'center',
         width:300,
         borderRadius:20,
         height:220,
         borderWidth:2,
         alignItems:'center',
         backgroundColor:'white'
        

    },
    image:{
      resizeMode:"contain",
      width:230,
      height:130,

    },
    btn:{
        width:90,
        height:30,
        borderRadius:10,
        borderWidth:2,
        paddingLeft:14
       

    }
})
export default Display;