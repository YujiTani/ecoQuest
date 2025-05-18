import UserInfo from './user-info';

type PointsData = {
  totalPoints: number;
  todayPoints: number;
};

function Header() {
  const pointsData: PointsData = {
    totalPoints: 2450,
    todayPoints: 120,
  };

  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-2 flex items-center sm:mb-0">
            <div className="text-sm text-gray-600">
              <UserInfo />
            </div>
          </div>

          {/* ポイント情報 */}
          <div className="flex items-center space-x-6">
            {/* 総合ポイント */}
            <div>
              <p className="text-xs text-gray-500">総合ポイント</p>
              <p className="font-semibold text-gray-900">
                {pointsData.totalPoints.toLocaleString()} pt
              </p>
            </div>

            {/* 本日のポイント */}
            <div>
              <p className="text-xs text-gray-500">本日の獲得</p>
              <p className="font-semibold text-green-600">
                +{pointsData.todayPoints.toLocaleString()} pt
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
