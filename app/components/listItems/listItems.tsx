
import React, { useState } from "react";
import { /*Dimensions, */ Text, TouchableOpacity, View, ScrollView, Modal } from "react-native";
import MenuContext from '../menuContext/menuContext';
import ListItem from '../listItem/listItem';


interface Tprops {
  itemUpd: (idItem: IListItem) => void
  itemDel: (idItem: IListItem) => void
  items: IListItem[];
  label: string;
}

//const windowDimensions = Dimensions.get('window');
//const height:number = windowDimensions.height / 2;

const ListItems = ({ itemUpd, itemDel, items, label }: Tprops) => {

  return <View
  >
    {
      items &&

      <View
        key={'a'}
        className={`w-70 fh-1/5 ma-h2/5 bg-green-300 px-1 text-gray-700 mx-1 my-0border-solid border-2 border-black`}
      >

        <Text
          key={'xxx'}

          className={`font`}
        >{` ${label}: ${items.length}`}</Text>

        <View
          key={`b`}
        >
          {
            items.map((item, i) => <ListItem 
              key={i}
              itemUpd={itemUpd} 
              itemDel={itemDel}
              item={item}
            />)
          }
        </View>

      </View>
    }



  </View>
}

export default ListItems;

