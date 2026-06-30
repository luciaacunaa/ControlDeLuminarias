import { CameraView } from "expo-camera";
import { router } from "expo-router";
import { useRef } from "react";

export default function Scan() {
  const locked = useRef(false);

  return (
    <CameraView
      style={{ flex: 1 }}
      onBarcodeScanned={({ data }) => {
        if (locked.current) return;

        locked.current = true; // 🔒 bloquea instantáneo

        console.log("QR:", data);

        try {
          const parsed = JSON.parse(data);

          router.push({
            pathname: "/config",
            params: {
              ssid: parsed.ssid,
              password: parsed.password,
            },
          });
        } catch (e) {
          alert("QR inválido");
          locked.current = false; // desbloquea si falla
        }
      }}
    />
  );
}
