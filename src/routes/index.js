import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Favorites } from "../pages/favorites";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={30} />;
            }

            return <Ionicons name="home-outline" color={color} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Ionicons name="heart" size={36} color="#ff4141" />;
            }
            return <Ionicons name="heart-outline" color={color} size={36} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
