import {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

const sendText= async (phoneNumber)=>{
  console.log("PhoneNumber: ",phoneNumber);
  await fetch('https://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    headers:{
      'content-type':'application/text'
    }
  });
  const tokenResponseText = await tokenResponse.text()
}

const getToken = async ({phoneNumber, oneTimePassword, setUserLoggedIn, setUserName}) =>{
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({phoneNumber, oneTimePassword}),
    headers: {
      'Content-Type':'application/json'
    }
  });

  const responseCode = tokenResponse.status;// means loggin in successfully
  console.log("Response Status Code", responseCode);
  if(responseCode==200){
    
  
    const tokenResponseString = await tokenResponse.text();
    console.log("Token",tokenResponseString)
    const emailResponse = await fetch('https://dev.stedi.me/validate/'+tokenResponseString)
    const tokenEmail = await emailResponse.text();
    console.log('tokenEmail: ' + tokenEmail);
    setUserName(tokenEmail);
    setUserLoggedIn(true);
  }
  // const tokenResponseString = await tokenResponse.txt();
}

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView style={styles.margin}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholderTextColor='#D3D3D3'
        placeholder={"918-327-4912"}
      />

        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          sendText(phoneNumber);
      }}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        placeholderTextColor='#D3D3D3'
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
      style={styles.button}
      onPress={()=>{
        getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn, setUserName: props.setUserName});
      }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  }
});





export default Login;