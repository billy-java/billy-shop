import CardList from '@/app/components/CardList';
import {
  frauenArtikeln,
  kinderArtikeln,
  maennerArtikeln,
} from '@/app/lib/arrays/alle_Produkte';

const Produkte = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 border-b-white">
      <CardList titel="Für Frauen" list={frauenArtikeln} />
      <CardList titel="Für Männer" list={maennerArtikeln} />
      <CardList titel="Für Kinder" list={kinderArtikeln} />
    </div>
  );
};

export default Produkte;
