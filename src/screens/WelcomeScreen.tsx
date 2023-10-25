import { useEffect } from 'react';
import { ImageBackground, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WelcomeBg from '@/assets/welcome-bg.jpg';
import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const WelcomeScreen: React.FC<IPageProps<ScreenNames.WELCOME>> = ({
  navigation,
}): JSX.Element => {
  useEffect(() => {
    setTimeout(() => navigation.navigate(ScreenNames.HOME), 2500);
  }, [navigation]);

  return (
    <SafeAreaView className='grow'>
      <ImageBackground className='grow justify-center' source={WelcomeBg} resizeMode='cover'>
        <Text className='p-4 text-center text-3xl font-bold uppercase tracking-widest text-rose-300'>
          Welcome to the world of Star Wars
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
