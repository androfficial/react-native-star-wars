import { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const WelcomeScreen: React.FC<IPageProps<ScreenNames.WELCOME>> = ({
  navigation,
}): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigation.navigate(ScreenNames.HOME), 2500);
  }, [navigation]);

  return (
    <SafeAreaView className='grow items-center justify-center bg-black p-4'>
      <Text className='text-3xl text-white'>Welcome Screen</Text>
    </SafeAreaView>
  );
};
