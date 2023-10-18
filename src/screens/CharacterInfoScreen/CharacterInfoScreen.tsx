import { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IPageProps } from '@/navigation/navigationTypes';
import { ScreenNames } from '@/types/ScreenNames';

export const CharacterInfoScreen: FC<IPageProps<ScreenNames.CHARACTER_INFO>> = ({
  navigation,
}): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.sectionContainer}>Character Info Screen</Text>
        <Button title='Перейти на Home' onPress={() => navigation.navigate(ScreenNames.HOME)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    textAlign: 'center',
    marginTop: 40,
    paddingHorizontal: 16,
    fontSize: 32,
    fontWeight: '700',
  },
});
