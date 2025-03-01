import { useQuery } from '@tanstack/react-query';

import { fetchAnimalTypes } from '../utils/api/data';
import { queryKeys } from '../utils/api/keys';

import { useAuthToken } from './useAuthToken';

export const useAnimalTypes = () => {
  const { data: authData } = useAuthToken();
  const token = authData?.accessToken ?? '';
  const queryKey: [string, string] = [queryKeys.animalTypes, token];
  //TODO TYPES FetchAnimalsResponse
  return useQuery<any, Error>({
    queryKey,
    queryFn: fetchAnimalTypes,
    enabled: !!token,
  });
};
