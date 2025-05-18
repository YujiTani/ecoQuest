import supabase from '@/utils/supabase';

const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

export async function fetchQuestPoint() {
  const currentDate = new Date();

  const toDateISO = currentDate.toISOString();

  const { data: quest_points, error } = await supabase
    .from('quest_points')
    .select(`
        id,
        created_at,
        decarbonisations (
        point
        )
    `)
    .lte('created_at', toDateISO)
    .order('created_at', { ascending: false })
    .limit(1000)

  if (error) {
    throw error;
  }

  console.log('quest_points', quest_points)

  return quest_points;
}

export async function fetchQuestPointByLastWeek() {
  const currentDate = new Date();
  const nowMilliseconds = currentDate.getTime();

  const fromDateISO = new Date(nowMilliseconds - oneWeekMs).toISOString();
  const toDateISO = currentDate.toISOString();

  const { data: quest_points, error } = await supabase
    .from('quest_points')
    .select(`
        id,
        created_at,
        decarbonisations (
        point
        )
    `)
    .gte('created_at', fromDateISO)
    .lte('created_at', toDateISO)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  console.log('quest_points', quest_points)

  return quest_points;
}


export async function fetchQuestPointByToday() {
  const currentDate = new Date();
  const startDateTime = new Date(currentDate);
  startDateTime.setHours(0, 0, 0, 1);

  const endDateTime = new Date(currentDate);
  endDateTime.setHours(23, 59, 59, 59)

  const { data: quest_points, error } = await supabase
    .from('quest_points')
    .select(`
        id,
        created_at,
        decarbonisations (
        point
        )
    `)
    .gte('created_at', startDateTime.toISOString())
    .lte('created_at', endDateTime.toISOString())
    .order('created_at', { ascending: false })
    .limit(1000)

  if (error) {
    throw error;
  }

  console.log('quest_points', quest_points)

  return quest_points;
}



export async function fetchQueryPointByUserUuid(uuid: string) {
  const { data: quest_points, error } = await supabase
    .from('quest_points')
    .select('*')
    .eq('user_id', uuid);

  if (error) {
    throw error;
  }

  return quest_points;
}
