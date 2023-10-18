type PageLink = string | null;

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  NA = 'n/a',
}

export interface IStarWarsPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface IStarWarsResponse {
  count: number;
  next: PageLink;
  previous: PageLink;
  results: IStarWarsPerson[];
}
