import { faChevronRight as icon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';


type Tprops = {
  list: listHeader[] | undefined
}

const ListHeader = ({ list }: Tprops) => {

  const callEditList = (idx: number) => {
    console.log(idx);

    if (list && list[idx])
      router.push({ pathname: "/editList", params: { id: list[idx].id } });
  }

  return <View
    className='py-2 px-2'
  >
    <View
      className="shadow-lg"
    >
      <View className="p-2" focusable={false}>
        {list?.map((l: listHeader, i: number) => <Text
          className="flex justify-between bg-gray-200 px-3 py-3 text-sm font-semibold text-gray-700 mx-2 my-2"
          key={i}
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
        )}
      </View>
    </View>





  </View>
}

export default ListHeader;