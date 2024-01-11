import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import UserInput from "../components/auth/UserInput";
import { useState } from "react";
import SubmitButton from "../components/auth/SubmitButton";

function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    isLoading: false,
  });

  const updateIsLoading = (bool) =>
    setInput({
      ...input,
      isLoading: bool,
    });
  const handleInputChange = function (inputName, text) {
    setInput((prevInput) => ({
      ...prevInput,
      [inputName]: text,
    }));
  };
  const { name, email, password, isLoading } = input;

  async function handleSubmit() {
    updateIsLoading(true);
    if (!name || !email || !password) {
      Alert.alert("Linkly", "All fields are required", [{ text: "okay" }]);
      return;
    }
    try {
      const response = fetch("https://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "content-type": " application/json ",
        },
        body: JSON.stringify({ name, email, password }),
      });
      alert("sign in succesful=>");
      updateIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      updateIsLoading(false);
    }
  }
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Sign Up</Text>
      <UserInput
        name="name"
        value={input.name}
        setValue={handleInputChange}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <UserInput
        name="email"
        value={input.email}
        setValue={handleInputChange}
        autoComplete="email"
        keyboardType="email-address"
      />
      <UserInput
        name="password"
        value={input.password}
        setValue={handleInputChange}
        secureTextEntry={true}
        autoComplete="current-password"
      />
      <SubmitButton
        title="Sign Up"
        onPress={handleSubmit}
        loading={isLoading}
      />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
}
export default SignUp;
