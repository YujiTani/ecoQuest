import DecarbonisationItem from './decarbonisation.item';
import { useDecarbonisations } from '../api/useDecarbonisation';

function DecarbonisationGrid() {
  const { decarbonisations } = useDecarbonisations()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">
        今日がんばったこと
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {decarbonisations.map((item) => (
          <DecarbonisationItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default DecarbonisationGrid;
