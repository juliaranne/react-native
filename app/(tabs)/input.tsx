import { ThemedText } from "@/components/themed-text";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Platform,
  Button,
} from "react-native";
import { ThemedInput } from "@/components/themed-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";

const getTodaysDate = () => {
  const today = format(new Date(), "do MMM");
  console.log(today);
  return today;
};

export default function InputScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.dateRow}>
          <ThemedText style={styles.date} type="default">
            {getTodaysDate()}
          </ThemedText>
          <Button
            title="Change date"
            onPress={() => console.log("Simple Button pressed")}
          />
        </View>
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
    fontSize: 20,
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
  date: {
    fontSize: 40,
    lineHeight: 38,
  },
  dateRow: {
    alignItems: "center",
    marginBottom: 30,
  },
});
