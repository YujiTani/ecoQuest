import DecarbonisationItem from './decarbonisation.item';
import {
  useAchieveDecarbonisationAction,
  useDecarbonisations,
} from '../api/useDecarbonisation';
import { useDecarbonisationStore } from '../api/decarbonisation.store';
import { useUserStore } from '@/features/auth/api/user.store';

/**
 * 脱炭素アクショングリッド
 */
function DecarbonisationGrid() {
  const { decarbonisations } = useDecarbonisations();
  const achieveDecarbonisationAction = useAchieveDecarbonisationAction();
  const { decarbonisations: selectedDecarbonisations } =
    useDecarbonisationStore();
  const { user } = useUserStore();

  const handleAchieve = () => {
    if (!user) {
      throw Error('ユーザー情報がありません');
    }

    selectedDecarbonisations.map((decarbonisation) => {
      achieveDecarbonisationAction.mutate({
        user_id: user.id,
        decarbonisation_id: decarbonisation.uuid,
      });
    });
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
            onAchieve={() => handleAchieve()}
          />
        ))}
      </div>
    </div>
  );
}

export default DecarbonisationGrid;
