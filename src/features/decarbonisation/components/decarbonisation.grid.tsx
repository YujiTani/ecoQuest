import DecarbonisationItem from './decarbonisation.item';
import { useAchieveDecarbonisationAction, useDecarbonisations } from '../api/useDecarbonisation';

/**
 * 脱炭素アクショングリッド
 */
function DecarbonisationGrid() {
  const { decarbonisations } = useDecarbonisations();
  const achieveDecarbonisationAction = useAchieveDecarbonisationAction()

  const handleAchieve = (uuid: string) => {
    achieveDecarbonisationAction.mutate({
        user_id: 'a808ba52-64d5-456f-9590-da27cbb945eb',
        decarbonisation_id: uuid,
    })
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
