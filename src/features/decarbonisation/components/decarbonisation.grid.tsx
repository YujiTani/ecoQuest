import DecarbonisationItem from './decarbonisation.item';
import { useDecarbonisations } from '../api/useDecarbonisation';

/**
 * 脱炭素アクショングリッド
 */
function DecarbonisationGrid() {
  const { decarbonisations } = useDecarbonisations();

  // アクション達成時の処理
  const handleAchieve = (uuid: string) => {
    // ここでAPIを呼び出して達成を記録することもできます
    // 例: saveAchievement(uuid);
    console.log(`apiリクエスト: ${uuid}`)
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
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
