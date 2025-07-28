import { faEdit, faEllipsisV, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

type Tprops = {
  item: any,
  itemChangeName: (itemId:number) => void
  itemDel: (itemId:number) => void
}

const MenuContext = ({ item, itemChangeName, itemDel }: Tprops) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getWidht = (isOpen: boolean) => isOpen ? 130 : 20

  return <View
    className={`flex flex-row ${getWidht(isOpen)}`}
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
        className='flex-row justify-around w-24'
      >
        <TouchableOpacity
          onPress={() => {
            setIsOpen(!isOpen)
            itemChangeName(item.id)
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