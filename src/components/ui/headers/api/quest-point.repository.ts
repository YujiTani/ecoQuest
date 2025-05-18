import supabase from '@/utils/supabase';

type FetchPointProps = {
  options?: {
    from?: Date;
    to?: Date;
  };
};

const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

export async function fetchQuestPoint({ options }: FetchPointProps) {
  const currentDate = new Date();
  const nowMilliseconds = currentDate.getTime();

  const fromDateISO = options?.from
    ? options.from.toISOString()
    : new Date(nowMilliseconds - oneWeekMs).toISOString();
  const toDateISO = options?.to
    ? options.to.toISOString()
    : currentDate.toISOString();

  console.log('検索範囲:', { fromDateISO, toDateISO });

  const { data: quest_points, error } = await supabase
    .from('quest_points')
    .select(`*`)
    .gte('created_at', fromDateISO)
    .lte('created_at', toDateISO)
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

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
