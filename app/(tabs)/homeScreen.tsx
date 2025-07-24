
import '@/global.css';

import * as firebase from '@/app/utils/firebase';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/appHeader/appHeader';
import ListHeader from '../components/listHeader/listHeader';


const HomeScreen = () => {
  const [list, setList] = useState<IListHeader[] | undefined>(undefined);

  useEffect(() => {
    firebase.list ()
      .then(data => setList(data))
      .catch(err => console.log(err))
  })

  return   <SafeAreaProvider
      aria-hidden={false}
    >
      <AppHeader />

      <SafeAreaView
        edges={['top']}
        aria-hidden={false}
      >
        <ScrollView
          aria-hidden={false}
        >
          <ListHeader
            list={list}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
}


export default HomeScreen;