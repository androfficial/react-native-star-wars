import React, { createContext, useState } from 'react';

import { IStarWarsPerson } from '@/types/types';

interface CharacterContextData {
  characters: IStarWarsPerson[];
  setCharacters: React.Dispatch<React.SetStateAction<IStarWarsPerson[]>>;
}

export const CharacterContext = createContext<CharacterContextData>({
  characters: [],
  setCharacters: () => {},
});

export const CharacterProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [characters, setCharacters] = useState<IStarWarsPerson[]>([]);

  return (
    <CharacterContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};
