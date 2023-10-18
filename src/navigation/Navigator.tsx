import { CharacterInfoScreen } from '@/screens/CharacterInfoScreen';
import { HomeScreen } from '@/screens/HomeScreen';
import { ScreenNames } from '@/types/ScreenNames';

import { screenOptions } from './NavigationSettings';
import { Stack } from './StackNavigator';

export const AppNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={ScreenNames.HOME}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.CHARACTER_INFO} component={CharacterInfoScreen} />
    </Stack.Navigator>
  );
};
