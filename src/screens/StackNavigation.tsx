import { createStackNavigator } from '@react-navigation/stack';
import { Details } from './Details';
import { Home } from './Home';

export function StackNavigation() {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='Dashboard' component={Home} />
            <Screen name='Details' component={Details} />
        </Navigator>
    )
}