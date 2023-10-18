import { useContext } from 'react';

import { CharacterContext } from '@/context/CharacterContext';

export const useCharacterContext = () => {
  const contextValues = useContext(CharacterContext);

  return {
    ...contextValues,
  };
};
