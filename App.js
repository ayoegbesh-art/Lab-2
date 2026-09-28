import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Logo from "./components/logo"
export default function App() {
  const [fullname, setFullname] = useState("Ayomide");
  return (
    <View>
    <Logo/>
      <Text>Hello, World {fullname}</Text>
      <TextInput
        placeholder="enter your name"
        onChangeText={(value) => setFullname(value)}
      ></TextInput>
    </View>
  );
}

