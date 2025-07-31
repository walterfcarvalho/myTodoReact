import * as firebase from '@/app/utils/firebase';
import { useAuthSession } from "@/app/provider/authProvider";
import Uuid from "expo-modules-core/src/uuid";
import { Button, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import * as myCookies from '@/app/utils/cookies';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList as icon } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";

const provider = new GoogleAuthProvider();

const auth = getAuth(firebase.firebaseApp);

const Login = () => {
  const { signIn } = useAuthSession();

  const loginPop = () => {

    signInWithPopup(auth, provider)
      .then(result => signIn(result.user as TFirebaseUser))
      .catch(error => alert(`Error on login Code ${error.code} message: ${error.message}`));
  }

  return <View
    className={`h-full bg-green-300 justify-center gap-20`}
  >
    <View
      className={`flex flex-row justify-center items-end`}
    >
      <Text
        className={`text-center text-4xl`}
      >
        My ToDo
      </Text>

      <FontAwesomeIcon
        size={50}
        icon={icon}
      />
    </View>

    <View
      className={`flex flex-col items-center`}

    // className={`flex flex-col justify-items-center bg-red-100`}
    >
      <TouchableOpacity
        onPress={loginPop}
      >
        <Image
          className={`w-1/2`}
          source={require('@/assets/images/signwithgoogle.png')}
        />
      </TouchableOpacity>
      <Text
        className={`mt-2 text-xs`}
      >
        {`You must allow`}
        <Text
          className={`text-blue-500`}
          onPress={ () => Linking.openURL(`https://support.google.com/chrome/answer/95472?hl=en&co=GENIE.Platform%3DDesktop`)}
        >
          {` pop-ups `}
        </Text>
        {`on this page`}
      </Text>
    </View>

  </View>
}

export default Login;