import CardList from '../../components/CardList';
import { maennerArtikeln } from '../../lib/arrays/alle_Produkte';

const Maenner = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto pb-20 border-b-white">
      <section
        className="bg-cover bg-center h-96 flex flex-col items-center justify-center bg-blue-400 rounded-lg"
        style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <div className="flex items-center space-x-2 my-4">
          <p className="text-4xl sm:text-5xl text-white">
            {'MÄN'}
            <span className="text-indigo-500">NER</span>
          </p>
        </div>
      </section>
      <CardList list={maennerArtikeln} />
    </div>
  );
};

export default Maenner;
