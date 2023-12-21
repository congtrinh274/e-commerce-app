import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import { Splash, Login, Register, Cart, ProductDetails, VerifyEmail, StoreRegister, HomeStore } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} />
                <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
                <Stack.Screen name="StoreRegister" component={StoreRegister} />
                <Stack.Screen name="HomeStore" component={HomeStore} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
