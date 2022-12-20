import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Scan from '../screens/Scan';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import { getTabIcon } from '../utils/getTabIcons';
import NotFound from '../screens/NotFound';
import Pay from '../screens/Pay';
import BillPayment from '../screens/BillPayment';
import TransactionsList from '../screens/transactions/TransactionsList';
import TransactionDetails from '../screens/transactions/TransactionDetails';

const Tab = createBottomTabNavigator();


export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: (props) => getTabIcon(props, route),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        paddingVertical: 16,
                    }
                })}
            >
                <Tab.Screen
                    name="HomeStack"
                    options={{
                        title: "Home"
                    }} component={HomeStackScreen} />
                <Tab.Screen options={{
                    tabBarStyle: {
                        display: "none",
                    }
                }} name="ScanStack" component={ScanStackScreen} />
                <Tab.Screen name="TransactionStack" component={TransactionStackScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}


const Stack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen options={{
                presentation: "fullScreenModal",
                animation: "slide_from_bottom"
            }} name="Profile" component={Profile} />
            <Stack.Screen options={{
                tabBarStyle: {
                    display: "none",
                }
            }} name="Pay" component={Pay} />
            <Stack.Screen name="BillPayment" component={BillPayment} />
            <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
    );
}

function ScanStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Scan" component={Scan} />
        </Stack.Navigator>
    );
}


function TransactionStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Transactions" component={TransactionsList} />
            <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
        </Stack.Navigator>
    );
}