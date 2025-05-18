import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '@/utils/supabase';
import Router from '@/app/router';
import Notifications from '@/components/ui/notifications/notifications';

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  //   const { data: session } = useAuthentication();

  return session ? (
    <>
      <Notifications />
      <Router />
    </>
  ) : (
    <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  );
}

export default App;
