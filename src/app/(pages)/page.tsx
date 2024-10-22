import CardList from '../components/CardList';
import { bestseller_Produkte } from '../lib/arrays/home_Produkte';
import { neue_Produkte } from '../lib/arrays/home_Produkte';

export default function Home() {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 border-b-white">
      <CardList titel="Bestseller" list={bestseller_Produkte} />
      <CardList titel="Neue Artikeln" list={neue_Produkte} />
    </div>
  );
}
