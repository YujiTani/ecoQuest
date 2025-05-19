import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { achieveDecarbonisationAction, fetchDecarbonisations, insertQuestPointRequest } from './decarbonisation.repository';

/**
 * decarbonisationの一覧を取得
 * @returns decarbonisations
 */
export function useDecarbonisations() {
  const decarbonisationsQuery = useSuspenseQuery({
    queryFn: fetchDecarbonisations,
    queryKey: ['decarbonisations'],
  });

  return {
    decarbonisations: decarbonisationsQuery.data,
  };
}

/**
 * decarbonisationのstateをcompletedに更新し、quest_pointsにinsertする
 * @returns insertレスポンス
 */
export function useAchieveDecarbonisationAction() {
  const muteto = useMutation({
    mutationFn: (payload: insertQuestPointRequest) => achieveDecarbonisationAction(payload),
    onSuccess: (data) => {
      console.log(`insert成功 ${data}`)
    },
    onError: (error) => {
      console.log(`insertエラー ${error}`)
    }
  })

  return muteto
}