import {
  TextInput,
  type TextInputProps,
  StyleProp,
  TextStyle,
} from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type InputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<TextStyle>;
  keyboardType?: "default" | "numeric";
  placeholder?: string;
};

export function ThemedInput({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: InputProps) {
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );
  const color = useThemeColor({ light: darkColor, dark: lightColor }, "text");

  return (
    <TextInput
      style={[
        { color, borderColor, borderWidth: 1, borderRadius: 6, padding: 8 },
        style,
      ]}
      {...otherProps}
    />
  );
}
