import { useAuthSession } from "@/app/provider/authProvider";
import Uuid from "expo-modules-core/src/uuid";
import { Button, Text, View } from "react-native";
import * as myCookies from '@/app/utils/cookies';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const { signIn } = useAuthSession();

  const login = () => {
    signIn(`kPx2IKUaqXS4xHG0wShQSRhrUAD3`);
  }


  useEffect(() => {

    getRedirectResult(auth)
      .then(result => {

        if (!result)
          return

        const credential = GoogleAuthProvider.credentialFromResult(result);

        // This gives you a Google Access Token. You can use it to access Google APIs.
        const token = credential?.accessToken;
        alert(JSON.stringify(`token ${token}`));

        // The signed-in user info.
        const user = result?.user;

        alert(JSON.stringify(`user ${user}`));

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log(` redirect error ${error}`);
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }, [])



  const loginPop = () => {

    signInWithRedirect(auth, provider);


    // signInWithEmailAndPassword(auth, "walterfcarvalho@gmail.com", "82261318391KMR")
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //         alert("ok");
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         alert(errorMessage);
    //   });


    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential?.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     // ...

    //     console.log(`token: ${JSON.stringify(token)}`);
    //     console.log(`user:  ${JSON.stringify(user)}`);

    //     alert("ok");

    //   }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);

    //     alert(error);

    //   });
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
      {/* <Button title={"Login"} onPress={login} /> */}
      <Button title={"Login2"} onPress={loginPop} />
    </View>
  );
}

export default Login;