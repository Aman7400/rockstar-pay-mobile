import { FlatList, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Card, Icon, Text } from '@rneui/themed';
import font from "../constants/font"

const Activity = ({navigation}) => {
  const insets = useSafeAreaInsets();
  function goToTransactionDetails(id) {
    navigation.navigate("TransactionDetails",{id})
  }
  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={{ padding: 12, flexDirection:"row" }}>
        <Icon name="arrowleft" type="antdesign" />
        <Text h4 style={{ fontFamily: font.bold, marginLeft:12 }}>All Transactions</Text>

      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={({ item }) => <ActivityListItem onPress={() => goToTransactionDetails(item)} item={item} />}
      />

    </View>
  )
}

export default Activity


const ActivityListItem = ({ item }) => {
  return (
    <Card
      containerStyle={{
        // margin: 0,
        borderRadius: 8,
        padding: 24
      }}>
      <Text>
        {item}
      </Text>
    </Card>
  )
}