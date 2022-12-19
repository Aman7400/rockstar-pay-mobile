import { ThemeProvider, Text } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './constants/theme';
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold
} from '@expo-google-fonts/quicksand';
import font from './constants/font';


const App = () => {

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Text h1 style={{
          fontFamily: font.bold
        }}>ROCKSTAR PAY</Text>
        <Text h1 style={{
          fontFamily: font.regular
        }}>ROCKSTAR PAY</Text>
        <Text h1 style={{
          fontFamily: font.medium
        }}>ROCKSTAR PAY</Text>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App