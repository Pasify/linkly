import { View, Text, TextInput } from "react-native";

function UserInput({ name, value, setValue, ...otherProps }) {
  const label = name.toUpperCase();
  //   console.log(restProps);
  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => setValue(name, text)}
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#2a4ca9",
          marginBottom: 10,
        }}
        {...otherProps}
      ></TextInput>
    </View>
  );
}
export default UserInput;
