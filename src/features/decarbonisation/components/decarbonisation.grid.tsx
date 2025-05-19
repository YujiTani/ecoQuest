import DecarbonisationItem from './decarbonisation.item';
import { useDecarbonisations } from '../api/useDecarbonisation';
import { useInsertManyQuestPoint } from '../api/useQuestPoint';

/**
 * 脱炭素アクショングリッド
 */
function DecarbonisationGrid() {
  const { decarbonisations } = useDecarbonisations();
  const insertQuestPointMutation = useInsertManyQuestPoint();

  // アクション達成時の処理
  const handleAchieve = (uuid: string) => {
    // ここでAPIを呼び出して達成を記録することもできます
    // 例: saveAchievement(uuid);
    const response = insertQuestPointMutation.mutate([
      {
        user_id: 'a808ba52-64d5-456f-9590-da27cbb945eb',
        decarbonisation_id: uuid,
      },
      {
        user_id: 'a808ba52-64d5-456f-9590-da27cbb945eb',
        decarbonisation_id: uuid,
      },
      {
        user_id: 'a808ba52-64d5-456f-9590-da27cbb945eb',
        decarbonisation_id: uuid,
      },
    ]);

    // TODO: 成功時、失敗時に通知を表示する
    console.log('response:', response);
  };

  return (
    <div className="container relative mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">
        今日がんばったこと
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {decarbonisations.map((item) => (
          <DecarbonisationItem
            item={item}
            key={item.name}
            onAchieve={() => handleAchieve(item.uuid)}
          />
        ))}
      </div>
    </div>
  );
}

export default DecarbonisationGrid;
