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


import { View } from 'react-native';
import Navigator from './navigation/navigator';



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
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App