import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet } from "react-native";

export default function VideocallButton({
  url, children
}) {
        const handlePress = useCallback(async () => {
          const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            await Linking.openURL(url);
          } else {
            Alert.alert(`URL invalido: ${url}`);
          }
        }, [url]);
      
        return <Button title={children} onPress={handlePress} />;
};
