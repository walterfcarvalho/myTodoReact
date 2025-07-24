import { Header, HeaderTitle } from '@react-navigation/elements';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }


  const op: any = { headerShown: false  };


  return <>
      <Stack>
        <Stack.Screen name="(tabs)" options= {op} />
        <Stack.Screen name="+not-found"  options= {op}  />
        <Stack.Screen name="index" options={op} />
      </Stack>
      <StatusBar style="auto" />
  </>
}
