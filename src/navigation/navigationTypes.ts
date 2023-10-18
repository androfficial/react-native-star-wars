import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ScreenNames } from '@/types/ScreenNames';

export type RootStackParamList = {
  [ScreenNames.HOME]: undefined;
  [ScreenNames.CHARACTER_INFO]: undefined;
};

export interface IPageProps<T extends keyof RootStackParamList> {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
}
