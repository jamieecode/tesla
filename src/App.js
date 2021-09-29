import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ModelS from "./pages/ModelS";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/models" component={ModelS} />
    </Router>
  );
}

export default App;
