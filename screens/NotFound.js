import { View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button, Text } from '@rneui/themed';
import font from '../src/constants/font';

const NotFound = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    const handleGoBack = () => {
        navigation.navigate("Home");
    }
    return (
        <View style={{ paddingTop: insets.top, justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text h4 style={{ fontFamily: font.bold, marginBottom: 8 }}> Something went wrong ...</Text>
            <Button title="Go Back" onPress={handleGoBack} />
        </View>
    )
}

export default NotFound