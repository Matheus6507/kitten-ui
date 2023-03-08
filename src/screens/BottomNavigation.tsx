import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab, useTheme } from '@ui-kitten/components';
import { HouseSimple } from "phosphor-react-native";
import { Profile } from "./Profile";
import { StackNavigation } from "./StackNavigation";


export function BottomTabNavigation() {
    const { Navigator, Screen } = createBottomTabNavigator();
    const theme = useTheme();

    const BottomTabBar = ({ navigation, state }: any) => (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab icon={<HouseSimple />} />
            <BottomNavigationTab title={"Profile"} />
        </BottomNavigation>
    );

    return (
        <NavigationContainer>
            <Navigator tabBar={props => <BottomTabBar {...props} />}>
                <Screen name="Home" component={StackNavigation} options={{ headerShown: false }} />
                <Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    )
}