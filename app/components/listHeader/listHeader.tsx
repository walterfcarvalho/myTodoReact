import { faChevronRight as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import MenuContext from '../menuContext/menuContext';

type Tprops = {
  list: IListHeader[] | undefined
  itemChangeName: (itemId:number) => void
  itemDel: (itemId:number) => void
}

const ListHeader = ({itemChangeName, itemDel, list }: Tprops) => {

  const callEditList = (idx: number) => {

    if (list && list[idx])
      router.push({ pathname: "/editList", params: { id: list[idx].uuid } });
  }

  return <View
    className='py-2 px-2'
  >
    <View
      className={`w-70 fh-1/5 ma-h2/5 bg-green-300 px-1 text-gray-700 mx-1 my-0border-solid border-2 border-black`}
    >
      <View className="p-2" focusable={false}>
        {list?.map((l: IListHeader, i: number) => <View
            className={`flex flex-row content-center items-center`}
          key={i}
        >
          <MenuContext
            item={l}
            itemDel={ () => itemDel(l.id)}
            itemChangeName={() => itemChangeName(l.id)}
          />

          <Text
            className={`flex flex-1 items-center justify-between bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 mx-1 my-1 divider-x-1 divide-red divide-opacity-100`}
          >
            {l.title}

            <TouchableOpacity
              style={{}}
              onPress={() => callEditList(i)}
            >
              <FontAwesomeIcon
                size={25}
                icon={icon}
              >
              </FontAwesomeIcon>
            </TouchableOpacity>
          </Text>
        </View>
        )}
      </View>
    </View>





  </View>
}

export default ListHeader;