import { useMutation } from '@tanstack/react-query';
import {
  insertManyQuestPoint,
  insertManyQuestPointProps,
} from './quest-point.repository';

export function useInsertManyQuestPoint() {
  const muteto = useMutation({
    mutationFn: (payload: insertManyQuestPointProps[]) =>
      insertManyQuestPoint(payload),
    // FIXME: 成功時、失敗時の処理を追加する
    onSuccess: (data) => {
      // 成功時の処理（例: キャッシュの更新、通知の表示など）
      console.log('クエストポイント挿入成功:', data);
    },
    onError: (error) => {
      // エラー時の処理
      console.error('クエストポイント挿入エラー:', error);
    },
  });

  return muteto;
}
