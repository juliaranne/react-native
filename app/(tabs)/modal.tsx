import React, { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ModalScreen() {
  const [date, setDate] = useState(new Date());
  return (
    <ThemedView style={styles.container}>
      <DateTimePicker mode="date" value={date} display="spinner" />
      <Link href="/" style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
