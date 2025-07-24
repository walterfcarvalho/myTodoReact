import { fa0, faEdit, faEllipsisH, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuTrigger,
  MenuOptions,
} from 'react-native-popup-menu';

type Tprops = {
  item: IListItem,
  itemUpd: (item: IListItem) => void
  itemDel: (item: IListItem) => void
}

const MenuContext = ({ item, itemUpd, itemDel }: Tprops) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getWidht = (isOpen: boolean) => isOpen ? 130 : 20

  const msg = (msg: string) => {
    console.log(msg);
  }

  return <View
    className={`flex flex-row ${getWidht(isOpen)}`}

    // style={{ display: 'flex', flexDirection: "row", gap: 10, width: getWidht(isOpen), alignContent: "center" }}
  >

    <TouchableOpacity
      onPress={() => setIsOpen(!isOpen)}
    >

      <FontAwesomeIcon
        size={25}
        icon={faEllipsisV}
      />

    </TouchableOpacity>

    {isOpen &&

      <View
        className='flex-row justify-between w-24'
      >

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen)
            
            itemUpd(

              {...item,
                name: prompt("New description", item.name) || item.name
              }  
            )
          
          }}
        >
          <FontAwesomeIcon
            size={30}
            icon={faEdit}
            />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen)
            itemDel(item)
          }}
          >
          <FontAwesomeIcon
            size={30}
            icon={faTrash}
          />
        </TouchableOpacity>

      </View>
    }


  </View>
}

export default MenuContext;