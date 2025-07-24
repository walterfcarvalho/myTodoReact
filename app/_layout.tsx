// import { Header, HeaderTitle } from '@react-navigation/elements';
import AuthProvider from "@/app/provider/authProvider";
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  const op: any = { headerShown: false };

  return <AuthProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={op} />
      <Stack.Screen name="+not-found" options={op} />
      <Stack.Screen name="login/index" options={op} />
    </Stack>
  </AuthProvider>
}
