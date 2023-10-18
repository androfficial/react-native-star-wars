import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';

import { CharacterProvider } from './context/CharacterContext';
import { AppNavigator } from './navigation/Navigator';

const App = (): JSX.Element => {
  const isDarkMode: boolean = useColorScheme() === 'dark';

  return (
    <CharacterProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </NavigationContainer>
    </CharacterProvider>
  );
};

export default App;
