import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HeaderApp from './components/HeaderApp';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {

  return (
    <div className="App">

      <Router>
        <div>
          <HeaderApp />
        </div>
        <div>
          <SearchBar />
        </div>

        <hr />

        <Switch>
          <Route path='/results/:keyword'>
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
