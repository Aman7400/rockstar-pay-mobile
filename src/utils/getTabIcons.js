import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors"

const getTabIcon = ({ focused, color, size }, route) => {

    let iconName;

    if (route.name === 'HomeStack') {

        iconName = focused ? 'home' : 'home-outline'

    } else if (route.name === 'ScanStack') {

        iconName = focused ? 'scan' : 'ios-scan-outline'

    } else if (route.name === 'TransactionStack') {

        iconName = focused ? 'stats-chart' : 'stats-chart-outline'

    }

    return <Icon name={iconName} color={focused ? colors.secondary : color} size={focused ? 30 : size} />

}

export { getTabIcon }