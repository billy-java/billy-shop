'use client';

import React, { useState } from 'react';
import CardList from '@/app/components/CardList';
import {
  frauenArtikeln,
  kinderArtikeln,
  maennerArtikeln,
} from '@/app/lib/arrays/alle_Produkte';


const Produkte = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [discountFilter, setDiscountFilter] = useState(false);
  const [sizeFilter, setSizeFilter] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const allProducts = [
    ...frauenArtikeln,
    ...kinderArtikeln,
    ...maennerArtikeln,
  ];

  // Filtrage et tri des produits
  const filteredAndSortedProducts = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter ? product.kategorie === categoryFilter : true) &&
        (discountFilter ? product.neuer_preis !== undefined : true) &&
        (sizeFilter ? product.groesse === sizeFilter : true)
    )
    .sort((a, b) => {
      if (!sortCriteria) return 0;
      const isAsc = sortOrder === 'asc' ? 1 : -1;
      if (sortCriteria === 'preis') {
        return (
          isAsc *
          ((a.neuer_preis || a.alter_preis) - (b.neuer_preis || b.alter_preis))
        );
      } else if (sortCriteria === 'name') {
        return isAsc * a.name.localeCompare(b.name);
      } else if (sortCriteria === 'kategorie') {
        return isAsc * a.kategorie.localeCompare(b.kategorie);
      }
      return 0;
    });

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

      {/* Champ de recherche */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full bg-gray-600 hover:bg-indigo-700 text-white"
        />
      </div>

      {/* Filtres */}
      <div className="flex space-x-6 my-4">
        {/* Filtre de catégorie */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded bg-gray-600 hover:bg-indigo-700 text-white">
          <option value="">Alle Artikeln</option>
          <option value="Frauen">Frauen</option>
          <option value="Maenner">Männer</option>
          <option value="Kinder">Kinder</option>
        </select>

        {/* Filtre pour les produits en promotion */}
        <label className="flex items-center ">
          <input
            type="checkbox"
            checked={discountFilter}
            onChange={() => setDiscountFilter(!discountFilter)}
            className="mr-2"
          />
          Nur Angebote
        </label>

        {/* Filtre de taille */}
        <select
          value={sizeFilter}
          onChange={(e) => setSizeFilter(e.target.value)}
          className="border p-2 rounded bg-gray-600 hover:bg-indigo-700 text-white">
          <option value="">Größe</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Système de tri */}
      <div className="flex space-x-6 my-4">
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="border p-2 rounded  bg-gray-600 hover:bg-indigo-700 text-white">
          <option value="">Sortieren</option>
          <option value="preis">Preis</option>
          <option value="name">Name</option>
          <option value="kategorie">Kategorie</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          className="border p-2 rounded">
          {sortOrder === 'asc' ? 'Aufsteigend' : 'Absteigend'}
        </button>
      </div>

      {/* Nombre de résultats */}
      <div className="my-4">
        <p>
          <span className="text-indigo-400 text-xl">
            {filteredAndSortedProducts.length}
          </span>{' '}
          Ergebnisse gefunden.
        </p>
      </div>

      {/* Affichage des produits filtrés et triés */}
      <CardList titel="Suchergebnisse" list={filteredAndSortedProducts} />
    </div>
  );
};

export default Produkte;
