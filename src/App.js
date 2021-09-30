import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/models" component={ModelS} />
      <Route path="/model3" component={Model3} />
      <Route path="/modelx" component={ModelX} />
      <Route path="/modely" component={ModelY} />
    </Router>
  );
}

export default App;
