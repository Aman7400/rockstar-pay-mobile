import { Avatar, Text } from '@rneui/themed'
import React from 'react'
import { Pressable, View } from 'react-native'
import font from '../../src/constants/font'
import getGreetings from '../../utils/getGreetings'

const Toolbar = ({ handlePressAvatar }) => {

    let greetings = getGreetings()

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
            <View>
                <Text style={{ fontFamily: font.regular, marginBottom:0 }} h5>
                Hey Aman,
                </Text>
                <Text h4 style={{ fontFamily: font.bold }}>
                    {greetings}
                </Text>
            </View>
            <Avatar
                onPress={handlePressAvatar}
                size={40}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
        </View>
    )
}

export default Toolbar