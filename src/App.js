import logo from './logo.svg';
import './App.css';
import Hearer from './Componant/Header';
import Body from './Componant/Body';
import Cassis from './Componant/Cassis';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link,
} from "react-router-dom";

function App() {
  return (

    <Router>    
      <div className="App">
     <Hearer />
     <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cassis" element={<Cassis />} />
        </Routes>
    </div>
    </Router>

  );
}

export default App;
