import CardList from '../../components/CardList';
import { frauenArtikeln } from '../../lib/arrays/alle_Produkte';


const Frauen = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 border-b-white">
      <CardList titel="Für Frauen" list={frauenArtikeln} />
    </div>
  )
}

export default Frauen




