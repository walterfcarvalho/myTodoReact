
import '@/global.css';

import * as firebase from '@/app/utils/firebase';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/appHeader/appHeader';
import ListHeader from '../components/listHeader/listHeader';
import AddButton from '../components/addButtom/addButton';
import * as myCookies from '@/app/utils/cookies';

const HomeScreen = () => {
  const [token, setToken] = useState<string>(myCookies.get('uuid'));
  const [list, setList] = useState<IListHeader[] | undefined>(undefined);

  useEffect(() => {
    if (typeof token === 'string')
      firebase.getLists(token)
        .then(data => setList(data))
        .catch(err => console.log(err))
  }, [token])

  const listChangeName = (itemId: number) => {
    let newItem = list?.filter(i => i.id === itemId)[0];

    if (!newItem)
      return

    const newName = prompt("New description", newItem.title || newItem.title)

    if (!newName)
      return

    newItem.title = newName;

  }

  const addList = () => {

    const newName = prompt("Enter description", "")

    if (!newName)
      return

    const newListHead: IListHeader = {
      id: list?.length || 1,
      title: newName,
      uuid: ""
    }

    firebase
      .listAdd(newListHead, token)
      .then((res) => {
        console.log(res.id);

        newListHead.uuid = res.id;

        const newList = list ? [...list, newListHead] : [newListHead];

        setList(newList);
      })
  };

  const listDelete = ( item:number ) => {

    if (!list || !list[item])
      return

    if (!confirm(`Remove this list ${list[item].title} ?`))
      return

    firebase.listDel(list[item].uuid)
    .then( () => setList( list.filter(l => l.uuid !== list[item].uuid) ))
    .catch( err => console.log(err) )

  }

  return <SafeAreaProvider>
    <AppHeader />

    <SafeAreaView
      edges={['top']}
    >
      <ScrollView>
        <ListHeader
          itemChangeName={() => { }}
          itemDel={listDelete}
          list={list}
        />
      </ScrollView>

    </SafeAreaView>

    <AddButton
      callBack={addList}
    />

  </SafeAreaProvider>
}

export default HomeScreen;