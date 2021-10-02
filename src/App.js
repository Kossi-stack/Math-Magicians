import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
        {' '}
        <Route path="/quote">
          <Quote />
        </Route>
        {' '}
        <Route
          exact
          path="/"
        >
          <Home />
        </Route>
        {' '}
        <Route path="*">
          <NotMatch />
        </Route>

      </Switch>
    </div>
  </Router>
);

export default App;
