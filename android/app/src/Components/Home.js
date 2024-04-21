
import { ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeadBar from "./PageHeaderBar";
import Carbofats from "./Carbofats";
const Home =()=>{
  return (
 
 
   <>
    <PageHeadBar></PageHeadBar>
    <ScrollView style={{marginVertical:10}}>
     <Carbofats></Carbofats>
    </ScrollView>
   </>
      
     
  
  )
}

export default Home;