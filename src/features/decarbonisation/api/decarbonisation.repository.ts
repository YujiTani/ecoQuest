import supabase from '@/utils/supabase';

export async function fetchDecarbonisations() {
  const { data, error } = await supabase.from('decarbonisations').select();

  if (error) {
    throw error;
  }

  return data;
}
