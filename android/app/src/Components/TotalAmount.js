import { View,Text } from "react-native";
import { useSelector } from "react-redux";
const TotalAmount=()=>
{
    const amount=useSelector((state)=>state.cart);
    console.log("Amount",amount)

    const item=amount.map((ele)=>
    {
        return ele.price;
    })
    console.log("item",item)

function TotalAmount()
{
  const sum=item.reduce((ele,total)=>total+ele);
  return sum;
}
let MainAmount=(TotalAmount());



    return (
        <>
            <View>
                <Text  style={{color:'red',fontSize:20,marginRight:20}}>Amount:{MainAmount}</Text>
                
            </View>
        </>
    )
}
export default TotalAmount;