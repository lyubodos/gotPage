
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "../src/components/Home/Home";
import HeroBracket from "./components/HeroBracket/HeroBracket";
import Heroes from "./components/Heroes/Heroes";
import Houses from "./components/Houses/Houses";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <Switch>

         <Route path="/" exact component={Home}/>
         <Route path="/houses" component={Houses}/>
         <Route path="/heroes" exact component={Heroes}/>
         <Route path="/heroes/:id" component={HeroBracket}/>

        </Switch>

        <Footer/>
      </Router>
    </div>
  );
};

export default App;
