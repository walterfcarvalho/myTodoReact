//import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from "expo-router";
import {createContext, ReactNode, RefObject, useCallback, useContext, useEffect, useRef, useState} from 'react';
import cookies, * as myCookies from '@/app/utils/cookies';

const AuthContext = createContext<{
  signIn: (arg0: string) => void;
  signOut: () => void
  token: RefObject<string | null> | null;
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  token: null,
  isLoading: true
});

// Access the context as a hook
export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider  ({children}:{children: ReactNode}): ReactNode {
  const tokenRef = useRef<string|null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async ():Promise<void> => {
      const token =  myCookies.get('uuid');
      tokenRef.current = token || '';
      setIsLoading(false);
    })()
  }, []);

  const signIn = useCallback(async (token: string) => {
    myCookies.set("uuid", token);
    tokenRef.current = token;
    router.replace(`/(tabs)/homeScreen`);
}, []);

const signOut = useCallback(async () => {
    myCookies.set("uuid", "");
    tokenRef.current = null;
    router.replace(`/login`)
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: tokenRef,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};