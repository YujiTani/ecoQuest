import { useUserStore } from '@/features/auth/api/user.store';

/**
 * header; ユーザー情報を表示
 */
function User() {
  const { user } = useUserStore();

  return <>{user && <p>{user.user_metadata.full_name}</p>}</>;
}

export default User;
