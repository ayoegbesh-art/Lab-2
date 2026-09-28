import { View, Text, TextInput, Button} from "react-native";
import React, { useState } from "react";
import Logo from "./components/logo"
export default function App() {
  const [fullname, setFullname] = useState("Ayomide");
  const [fname, setFname] = useState("egbesakin");
    const [lname, setLname] = useState("");
      const [dob, setDob] = useState("");
      function buttonClicked() {
    
    alert(`First Name:  ${fname}
          Last Name: ${lname}
          Date of Birth: ${dob}`);
      }

  return (

  




    <View>
    <Logo/>  
      <Text>Hello, World {fullname}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}/>
        <TextInput placeholder="Enter your firstname" onChangeText={setFname}/>
        <TextInput placeholder="Enter your lastname" onChangeText={setLname}/>
        <TextInput placeholder="Enter your date of birth" onChangeText={setDob}/>

<Button title="SUBMIT" onPress={buttonClicked}/>

        <Text>Hello {fname} {lname}. You were born on {dob}</Text>
      
      
    </View>
     

  );
}





