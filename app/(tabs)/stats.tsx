import React, { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useDateStore } from "@/store/dateStore";

export default function StatsScreen() {
  return <ThemedView style={styles.container}></ThemedView>;
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
    fontSize: 20,
  },
});
