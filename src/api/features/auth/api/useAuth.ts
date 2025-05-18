import { useSuspenseQuery } from "@tanstack/react-query";
import { getSession } from "./auth";

export function useAuth() {
    const sessionQuery = useSuspenseQuery({
        queryFn: getSession,
        queryKey: ['auth', 'session'],
    })

    return {
        session: sessionQuery.data,
      };
}