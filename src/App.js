
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import Heroes from "./components/Heroes";
import Houses from "./components/Houses";


function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <Switch>
         <Route path="/houses" component={Houses}/>
         <Route path="/heroes" component={Heroes}/>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
