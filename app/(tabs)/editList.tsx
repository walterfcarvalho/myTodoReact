
import * as firebase from '@/app/utils/firebase';
import '@/global.css';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, Image, ScrollView, Alert, View, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppHeader from '../components/appHeader/appHeader';
import ListItems from '../components/listItems/listItems';
import alert from '../utils/Alert';
import AddButton from '../components/addButtom/addButton';
import { addDoc } from 'firebase/firestore';

const emptyList: IList = {
  id: "",
  owner: "",
  title: 'Mock list',
  guests: [],
  items: [
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "macarrão", check: true, id: 10 },
    // { name: "peixe", check: true, id: 13 },
    // { name: "leite", check: false, id: 17 },
    // { name: "sal", check: false, id: 20 },
    // { name: "azeite", check: true, id: 21 },
    // { name: "mostarda", check: false, id: 33 },
  ]
}

const EditList = () => {
  const { id } = useLocalSearchParams();
  const [myList, setMyList] = useState<IList>(emptyList)

  useEffect(() => {
    if (typeof id === 'string')
      firebase.listObserve(id, (x) => setMyList(x))
  }, [id])

  useEffect(() => {
    if (!myList.id)
      return

    firebase.listUpdate(myList)
      .then(res => console.log('update list'))
      .catch(err => console.log(`Error ${err}`))
  }, [myList])


  const sendToFireBase = () => {
    // console.log("send to Firebase");
    // firebase.listUpdate(myList)
    //   .then(res => console.log('update list'))
    //   .catch(err => console.log(`Error ${err}`))
  }


  const itemAdd = () => {

    const newName = prompt('Enter item Description', '');

    if (!newName)
      return

    if (myList.items.filter(i => i.name.toUpperCase() === newName.toUpperCase()).length > 0) {
      alert('', `Item ${newName} already exists`);
      return
    }

    const newItem: IListItem = { name: newName, check: false, id: myList.items.length + 1 };

    const items = [...myList.items, newItem];

    setMyList((prev) => {
      return { ...prev, items: items }
    } );

    sendToFireBase();
  }

  const itemUpd = (item: IListItem) => {

    setMyList((old) => {
      return {
        ...old, items: old.items.map(i => i.id === item.id ? item : i)
      }
    })

    sendToFireBase();
  };

  const itemDel = (item: IListItem) => {

    if (!alert(`Remove this Item`, `${item.name} ?`))
      return

    setMyList((old) => {
      return {
        ...old, items: old.items.filter(i => i.id !== item.id)
      }
    });
    sendToFireBase()
  }


  return <SafeAreaProvider
    className={`static`}
  >
    <AppHeader
      title={myList.title}
      action={() => router.navigate('/')}
    />


    {myList && <>

      <ScrollView
        style={{}}
      >
        <ListItems
          key={1}
          label={'To do'}
          itemUpd={itemUpd}
          itemDel={itemDel}
          items={myList.items.sort((x, y) => x.name > y.name ? 1 : -1).filter(item => item.check === false)}
        />

        <ListItems
          key={2}
          label={'Done'}
          itemUpd={itemUpd}
          itemDel={itemDel}
          items={myList.items.sort((x, y) => x.name > y.name ? 1 : -1).filter(item => item.check === true)}
        />
      </ScrollView>

      <AddButton
        callBack={itemAdd}
      />

    </>
    }
  </SafeAreaProvider>

}


export default EditList;