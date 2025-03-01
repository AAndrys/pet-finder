import { useQuery } from '@tanstack/react-query';

import { fetchAuthToken } from '../utils/api/auth';
import { queryKeys } from '../utils/api/keys';

export const useAuthToken = () => {
  return useQuery({
    queryKey: [queryKeys.authToken],
    queryFn: fetchAuthToken,
    staleTime: 1000 * 60 * 55,
  });
};
