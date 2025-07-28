import { View, Text, TouchableOpacity, } from "react-native";
import MenuContext from "../menuContext/menuContext";
// eslint-disable-next-line import/no-named-as-default
import Checkbox from "expo-checkbox";
import { useState } from "react";

type TProps = {
  itemToogleCheck: (itemId:number) => void
  itemChangeName: (itemId:number) => void
  itemDel: (itemId:number) => void
  item: IListItem
}

const ListItem = ({ item, itemChangeName, itemToogleCheck, itemDel }: TProps) => {
  
  return <View
    className='flex flex-row content-center items-center'
  >
    <MenuContext
      item={item}
      itemChangeName={itemChangeName}
      itemDel={itemDel}
    />

    <Text
      className={`flex flex-1 items-center justify-between bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 mx-1 my-1 divider-x-1 divide-red divide-opacity-100`}
    >
      {item.name}
      <Checkbox
        onValueChange={() => itemToogleCheck(item.id)}
        value={item.check}
      />
    </Text>
    <hr
      className='border-teal-500 mx-1'
    />

  </View>
}

export default ListItem