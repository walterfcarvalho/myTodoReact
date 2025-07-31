import { Redirect, Tabs } from 'expo-router';
// import React  from 'react';
import { Platform, Text } from 'react-native';
import { useAuthSession } from '../provider/authProvider';
import * as myCookie from '@/app/utils/cookies';
import { setParams } from 'expo-router/build/global-state/routing';


export default function TabLayout() {
  const { token } = useAuthSession()

  if (!token?.current) {
    return <Redirect href={`/login`} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            display: 'none',
            position: 'absolute',
          },
          default: {
            display: 'none'
          },
        }),
      }}>
      <Tabs.Screen
        name="homeScreen"
        options={{
          headerShown: false,
          title: '',
        }
      }
      />
      <Tabs.Screen
        name="editList"
        options={{title: 'Explore'}}
      />
    </Tabs>
  );
}
