import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Icon } from '@rneui/themed';

const Scan = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const handleClose = () => {
    navigation.goBack();
  }
  return (
    <View style={{
      padding: 16,
      paddingTop: insets.top
    }}>
      <Icon onPress={handleClose} name="close" size={32} />
      <Text>Scan</Text>
    </View>
  )
}

export default Scan