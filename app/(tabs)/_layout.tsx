import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
      
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: Platform.select({
          ios: {
            display:'none',
            position: 'absolute',
          },
          default: {
            display: 'none'
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />
    </Tabs>
  );
}
