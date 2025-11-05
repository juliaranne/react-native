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
        name={otherProps.name}
        color="white"
        style={{
          ...styles.icon,
          backgroundColor: otherProps.color,
          outlineColor: otherProps.color,
        }}
        size={40}
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
    width: "25%",
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    borderRadius: 20,
    outlineWidth: 12,
    marginBottom: 18,
  },
  text: {
    fontSize: 14,
  },
});
