import { View, FlatList } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toolbar from '../components/home/Toolbar';
import TransferCard from '../components/home/TransferCard';
import BillPayments from '../components/home/BillPayments';
import TransactionsList from '../components/home/TransactionList';
import BalanceCard from '../components/home/BalanceCard';

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  function handlePressAvatar() {
    navigation.navigate("Profile")
  }
  return (
    <View style={{ padding: 16, paddingTop: insets.top, flex: 1 }}>
      <Toolbar handlePressAvatar={handlePressAvatar} />
      {/* Balance and Accounts */}
      <BalanceCard />
      {/* Money Transfer */}
      <TransferCard />
      {/* Transactions */}
      <TransactionsList />
    </View>
  )
}




export default Home