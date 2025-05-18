import { IconNames, ICONS } from "../constants";

export type Decarbonisation = {
  id: number;
  name: string;
  description: string;
  icon: IconNames;
  image?: string;
};

type DecarbonisationProps = {
  item: Decarbonisation;
};

function DecarbonisationItem({ item }: DecarbonisationProps) {
  const icon = ICONS[item.icon] || ICONS.ToyBrick; 

  return (
    <div
      key={item.id}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex h-60 items-center justify-center bg-gray-100">
        <img className="object-cover aspect-square w-full h-full" src={item.image} alt={item.name} />
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
    </div>
  );
}

export default DecarbonisationItem;
