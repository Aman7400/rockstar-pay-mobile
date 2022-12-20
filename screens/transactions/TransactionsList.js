import { FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Card, Icon, Text, BottomSheet, Button } from '@rneui/themed';
import font from "../../constants/font"
import colors, { palette } from '../../constants/colors';

const TransactionsList = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    function goToTransactionDetails(id) {
        navigation.navigate("TransactionDetails", { id })
    }
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={{ paddingTop: insets.top, backgroundColor:palette.white }}>
            <View style={{ padding: 12, flexDirection: "row" }}>
                <Icon onPress={() => navigation.goBack()} name="arrowleft" type="antdesign" />
                <Text h4 style={{ fontFamily: font.bold, marginLeft: 12 }}>All Transactions</Text>
                <Icon onPress={() => setIsVisible(true)} containerStyle={{ marginLeft: "auto" }} name="filter" type="antdesign" />
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                renderItem={({ item }) => <TransactionsListItem onPress={() => goToTransactionDetails(item)} item={item} />}
            />

            <BottomSheet
                modalProps={{
                }} isVisible={isVisible}>
                <View style={{
                    backgroundColor: palette.white,
                    padding: 16,
                    paddingBottom: insets.bottom,
                }}>
                    <View style={{ flexDirection: "row", alignItems:"center" }}>
                        <Icon onPress={() => setIsVisible(false)} name="clear" />
                        <Text h4 style={{ fontFamily: font.bold, marginLeft: 12 }}>Filter</Text>
                        <Button titleStyle={{fontFamily:font.regular}} containerStyle={{ marginLeft: "auto" }} type="clear" title="Clear" />
                    </View>
                    <Button disabled titleStyle={{fontFamily:font.bold}}  title={"Apply"} />
                </View>
            </BottomSheet>

        </View>
    )
}

export default TransactionsList


const TransactionsListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card
                containerStyle={{
                    borderRadius: 8,
                    padding: 0
                }}>
                <View style={{
                    flexDirection: "row",
                    padding: 16,
                    borderRadius: 8,
                    alignItems: "center"
                }}>
                    <Icon name="arrow-down-left" size={36} type="feather" />
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontFamily: font.regular }} >
                            Paid to
                        </Text>
                        <Text h4 style={{ fontFamily: font.bold }}>
                            {item}
                        </Text>

                    </View>
                </View>

            </Card>
        </TouchableOpacity>

    )
}