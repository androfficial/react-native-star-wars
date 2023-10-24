import 'react-native-get-random-values';

import { StatusBar } from 'react-native';

import { CharacterProvider } from './context/CharacterContext';
import { useColorBarScheme } from './hooks/useColorBarScheme';
import { AppNavigator } from './navigation/AppNavigator';

const App = (): JSX.Element => {
  const { isDarkMode } = useColorBarScheme();

  return (
    <CharacterProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </CharacterProvider>
  );
};

export default App;
