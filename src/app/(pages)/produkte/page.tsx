import CardList from '@/app/components/CardList';
import {
  frauenArtikeln,
  kinderArtikeln,
  maennerArtikeln,
} from '@/app/lib/arrays/alle_Produkte';

const Produkte = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto pb-20 border-b-white">
      <section
        className="bg-cover bg-center h-96 flex flex-col items-center justify-center bg-fuchsia-400 rounded-lg"
        style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <div className="flex items-center space-x-2 my-4">
          <p className="text-4xl sm:text-5xl text-white">
            {'ALLE '}
            <span className="text-indigo-500">PRODUKTE</span>
          </p>
        </div>
      </section>
      <CardList titel="Für Frauen" list={frauenArtikeln} anzahl={3} />
      <CardList titel="Für Männer" list={maennerArtikeln} anzahl={3} />
      <CardList titel="Für Kinder" list={kinderArtikeln} anzahl={3} />
    </div>
  );
};

export default Produkte;
