import { View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import { Avatar, Button, Divider, Text } from '@rneui/themed'
import font from '../../constants/font'

const BalanceCard = () => {
    return (
        <View style={{
            padding: 12,
            marginVertical: 8,
            marginTop:16,
            borderRadius: 8,
            backgroundColor: "white",
        }}>
            <Text h4 style={{ fontFamily: font.bold, marginBottom: 8 }}>Accounts</Text>
            <View style={{  borderRadius: 4 }}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
                    <Avatar source={{ uri: "https://imgs.search.brave.com/13OIKH5p-jxTjuWgfcbx_PC2VnWxOQvM51zt3hZx53w/rs:fit:745:428:1/g:ce/aHR0cHM6Ly93d3cu/ZGlhbGFiYW5rLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9IREZDLUJh/bmstTXVkcmEtTG9h/bi5qcGc" }} />
                    <Text h6 style={{ fontFamily: font.regular, marginLeft: 4 }}>Wallet</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: font.bold,
                        marginLeft: "auto"
                    }}>$20</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
                    <Avatar source={{ uri: "https://imgs.search.brave.com/13OIKH5p-jxTjuWgfcbx_PC2VnWxOQvM51zt3hZx53w/rs:fit:745:428:1/g:ce/aHR0cHM6Ly93d3cu/ZGlhbGFiYW5rLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9IREZDLUJh/bmstTXVkcmEtTG9h/bi5qcGc" }} />
                    <Text h6 style={{ fontFamily: font.regular, marginLeft: 4 }}>HDFC BANK</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: font.bold,
                        marginLeft: "auto"
                    }}>Check Balance</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
                    <Avatar source={{ uri: "https://imgs.search.brave.com/13OIKH5p-jxTjuWgfcbx_PC2VnWxOQvM51zt3hZx53w/rs:fit:745:428:1/g:ce/aHR0cHM6Ly93d3cu/ZGlhbGFiYW5rLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9IREZDLUJh/bmstTXVkcmEtTG9h/bi5qcGc" }} />
                    <Text h6 style={{ fontFamily: font.regular, marginLeft: 4 }}>HDFC BANK</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: font.bold,
                        marginLeft: "auto"
                    }}>Check Balance</Text>
                </View>
            </View>
        </View>
    )
}

export default BalanceCard