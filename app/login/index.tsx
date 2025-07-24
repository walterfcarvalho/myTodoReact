import {useAuthSession} from "@/app/provider/authProvider";
import Uuid from "expo-modules-core/src/uuid";
import {Button, Text, View} from "react-native";
import * as myCookies from '@/app/utils/cookies';

const Login = () => {
  const {signIn} = useAuthSession();

  const login = () => {

    signIn(`kPx2IKUaqXS4xHG0wShQSRhrUAD3`);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login screen</Text>
      <Button title={"Login"} onPress={login} />
    </View>
  );
}

export default Login;