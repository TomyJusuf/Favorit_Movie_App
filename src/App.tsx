import ActionPopUpCart from './components/ActionPopUpCard';
import Footer from './components/Footer';
import MovieResult from './components/MovieResult';
import Navbar from './components/Navbar';
import SearchArea from './components/SearchArea';
import './index.css';

function App() {
  return (
    <body className="bg-slate-100 h-[100vh]">
      <Navbar />
      <SearchArea />
      <MovieResult />
      <Footer />
      {/* <ActionPopUpCart /> */}
    </body>
  );
}

export default App;
