import { Text, View } from "react-native";

export default function Waiting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Esperando conexión...</Text>
    </View>
  );
}
