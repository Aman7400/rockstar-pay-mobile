import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Activity from '../screens/Activity';

const Tab = createBottomTabNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Tab.Screen
                    name="HomeStack"
                    options={{
                        title: "Home"
                    }} component={HomeStackScreen} />
                <Tab.Screen name="Scan" component={Scan} />
                <Tab.Screen name="Activity" component={Activity} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
}