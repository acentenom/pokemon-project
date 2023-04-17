import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
        <Route path="/create-pokemon">
          <CreatePokemon />
        </Route>
      </Switch>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
