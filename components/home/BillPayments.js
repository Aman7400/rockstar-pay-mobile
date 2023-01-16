import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Card, Icon, Text } from '@rneui/themed';
import font from "../../src/constants/font"
import colors, { palette } from '../../src/constants/colors';
import {useNavigation} from "@react-navigation/native";

const BillPayments = () => {

    const navigation = useNavigation();

    function handleOnPress(item) {
        navigation.navigate("BillPayment");
    }

    return (
        <View style={{ padding: 12, backgroundColor: "white", borderRadius: 8, marginBottom:12 }}>
            <Text style={{ fontFamily: font.bold, marginBottom: 8 }} h4>Bills & Payments</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingVertical:8}}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8,].map((item, i) =>
                        <TouchableOpacity onPress={handleOnPress} key={i} style={{backgroundColor: palette.blue, padding:12,marginRight:8,  borderRadius:50}}>
                            <Icon name="mobile"  type='entypo' size={32} color={palette.white} />
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        </View>
    )
}


export default BillPayments