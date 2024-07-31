import TabBar from "@/components/navigation/TabBar";
import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 size={size} name="house" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          tabBarLabel: "New",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 size={size} name="plus" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 size={size} name="gear" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 size={size} name="user-large" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
