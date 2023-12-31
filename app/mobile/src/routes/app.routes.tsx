import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
        </Navigator>
    );
};