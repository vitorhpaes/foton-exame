import './App.css';
import Submenu from './Components/Submenu';
import { NavProvider } from './Contexts/NavigationContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <NavProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
        <Submenu/>
      </NavProvider>
    </div>
  );
}

export default App;
