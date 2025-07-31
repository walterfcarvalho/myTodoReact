// import { Header, HeaderTitle } from '@react-navigation/elements';
import AuthProvider from "@/app/provider/authProvider";
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  return <AuthProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={ {headerShown:false}  } />
      <Stack.Screen name="+not-found" options={ {headerShown:false}  } />
      <Stack.Screen name="login/index" options={ {headerShown:false}  } />
      <Stack.Screen name="index" options={ {headerShown:false}  } />
    </Stack>
  </AuthProvider>
}
