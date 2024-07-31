import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SettingsPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/settings/1">Settings 1</Link>
      <Link href="/settings/2">Settings 2</Link>
      <Link href="/settings/3">Settings 3</Link>
    </View>
  );
};

export default SettingsPage;
