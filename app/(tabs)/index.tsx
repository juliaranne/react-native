import { useReducer } from "react";
import { ThemedText } from "@/components/themed-text";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Platform,
  Pressable,
} from "react-native";
import { ThemedInput } from "@/components/themed-input";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { format } from "date-fns";
import { CategoryIcon } from "@/components/category-icon";
import { Categories } from "@/constants/theme";

enum ReducerActionKind {
  CATEGORY = "CATEGORY",
}
interface ReducerAction {
  type: ReducerActionKind;
  category: string;
}
interface ReducerState {
  category: string;
}

const initialState = {
  date: new Date(),
  price: 0,
  category: "",
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  console.log(state, action);
  switch (action.type) {
    case ReducerActionKind.CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }
  }
};

const getTodaysDate = () => {
  const today = format(new Date(), "do MMM");
  console.log(today);
  return today;
};

const handlePress = () => {
  console.log("press");
};

export default function InputScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
              handleChange={() =>
                dispatch({ type: ReducerActionKind.CATEGORY, category: key })
              }
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
          <Pressable onPress={handlePress} style={styles.submitBtn}>
            <ThemedText type="default">Track New Payment</ThemedText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 8,
    marginBottom: 30,
    flexGrow: 1,
    padding: 10,
    fontSize: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "center",
    borderRadius: 6,
    padding: 15,
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
