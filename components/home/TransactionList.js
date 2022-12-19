
import { Icon, Text } from "@rneui/themed";
import { FlatList, View } from "react-native";
import colors from "../../constants/colors";
import font from "../../constants/font";
import { useNavigation } from "@react-navigation/native"

export default function TransactionsList() {
    const navigation = useNavigation()

    function seeAllTransactions() {
        navigation.navigate("Activity")
    }


    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text h5 style={{ fontFamily: font.bold }}>Recent Transactions</Text>
                <Icon onPress={seeAllTransactions} name="list" color={colors.secondary} />
            </View>
            <FlatList
                data={[1, 2]}
                renderItem={({ item }) => <TransactionListItem transaction={item} />}
            />
        </View>
    )
}


function TransactionListItem({ transaction }) {
    return (
        <View style={{
            backgroundColor: 'white',
            marginVertical: 6,
            padding: 12,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            {/* Category */}
            {/* Details */}
            <View >
                <Text h5 style={{ fontFamily: font.bold }}>Dribble Action</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontFamily: font.regular }}>$36</Text>
                    <Text style={{ fontFamily: font.regular }}>23 March 2014</Text>
                </View>
            </View>
            {/* Go to */}
            <Icon name="rightcircle" color={colors.secondary} type="antdesign" />
        </View>
    )
}