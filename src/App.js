import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavProvider } from './Contexts/NavigationContext';
import { BookProvider } from './Contexts/BooksContext';
import Home from './Pages/Home';
import Book from './Pages/Book';
import Submenu from './Components/Submenu';

function App() {
  return (
    <div className="App">
      <NavProvider>
        <BookProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/book/:id" component={Book}></Route>
            </Switch>
          </Router>
          <Submenu />
        </BookProvider>
      </NavProvider>
    </div>
  );
}

export default App;
