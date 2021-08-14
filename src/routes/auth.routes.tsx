import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { Signin } from "../screens/Signin";

//Navigator e Screen executam uma especie de ponteiro para o tipo navetion
//que precisa do Navigator + a Screen
//Referencia: https://reactnavigation.org/docs/drawer-based-navigation/

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
                name="Signin"
                component={Signin}
            />

            <Screen
                name="Home"
                component={Home}
            />
        </Navigator >
    )
}