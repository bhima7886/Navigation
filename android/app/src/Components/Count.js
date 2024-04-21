import { View,Text } from "react-native";
import { useSelector } from "react-redux";
const Count=()=>
{

    const items=useSelector((state)=>state.cart);


    return (
        <>
            <View style={{flex:1,alignSelf:'center',justifyContent:'center',flexDirection:'row'}}>
                <Text style={{color:'red',fontSize:20}}>Count:{items.length}</Text>
            </View>
        </>
    )
}
export default Count;