import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";

//const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (

        <Navigator
        /*screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        })}*/
        >
            <Screen
                name="Login"
                component={Signin}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator >

    )
}