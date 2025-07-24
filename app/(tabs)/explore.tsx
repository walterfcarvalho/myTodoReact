import { Text, View } from 'react-native';

import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import MenuContext from '../components/menuContext/menuContext';

export default function TabTwoScreen() {

    useFocusEffect(
    useCallback(() => {


      return () => {
      };
      
    }, [])
  );
  
  
  
  return <>
  
    <View>
      <Text>
        explore
      </Text>

    </View>
  </>
}
