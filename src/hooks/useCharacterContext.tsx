import { useContext } from 'react';

import { CharacterContext } from '@/context/CharacterContext';

export const useCharacterContext = () => {
  return {
    ...useContext(CharacterContext),
  };
};
