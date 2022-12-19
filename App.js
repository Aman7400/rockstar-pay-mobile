import { ThemeProvider, Text } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './constants/theme';

const App = () => {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Text>ROCKSTAR PAY</Text>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App