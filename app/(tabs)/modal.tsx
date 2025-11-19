import React, { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function ModalScreen() {
  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    console.log(event.type, date);
  };

  return (
    <ThemedView style={styles.container}>
      <DateTimePicker
        mode="date"
        value={new Date()}
        display="spinner"
        onChange={(event, date) => handleDateChange(event, date)}
      />
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
    justifyContent: "flex-end",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
