import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

const Pay = ({navigation,route}) => {
    const {paymentDetails} = route.params
    const {amount,name} = JSON.parse(paymentDetails);
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Paying {name}</Text>
      <Button title={`$${amount}`} />
      {/* Bank Drop DOWN */}
    </View>
  )
}

export default Pay