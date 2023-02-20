import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from './components/Home/Home.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
