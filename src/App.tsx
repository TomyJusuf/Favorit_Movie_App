import Footer from './components/Footer';
import MovieResult from './components/MovieResult';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import './index.css';

function App() {
  return (
    <body className="bg-slate-100">
      <Navbar />
      <SearchArea />
      <MovieResult />
      <Footer />
    </body>
  );
}

export default App;
