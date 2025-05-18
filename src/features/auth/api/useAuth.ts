import { useSuspenseQuery } from '@tanstack/react-query';
import { getSession, getUser } from './auth';

export function useAuth() {
  const sessionQuery = useSuspenseQuery({
    queryFn: getSession,
    queryKey: ['auth', 'session'],
  });

  const userQuery = useSuspenseQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    session: sessionQuery.data,
    user: userQuery.data,
  };
}
