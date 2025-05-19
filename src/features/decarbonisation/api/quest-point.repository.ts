import supabase from '@/utils/supabase';

export type insertManyQuestPointProps = {
  user_id: string;
  decarbonisation_id: string;
};

export async function insertManyQuestPoint(
  payload: insertManyQuestPointProps[],
) {
  try {
    const records = payload.map((item) => ({
      user_id: item.user_id,
      decarbonisation_id: item.decarbonisation_id,
    }));

    const { data, error } = await supabase
      .from('quest_points')
      .insert(records)
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
