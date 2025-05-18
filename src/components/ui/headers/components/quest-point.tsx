import { useQuestPoint, useQuestPointByToday } from '../api/useQuestPoint';

/**
 * ユーザーの獲得しているポイント
 */
function QuestPoint() {
  const {questPoint: totalQuestPoint} = useQuestPoint();
  const {questPoint: currentDateQuestPoint} = useQuestPointByToday();

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
        <p className="text-2xl font-semibold text-green-600">
          {currentDateQuestPoint.toLocaleString()} pt
        </p>
      </div>
    </div>
  );
}

export default QuestPoint;
