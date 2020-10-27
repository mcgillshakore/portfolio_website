import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
// import About from "./components/About"
// import Portfolio from "./components/Portfolio"
// import Contact from "./components/Contact"
// import Blog from "./components/Blog"
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
    </div>
  );
}

export default App;
