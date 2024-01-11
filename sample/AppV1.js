import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  TouchableNativeFeedback,
  Text,
  View,
} from "react-native";

import SignUp from "../screens/Signup";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 200,
        }}
        blurRadius={2}
        fadeDuration={1000}
      />
      <TouchableNativeFeedback onPress={() => console.log(`image tapped`)}>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: "orangered",
          }}
        ></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
