import * as firebase from '@/app/utils/firebase';
import '@/global.css';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type tProps = {
  title?: string,
  action?: () => void
}


const emptyList = {
  owner: "kPx2IKUaqXS4xHG0wShQSRhrUAD3",
  // id: (new Date().toISOString()),
  title: 'xttttttt',
  guests: ['111'],
  items: [
    { id: 0, name: "a", check: true },
    { id: 1, name: "a", check: false }
  ]
}

/**
 * Shows the header component on a "page" 
 * 
 * @param title: string - the label on the component.
 * @param action: () => void | "
 */

const AppHeader = ({ title, action }: tProps) => {
  return <View
    className="flex items-center bg-green-400 p-2"
  >
    { action &&

      <TouchableOpacity
        className='absolute left-5'
        testID='backButton'
        onPress={action}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={25}
        />
      </TouchableOpacity>
    }

    <Text
      className='text-gray-1000 text-lg'
    >
      {title || `My Todo list`}
    </Text>
  </View>
}
export default AppHeader;
