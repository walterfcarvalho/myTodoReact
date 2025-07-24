import { Link } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const NotFoundScreen = () => {
  return (
    <>
      <Text
        className={`color-black-300 p-4 text-center text-xl`}      
      >
        {`Not found, click `}
        <Link 
          className={`color-green-600 p-4 text-center text-xl`}      
          href={`/(tabs)/homeScreen`} 
        >
          {`<Here>`}
        </Link>
        {` to go home.`}
      </Text>
    </>
  );
}

export default NotFoundScreen;