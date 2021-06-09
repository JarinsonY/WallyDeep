import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchResults from './components/SearchResults';
import PicDetailPage from './components/PicDetailPage';
import HomePage from './components/HomePage';

function App() {

  return (
    <div className="App">

      <Router>

        <Switch>

          <Route path='/results/:keyword'>
            <SearchResults />
          </Route>

          <Route path='/pic/:id'>
            <PicDetailPage />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
