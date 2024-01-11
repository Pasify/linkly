import { View, Text, TouchableOpacity } from "react-native";

function SubmitButton({ title, onPress, ...otherProps }) {
  let { loading: isLoading } = otherProps;

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#ff9900",
          height: 50,
          justifyContent: "center",
          marginBottom: 20,
          marginHorizontal: 15,
          borderRadius: 24,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          {isLoading ? "loading...." : title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default SubmitButton;
