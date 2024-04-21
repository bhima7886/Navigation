import { View } from 'react-native'

const Flex=()=>
{
    return (
        <>
        <View style={{flex:1,backgroundColor:'red'}}>
            <View style={{flex:0.5,backgroundColor:'yellow'}}></View>
            <View style={{flex:0.5,backgroundColor:'violet'}}></View>
        </View>
        <View style={{flex:2,backgroundColor:'yellow'}}>
            <View style={{flex:1,backgroundColor:'green'}}></View>
            <View style={{flex:1,backgroundColor:'red'}}></View>
        </View>
        <View style={{flex:7,backgroundColor:'green'}}>
            <View style={{flex:3.5,backgroundColor:'blue'}}></View>
            <View style={{flex:3.5,backgroundColor:'red'}}>
                <View style={{flex:1.5,backgroundColor:'black'}}></View>
                <View style={{flex:1.5,backgroundColor:'red'}}>
                    <View style={{flex:0.7,backgroundColor:'green'}}></View>
                    <View style={{flex:0.7,backgroundColor:'yellow'}}>
                        <View style={{flex:0.3,backgroundColor:'red'}}></View>
                        <View style={{flex:0.4,backgroundColor:'violet'}}></View>

                    </View>
                </View>
            </View>
        </View>
      
        </>
    )
}
export  default Flex;