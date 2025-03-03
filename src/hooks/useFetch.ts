import { useQuery } from '@tanstack/react-query';

import { apiClient } from '../utils/api/apiClient';

export const useFetch = <T>(
  queryKey: string[],
  endpoint: string,
  fetchEnabled: boolean = true,
) => {
  return useQuery<T>({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKey,
    queryFn: () => apiClient.fetch<T>(`${endpoint}`),
    staleTime: 3600000,
    enabled: fetchEnabled,
  });
};
