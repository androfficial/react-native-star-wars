import { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WelcomeBg from '@/assets/welcome-bg.jpg';
import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const WelcomeScreen: React.FC<IPageProps<ScreenNames.WELCOME>> = ({
  navigation,
}): JSX.Element => {
  const bgOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bgAnimation = Animated.timing(bgOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    });

    const textAnimation = Animated.timing(textOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    });

    Animated.sequence([bgAnimation, textAnimation]).start();

    setTimeout(() => navigation.navigate(ScreenNames.HOME), 2500);
  }, [bgOpacity, navigation, textOpacity]);

  return (
    <SafeAreaView className='grow'>
      <Animated.Image
        className='h-full w-full grow'
        source={WelcomeBg}
        resizeMode='cover'
        style={{ opacity: bgOpacity }}
      />
      <View className='absolute top-1/2 w-full -translate-y-1/2 p-4'>
        <Animated.Text
          className='text-center text-3xl font-bold uppercase tracking-widest text-rose-300'
          style={{ opacity: textOpacity }}
        >
          Welcome to the world of Star Wars
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};
