import supabase from "@/utils/supabase";

export const getUsers = async () => {
    return await supabase.auth.getUser()
};