
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import Heroes from "./components/Heroes/Heroes";
import Houses from "./components/Houses/Houses";


function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/houses" component={Houses}/>
         <Route path="/heroes" component={Heroes}/>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
