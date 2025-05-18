import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import supabase from '@/utils/supabase'
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate()

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

  if (session) {
    navigate('/home')
  }

    return (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    )
}

export default Login