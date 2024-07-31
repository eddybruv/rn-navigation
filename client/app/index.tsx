import { Text } from "react-native-paper";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Redirect } from "expo-router";

export default function Index() {
  const theme = useTheme();
  return <Redirect href={"/home"} />;
}
