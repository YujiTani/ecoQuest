import { useLongPress } from '@/hooks/useLongClick';
import { IconNames, ICONS, SIZE } from '../constants';
import { useRef, useState } from 'react';
import ConfirmDialog from '@/components/ui/dialogs/confirmDialog';
import { CircleCheck } from 'lucide-react'

export type Decarbonisation = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  icon: IconNames;
  image?: string;
  state: string;
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
      className="rounded-lg border-8 border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md relative"
      {...handleLongPress}
      data-id={item.uuid}
    >
      { item.state === 'COMPLETED' && (
         <CircleCheck className="h-14 w-14 text-green-600 bg-white rounded-4xl z-10 absolute -top-5 -right-5"  size={SIZE} />
      )}
      <div className="flex h-60 items-center justify-center bg-gray-100">
        <img
          className={`aspect-square h-full w-full object-cover ${item.state === 'COMPLETED' && "grayscale-100"}`}
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
