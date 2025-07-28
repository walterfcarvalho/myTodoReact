
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
import { emptyList } from '@/types/consts';


const EditList = () => {
  const { id } = useLocalSearchParams();
  const [myList, setMyList] = useState<IList>({...emptyList})

  useEffect(() => {
    if (typeof id === 'string')
      firebase.listItemsObserve(id, (x) => setMyList(x))
  }, [id])

  useEffect(() => {
    if (!myList.uuid)
      return

    firebase.listUpdate(myList)
      .then(res => console.log('update list'))
      .catch(err => console.log(`Error ${err}`))
  }, [myList])

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
    });
  }

  const itemToogleCheck = (itemId: number) => {
    const item = myList.items.filter(i => i.id === itemId)[0];

    if (!item)
      return

    item.check = !item.check

    itemUpd(item);
  }

  const itemChangeName = (itemId: number) => {

    let newItem = myList.items.filter(i => i.id === itemId)[0];

    if (!newItem)
      return

    const newName = prompt("New description", newItem.name || newItem.name)

    if (!newName)
      return

    newItem.name = newName;

    itemUpd(newItem);
  }

  const itemUpd = (item: IListItem) => {

    setMyList((old) => {
      return {
        ...old, items: old.items.map(i => i.id === item.id ? item : i)
      }
    })
  };

  const itemDel = (itemId: number) => {

    if (!alert(`Remove this Item`, `${myList.items[itemId].name} ?`))
      return

    setMyList((old) => {
      return {
        ...old, items: old.items.filter(i => i.id !== itemId)
      }
    });
  }

  return <SafeAreaProvider
    className={`static`}
  >
    <AppHeader
      title={myList.title}
      action={() => router.navigate('/homeScreen')}
    />


    {myList && <>

      <ScrollView
        style={{}}
      >
        {myList.items &&
          <ListItems
            key={1}
            label={'To do'}
            itemToogleCheck={itemToogleCheck}
            itemChangeName={itemChangeName}
            itemDel={itemDel}
            items={myList.items?.sort((x, y) => x.name > y.name ? 1 : -1).filter(item => item.check === false)}
          />
        }
        {myList.items &&
          <ListItems
            key={2}
            label={'Done'}
            itemToogleCheck={itemToogleCheck}
            itemChangeName={itemChangeName}
            itemDel={itemDel}
            items={myList.items?.sort((x, y) => x.name > y.name ? 1 : -1).filter(item => item.check === true)}
          />
        }
      </ScrollView>

      <AddButton
        callBack={itemAdd}
      />

    </>
    }
  </SafeAreaProvider>

}


export default EditList;