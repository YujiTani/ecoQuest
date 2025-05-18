import { useSuspenseQuery } from '@tanstack/react-query';
import { getSession, getUser } from './auth.repository';

/**
 * セッション情報を取得
 * @returns セッション
 */
export function useAuth() {
  const sessionQuery = useSuspenseQuery({
    queryFn: getSession,
    queryKey: ['auth', 'session'],
  });

  return {
    session: sessionQuery.data,
  };
}

/**
 * ログイン中のユーザー情報を取得
 * @returns ユーザー
 */
export function useUser() {
  const userQuery = useSuspenseQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    user: userQuery.data,
  };
}
