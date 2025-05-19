import { useLongPress } from '@/hooks/useLongClick';
import { IconNames, ICONS } from '../constants';
import { useRef, useState } from 'react';
import ConfirmDialog from '@/components/ui/dialogs/confirmDialog';

export type Decarbonisation = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  icon: IconNames;
  image?: string;
};

type DecarbonisationProps = {
  item: Decarbonisation;
  onAchieve?: (uuid: string) => void;
};

/**
 * 脱炭素アクションアイテム
 */
function DecarbonisationItem({ item, onAchieve }: DecarbonisationProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const icon = ICONS[item.icon] || ICONS.ToyBrick;
  const [OpenDialog, setOpenDialog] = useState(false);
  const pressMilliseconds = 500;

  function hancleLongPress() {
    const itemElement = itemRef.current;

    if (itemElement) {
      // storeの配列にuuidをpush
      // const uuid = itemElement.getAttribute('data-id');
      setOpenDialog(true);
    }
  }

  const handleLongPress = useLongPress(hancleLongPress, pressMilliseconds);

  function handleConfirm() {
    if (onAchieve) {
      onAchieve(item.uuid);
    }
  }

  return (
    <div
      ref={itemRef}
      key={item.id}
      className="overflow-hidden rounded-lg border-8 border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
      {...handleLongPress}
      data-id={item.uuid}
    >
      <div className="flex h-60 items-center justify-center bg-gray-100">
        <img
          className="aspect-square h-full w-full object-cover"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center">
          <div className="mr-3 rotate-12 transform rounded-full bg-white p-2 shadow-sm">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-green-700">{item.name}</h3>
        </div>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
      <ConfirmDialog
        isOpen={OpenDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleConfirm}
        title="アクション達成の確認"
        message="このアクションを達成しましたか？達成するとポイントが加算されます。"
        item={item}
      />
    </div>
  );
}

export default DecarbonisationItem;
