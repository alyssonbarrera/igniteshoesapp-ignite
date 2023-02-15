import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Alysson',
    'user_email': 'alysson@email.com'
  })
}
