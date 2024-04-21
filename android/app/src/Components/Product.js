

import { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image, width, height, Dimensions, Pressable } from "react-native";

import { add } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
const mainwidth = Dimensions.get("window").width;
const mainheight = Dimensions.get("window").height;
const Product = ({ item }) => {


    const [remove, setremove] = useState(false);
    const [active, setactive] = useState(false);
    const [count,setcount]=useState(0);

    const Increment=()=>
    {
        setcount(count+1);
    }
    const Decrement=()=>
    {
        if(count>0)
        {
        setcount(count-1);
        }
    }

    const dispatch = useDispatch();

    const handleAddProduct = (item) => {
        dispatch(add(item))
        console.log("d")
        setactive(true);
    }



    return (
        <>

            <View style={styles.container}>

                <Text>{item.name}</Text>
                <Image source={item.imageurl} style={styles.img}></Image>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={{ width: 30, height: 25, borderWidth: 2, margin: 2, alignItems: 'center', backgroundColor: 'red', color: 'white', borderRadius: 10 }} onPress={Increment} ><Text >+</Text></Pressable>
                    <Text style={{ margin: 3 }}>{count}</Text>
                    <Pressable style={{ width: 30, height: 25, borderWidth: 2, margin: 2, alignItems: 'center', backgroundColor: 'yellow', color: 'white', borderRadius: 10}} onPress={Decrement}><Text>-</Text></Pressable>
                </View>
                <Text style={{ margin: 3 }}>{item.price}</Text>
                <Pressable style={styles.Pressable} onPress={() => handleAddProduct(item)}  ><Text style={{ padding: 4, color: 'black', backgroundColor: active ? "red" : "white" }}>{remove ? 'Remove' : "Addto cart"}</Text></Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {

        // width:254,
        //height:320,
        borderWidth: 2,
        flexDirection: 'column',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: mainwidth / 2.3,
        height: mainheight / 3,
        elevation: 30,
        borderRadius: 20,

    },
    img: {
        width: 140,
        height: 130,
        resizeMode: 'contain',
        alignSelf: 'center',


    },
    Pressable: {
        width: 90,
        height: 30,
        borderWidth: 2,
        borderRadius: 10,
    }


})

export default Product
