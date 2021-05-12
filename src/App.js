import logo from './logo.svg';
import './App.css';
import {Router, Link} from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        {
          //id parameter (prop) isNan()? display number page
          //: display
        }
      <Home path="/home"/>
      <Number path="/:num"></Number>
      <Number path ="/:num/:color1/:color2"></Number>
      </Router>
    </div>
  );
}

export default App;
