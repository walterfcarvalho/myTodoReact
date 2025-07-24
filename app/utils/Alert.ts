import { Alert, Platform } from 'react-native'

const alertPolyfill = (title:string, description:string ) => {
    return window.confirm([title, description].filter(Boolean).join('\n'))
}

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert

export default alert