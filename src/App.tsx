import Pages from './Pages/Pages';
import { ROUTES_ARR } from './Routes/Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pages routes={ROUTES_ARR} />
    </div>
  );
}

export default App;
