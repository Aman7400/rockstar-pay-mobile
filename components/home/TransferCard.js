import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Card, Text } from '@rneui/themed';
import font from "../../src/constants/font"
import MIcon from "react-native-vector-icons/MaterialIcons"
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons"
import ADIcon from "react-native-vector-icons/AntDesign"
import colors from '../../src/constants/colors';
import { useNavigation } from "@react-navigation/native"



const TransferCard = () => {


    const transferItems = [
        {
            title: "Scan QR",
            action: "ScanStack",
            icon: <MIcon name="qr-code-scanner" size={36} color="white" />
        },
        {
            title: "Pay Contacts",
            action: "NotFound",
            icon: <ADIcon name="contacts" size={36} color="white" />
        },
        {
            title: "Bank Transfers",
            action: "NotFound",
            icon: <MCIcon name="bank-outline" color="white" size={36} />
        },
        {
            title: "UPI",
            action: "NotFound",
            icon: <MCIcon name="bank-transfer" color="white" size={36} />
        },

    ]


    return (
        < View style={{
            // padding: 12,
            borderRadius: 8,
            backgroundColor: "white",
            position: "absolute",
            width: "90%",
            alignSelf: "center",
            top: 172 ,

        }
        }>
            <Card
                containerStyle={{
                    borderRadius: 8,
                    margin: 0,
                    padding: 16
                }}>
                <Text style={{ fontFamily: font.bold }} h4>Money Transfer</Text>

                <View style={{ flexDirection: 'row', marginVertical: 16 }}>
                    {
                        transferItems.map((item, i) => <TransferItem key={i} item={item} />)
                    }
                </View>

            </Card>
        </View >
    )
}

function TransferItem({ item }) {
    const { icon, title, action } = item;

    const navigation = useNavigation();

    function handleAction() {
        navigation.navigate(action)
    }
    return (
        <TouchableOpacity onPress={handleAction} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ width: 52, backgroundColor: colors.secondary, padding: 8, borderRadius: 8, marginBottom: 4 }}>
                {icon}
            </View>
            <Text style={{ textAlign: 'center', fontFamily: font.regular }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


export default TransferCard