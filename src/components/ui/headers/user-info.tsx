import { useAuth } from '@/features/auth/api/useAuth';

/**
 * header; ユーザー情報を表示
 */
function UserInfo() {
  const { user } = useAuth();

  return <>{user && <p>{user.user_metadata.full_name}</p>}</>;
}

export default UserInfo;
