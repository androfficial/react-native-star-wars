import { nanoid } from 'nanoid';

export const favoriteCharactersData = [
  {
    count: 0,
    name: 'Female Fans',
  },
  {
    count: 0,
    name: 'Male Fans',
  },
  {
    count: 0,
    name: 'Others',
  },
].map((item) => ({
  ...item,
  id: nanoid(),
}));
