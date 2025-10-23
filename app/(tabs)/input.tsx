import { ThemedText } from "@/components/themed-text";
import { StyleSheet, KeyboardAvoidingView, View, Platform } from "react-native";
import { ThemedInput } from "@/components/themed-input";

import { SafeAreaView } from "react-native-safe-area-context";

export default function InputScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.inputRow}>
          <ThemedText type="default">£</ThemedText>
          <ThemedInput
            keyboardType="numeric"
            placeholder="I have spent"
            style={styles.input}
          ></ThemedInput>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 8,
    flexGrow: 1,
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 10,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
