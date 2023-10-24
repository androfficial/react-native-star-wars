import { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const CharacterInfoScreen: FC<IPageProps<ScreenNames.CHARACTER_INFO>> = ({
  navigation,
}): JSX.Element => {
  return (
    <SafeAreaView className='grow'>
      <View>
        <Text className='mt-[40px] px-[16px] text-center text-[32px] font-bold'>
          Character Info Screen
        </Text>
        <Button title='Перейти на Home' onPress={() => navigation.navigate(ScreenNames.HOME)} />
      </View>
    </SafeAreaView>
  );
};
