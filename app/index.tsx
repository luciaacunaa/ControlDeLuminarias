import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Control de Luminarias
      </Text>

      <Pressable
        onPress={() => router.push("/scan")}
        style={{
          backgroundColor: "black",
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white" }}>Escanear QR</Text>
      </Pressable>
    </View>
  );
}
