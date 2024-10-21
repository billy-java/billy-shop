import CardList from '../components/CardList';
import { section1_Produkte } from '../lib/arrays/home_Produkte';
import { new_collections } from '../lib/arrays/new_collections';

export default function Home() {
  return (
    <main className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 border-b-white">
      <CardList titel="Neue Artikeln" list={new_collections} />
      <CardList titel="Frauen" list={section1_Produkte} />
    </main>
  );
}
