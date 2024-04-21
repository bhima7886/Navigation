import { Pressable, TouchableOpacity, View,Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, reset } from "../Redux/CounterSlice";



const Counter=()=>{
    const count = useSelector(state=>state.counter.value);

const dispatch = useDispatch();
    return (
        <View>
              <Text>Counter{count}</Text>
              <TouchableOpacity>
                 <Text onPress={()=>dispatch(Increment())}>Increment</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                 <Text onPress={()=>dispatch(Decrement())}>Decrement</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                 <Text onPress={()=>dispatch(reset())}>Reset</Text>
              </TouchableOpacity>
        </View>
    )
}

export default Counter;