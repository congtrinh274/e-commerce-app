import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import { Splash, Login, Register, Cart, ProductDetails, VerifyEmail } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
