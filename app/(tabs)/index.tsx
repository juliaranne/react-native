import { ThemedText } from "@/components/themed-text";
import { StyleSheet, KeyboardAvoidingView, View, Platform } from "react-native";
import { ThemedInput } from "@/components/themed-input";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import { CategoryIcon } from "@/components/category-icon";
import { Categories } from "@/constants/theme";

const getTodaysDate = () => {
  const today = format(new Date(), "do MMM");
  console.log(today);
  return today;
};

export default function InputScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={styles.title} type="title">
        Budget Tracker
      </ThemedText>
      <View style={styles.categories}>
        {Object.entries(Categories).map(([key, value]) => {
          return (
            <CategoryIcon
              text={value.display_name}
              color={value.color}
              name={value.icon}
              key={key}
            ></CategoryIcon>
          );
        })}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.dateRow}>
          <ThemedText style={styles.date} type="default">
            {getTodaysDate()}
          </ThemedText>
          <Link href="./modal">
            <ThemedText type="default">Change date</ThemedText>
          </Link>
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
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 20,
  },
});
