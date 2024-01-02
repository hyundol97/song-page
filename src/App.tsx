import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages/Pages';
import { ROUTES_ARR } from './Routes/Routes';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Pages routes={ROUTES_ARR} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
