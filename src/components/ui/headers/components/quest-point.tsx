import { useQuestPointByUserUuid } from '../api/useQuestPoint';

/**
 * ユーザーの獲得しているポイント
 */
function QuestPoint() {
  // FIXME: ポイント取得はうまくいかないので一旦後回し
  const totalQuestPoint = useQuestPointByUserUuid(
    'a808ba52-64d5-456f-9590-da27cbb945eb',
  );
  console.log('totalQuestPoint', totalQuestPoint);

  return (
    <div className="flex items-center space-x-6">
      <div>
        <p className="text-xs text-gray-500">合計</p>
        <p className="text-2xl font-semibold text-gray-900">
          {totalQuestPoint.toLocaleString()} pt
        </p>
      </div>

      <div>
        <p className="text-xs text-gray-500">今日</p>
        <p className="text-2xl font-semibold text-green-600">+10 pt</p>
      </div>
    </div>
  );
}

export default QuestPoint;
