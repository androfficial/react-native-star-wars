import { NavigationContainer } from '@react-navigation/native';

import { CharacterInfoScreen } from '@/screens/CharacterInfoScreen';
import { HomeScreen } from '@/screens/HomeScreen';
import { WelcomeScreen } from '@/screens/WelcomeScreen';
import { ScreenNames } from '@/types/ScreenNames';

import { screenOptions } from './NavigationSettings';
import { Stack } from './StackNavigator';

export const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName={ScreenNames.WELCOME}>
        <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} />
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.CHARACTER_INFO} component={CharacterInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
