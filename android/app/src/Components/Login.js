import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Pressable
} from 'react-native';

const useFormValidation =(initialState,validate)=>{
   
    const [values,setValues] = useState(initialState);
    const [errors,seterrors] = useState({});

    const handleChange = (fieldName,value)=>{

        setValues({
            ...values,
            [fieldName]:value,
        });
    };

    const handleSubmit =(navigation)=>{
        
        validationErrors = validate(values);

        seterrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            
            console.log('form Submitted:',values);
            navigation.navigate('Home');
        }
    };
    return {values,errors,handleChange,handleSubmit,};
};
 

export default function Example({navigation}) {
   
 const initialState ={
    email:'',
    password:'',
 }

 const validate =(values) =>{
    const errors = {};
    if(!values.email){
        errors.email = 'Email is required';
    }
    if(!values.password){
        errors.password = "Password is required";
    }
    return errors;
 }

 const {values,errors,handleChange,handleSubmit} = useFormValidation(initialState,validate)


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.container}>
       
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{
                uri: 'https://assets.withfra.me/SignIn.2.png',
              }} />

                  <Text style={{flex:1,justifyContent:'flex-start',alignItems:'center',width:'100%',paddingHorizontal:'8%'}}>
                  <Text style={styles.title}>Login</Text>
                  </Text>

          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                // onChangeText={email => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#151328"
                style={styles.inputControl}
                value={values.email}
                onChangeText={(text)=>handleChange('email',text)}
                />
                {errors.email && <Text style={{color:'red'}}>{errors.email}</Text>}
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                placeholder="********"
                placeholderTextColor="#151328"
                style={[styles.inputpassword,styles.inputControl]}
                secureTextEntry={true}
                value={values.password}
                onChangeText={(text)=>handleChange('password',text)}
                 />
                {errors.password && <Text style={{color:'red'}}>{errors.password}</Text>}
            </View>

            {/* <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View> */}

            <Text style={styles.formLink}>Forgot password?</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent:'center'}}>
                    {/* <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    /> */}
                    <Text style={{ fontSize: 14 }}> Or login With </Text>
                    {/* <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    /> */}
                </View>
           {/* Social Sign Up */}
           <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems:'center',
                    marginVertical:16,
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                           // flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            paddingHorizontal:12,
                          
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 35,
                                width: 30,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                       
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                               // flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            paddingHorizontal:12,
                            // borderWidth: 1,
                           
                            // marginRight: 4,
                           
                           
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 35,
                                width: 30,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                       
                    </TouchableOpacity>
                </View>
   
      <Pressable>
          <Text onPress={()=>handleSubmit(navigation)}>Submit</Text>
      </Pressable>
        
      </View>
    </SafeAreaView>
    <TouchableOpacity
    onPress={() => {
      // handle link
    }}
    style={{ marginTop:30 }}>
    <Text style={styles.formFooter}>
      Don't have an account?{' '}
      <Text style={{  color:'#346E53' }}>Sign up</Text>
    </Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({

    inputpassword:{
     marginBottom:0,
    },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    flex:1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#575565',
    textAlign: 'right',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 28,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#686774',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});