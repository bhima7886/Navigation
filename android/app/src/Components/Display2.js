import {View,Text,StyleSheet,Image,Pressable} from 'react-native'
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice';
const Display2=({item})=>
{
    const dispatch=useDispatch();
const handleDelete=(id)=>
{
   console.log(id);
   dispatch(remove(id))
}


    return (
        <>
    
            <View style={styles.container} >
                 <Text>{item.name}</Text>
                 <Image source={item.imageurl} style={styles.image}></Image>
                 <Text>{item.price}</Text>
                 <Pressable style={styles.btn} onPress={()=>handleDelete(item.id)}><Text>Remove</Text></Pressable>
            </View>
    
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
export default Display2;