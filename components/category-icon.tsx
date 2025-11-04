import {
  type TextInputProps,
  StyleProp,
  TextStyle,
  Pressable,
} from "react-native";

// import { useThemeColor } from "@/hooks/use-theme-color";

export type PressableProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<TextStyle>;
  icon: string;
  color: string;
};

export function CategoryIcon({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: PressableProps) {
  // const color = useThemeColor({ light: darkColor, dark: lightColor }, "text");

  return <Pressable>press</Pressable>;
}
