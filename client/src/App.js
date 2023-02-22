import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
