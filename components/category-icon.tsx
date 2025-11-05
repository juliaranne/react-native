import { StyleProp, ViewStyle, Pressable, StyleSheet } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";
import { ThemedText } from "./themed-text";

// import { useThemeColor } from "@/hooks/use-theme-color";

export type PressableProps = {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle>;
  color: string;
  name: string;
  text: string;
};

export function CategoryIcon({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: PressableProps) {
  // const color = useThemeColor({ light: darkColor, dark: lightColor }, "text");

  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      <IconSymbol
        name="paperplane.fill"
        color={otherProps.color}
        style={styles.icon}
        size={30}
      ></IconSymbol>
      <ThemedText style={styles.text}>{otherProps.text}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    borderRadius: 20,
    backgroundColor: "red",
    outline: "red",
    outlineWidth: 18,
    outlineColor: "red",
    marginBottom: 25,
  },
  text: {
    fontSize: 16,
  },
});
