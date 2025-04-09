import { useState, useEffect } from 'react';
import RickAndMortyCard from '../components/CardRickAndMorty'; 

const RickAndMorty = () => {
  const apiUrl = 'https://rickandmortyapi.com/api/character';  

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCharacters(data.results);  
    } catch (error) {
      console.error('Error obtienido resultados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []); 

  return (
    <div>
      <h1 className="text-center text-2xl">Rick and Morty Characters</h1>

      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <RickAndMortyCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RickAndMorty;
