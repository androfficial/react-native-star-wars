import { AxiosResponse } from 'axios';

import { api } from '@/api/axios/axiosInstance';
import { IStarWarsPerson, IStarWarsResponse } from '@/types/types';

export const getStarWarsPeople = (page: number): Promise<AxiosResponse<IStarWarsResponse>> => {
  return api.get<IStarWarsResponse>('/people', {
    params: {
      page,
    },
  });
};

export const getStarWarsPerson = (personId: number): Promise<AxiosResponse<IStarWarsPerson>> => {
  return api.get<IStarWarsPerson>(`/people/${personId}`);
};
