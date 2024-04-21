import { useEffect } from "react";
import { View, Text } from "react-native";
const Main = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 1000)
    }, [])
    return (
        <>
            <View>
                <Text>Main Component</Text>
            </View>
        </>
    )
}
export default Main;