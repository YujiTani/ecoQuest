import { useLongPress } from '@/hooks/useLongClick';
import { IconNames, ICONS, SIZE } from '../constants';
import { useRef, useState } from 'react';
import ConfirmDialog from '@/components/ui/dialogs/confirmDialog';
import { CircleCheck } from 'lucide-react';
import { useDecarbonisationStore } from '../api/decarbonisation.store';
import CircleLoader from '@/components/ui/circles/circleLoader';

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
  const { hasDecarbonisation, addDecarbonisation, removeDecarbonisation } =
    useDecarbonisationStore();

  const pressMilliseconds = 800;
  const isSelected = hasDecarbonisation(item.uuid);
  const isCompleted = item.state === 'COMPLETED';

  function showDialog() {
    const itemElement = itemRef.current;
    if (!itemElement) {
      return;
    }
    addDecarbonisation(item);
    setOpenDialog(true);
  }

  function handleClick() {
    const itemElement = itemRef.current;
    const uuid = itemElement?.getAttribute('data-id');

    if (!itemElement || !uuid) {
      return;
    }

    if (!hasDecarbonisation(uuid)) {
      addDecarbonisation(item);
    } else {
      removeDecarbonisation(uuid);
    }
  }

  const handleLongPress = useLongPress(showDialog, pressMilliseconds);

  function handleConfirm() {
    if (onAchieve) {
      onAchieve(item.uuid);
    }
  }

  const borderStyle = isSelected
    ? isCompleted
      ? 'border-red-400'
      : 'border-blue-400'
    : 'border-gray-200';

  return (
    <div
      ref={itemRef}
      key={item.id}
      className={`border-7 relative rounded-lg ${borderStyle} bg-white shadow-sm transition-shadow duration-200 hover:shadow-md`}
      data-id={item.uuid}
      onClick={handleClick}
      {...handleLongPress}
    >
      {item.state === 'COMPLETED' && (
        <CircleCheck
          className="rounded-4xl absolute -right-5 -top-5 z-10 h-14 w-14 bg-white text-green-600"
          size={SIZE}
        />
      )}
      <div className="flex h-60 items-center justify-center bg-gray-100">
        <img
          className={`aspect-square h-full w-full object-cover ${item.state === 'COMPLETED' && 'grayscale-100'}`}
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
      {}
      <div>
        <CircleLoader
          width={50}
          height={50}
          milliseconds={pressMilliseconds}
          infinite={false}
          followCursor={true}
          isPressed={handleLongPress.isPress}
        />
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
