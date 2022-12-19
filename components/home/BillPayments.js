import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card, Icon, Text } from '@rneui/themed';
import font from "../../constants/font"
import colors from '../../constants/colors';

const BillPayments = () => {


    return (
        <View style={{ marginVertical: 8, padding: 12, backgroundColor: "white", borderRadius: 8 }}>
            <Text style={{ fontFamily: font.bold, marginBottom:4 }} h4>Bills & Payments</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Icon name="mobile" type='entypo' size={36} color={colors.primary} />
                <Icon name="mobile" type='entypo' size={36} />
                <Icon name="mobile" type='entypo' size={36} />
                <Icon name="mobile" type='entypo' size={36} />
                <Icon name="mobile" type='entypo' size={36} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Icon name="close" reverse />
                <Icon name="close" reverse />
                <Icon name="close" reverse />
                <Icon name="close" reverse />
            </View>
        </View>
    )
}


export default BillPayments