import { useColorScheme } from 'react-native';

export const useColorBarScheme = () => {
  const colorBarScheme = useColorScheme();

  const isDarkMode = colorBarScheme === 'dark';
  const isLightMode = colorBarScheme === 'light';

  return {
    isDarkMode,
    isLightMode,
  };
};
