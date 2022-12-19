import { View, } from 'react-native'
import React from 'react'
import { Button, Icon, Text } from '@rneui/themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Profile = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const handleBack = () => {
        navigation.pop()
    }
    return (
        <View style={{ padding: 16, paddingTop: insets.top }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon onPress={handleBack} name="close" size={32} />
                <Text h4>Profile</Text>
            </View>
        </View>
    )
}

export default Profile