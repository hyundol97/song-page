import Pages from './Pages/Pages';
import { ROUTES_ARR } from './Routes/Routes';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Pages routes={ROUTES_ARR} />
      <Footer />
    </div>
  );
}

export default App;
