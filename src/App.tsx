import { useState } from 'react';
import ActionPopUpCart from './components/ActionPopUpCard';
import Footer from './components/Footer';
import MovieResult from './components/MovieResult';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import { useAPI } from './hooks/useAPI';
import './index.css';
import MovieType from './types/useMovieTS';

function App() {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const [inputR, setInputR] = useState<string | undefined>();
  const { data, isLoading, isError } = useAPI(searchTerm, inputR);

  const handleSearch = (searchmovie: string, radio: string) => {
    setSearchTerm(searchmovie);
    setInputR(radio);
  };
  return (
    <>
      {data && (
        <>
          <Navbar />
          <SearchArea onSearch={handleSearch} />
          <MovieResult dataMovie={data} />

          <Footer />
        </>
      )}
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error load</p>}
    </>
  );
}

export default App;
