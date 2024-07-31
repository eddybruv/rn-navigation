import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>home</Text>
      <Link href={"/home/settings"}>Home Settings</Link>
    </View>
  );
};
export default HomePage;
