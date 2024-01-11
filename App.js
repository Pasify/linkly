import { StyleSheet, SafeAreaView } from "react-native";
import SignUp from "./screens/Signup";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "whitesmoke",
    flex: 1,
    justifyContent: "center",
  },
});
function App() {
  return (
    <SafeAreaView style={styles.view}>
      <SignUp />
    </SafeAreaView>
  );
}
export default App;
