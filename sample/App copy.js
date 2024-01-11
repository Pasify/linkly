// import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

import SignUp from "../screens/Signup";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default function App() {
  function Alerts() {
    Alert.alert("paskkal.io", "hello welcome to react native", [
      {
        text: "thank you",
        onPress: () => alert("ok"),
      },
    ]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
      <Button title="click me" onPress={Alerts} />
    </SafeAreaView>
  );
}
