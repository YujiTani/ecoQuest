export type Decarbonisation = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type DecarbonisationProps = {
  item: Decarbonisation;
};

function DecarbonisationItem({ item }: DecarbonisationProps) {
  return (
    <div
      key={item.id}
      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="flex h-40 items-center justify-center bg-gray-100">
        <span className="text-3xl text-gray-400">{item.icon}</span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center">
          <div className="mr-3 rotate-12 transform rounded-full bg-white p-2 shadow-sm">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold text-green-700">{item.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}

export default DecarbonisationItem;
