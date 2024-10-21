import CardList from '../components/CardList';
import { section1_Produkte } from '../lib/arrays/home_Produkte';

export default function Home() {
  return (
    <main className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 border-b-white">
      <CardList titel="Männer" list={section1_Produkte} />
      <CardList titel="Frauen" list={section1_Produkte} />
      <CardList titel="Kinder" list={section1_Produkte} />
    </main>
  );
}
