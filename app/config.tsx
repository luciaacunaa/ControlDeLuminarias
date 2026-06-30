import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

export default function Config() {
  const { ssid, password } = useLocalSearchParams();
  const sent = useRef(false);
  const [status, setStatus] = useState("Enviando configuración...");

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    const send = async () => {
      try {
        await axios.post("http://192.168.4.1/config", {
          ssid,
          password,
        });

        setStatus("Configurado ✔");
      } catch (e) {
        setStatus("Error de conexión ❌");
      }
    };

    send();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{status}</Text>
      <Text>{String(ssid)}</Text>
    </View>
  );
}
