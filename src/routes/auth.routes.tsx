import React from "react";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";

import { theme } from "../global/styles/theme";

//const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (

        <Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        >

            <Screen
                name="Home"
                component={Home}
            />

            <Screen
                name="Signin"
                component={Signin}
            />




        </Navigator >

    )
}