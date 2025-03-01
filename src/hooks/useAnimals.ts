import { useQuery } from '@tanstack/react-query';

import { fetchAnimals, FetchAnimalsResponse } from '../utils/api/data';
import { queryKeys } from '../utils/api/keys';

import { useAuthToken } from './useAuthToken';

export const useAnimals = (type: string) => {
  const { data: authData } = useAuthToken();
  const token = authData?.accessToken ?? '';
  const queryKey: [string, string, string] = [queryKeys.animals, token, type];

  return useQuery<FetchAnimalsResponse, Error>({
    queryKey,
    queryFn: fetchAnimals,
    enabled: !!token,
  });
};
