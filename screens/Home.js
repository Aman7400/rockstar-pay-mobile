import { View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toolbar from '../components/home/Toolbar';
import TransferCard from '../components/home/TransferCard';
import BillPayments from '../components/home/BillPayments';
import TransactionsList from '../components/home/TransactionList';
import BalanceCard from '../components/home/BalanceCard';
import { palette } from '../src/constants/colors';

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  function handlePressAvatar() {
    navigation.navigate("Profile")
  }
  return (
    <View style={{ paddingTop: insets.top, flex: 1, backgroundColor: palette.white }}>
      <View style={{ backgroundColor: palette.blue, padding: 16, height: "30%", position: "relative" }}>

      </View>
      {/* <Toolbar handlePressAvatar={handlePressAvatar} /> */}
      {/* Balance and Accounts */}
      {/* <BalanceCard /> */}
      {/* Money Transfer */}
      <TransferCard />
      {/* Transactions */}
      <View style={{ padding: 16, paddingTop:128, height: "70%", position: "relative" }}>
        <BillPayments />
        <TransactionsList />
      </View>
    </View>
  )
}






export default Home