import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Photos from "./Pages/Photos";
import notFound from "./Pages/notFound";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Header from "./Organisms/Header";


const App = () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/servicios" exact render={Services} />
      <Route path="/login" exact render={Login} />
      <Route path="/fotos" exact render={Photos} />
      <Route path="/sobremi" exact render={About} />
      <Route path="/notFound" exact render={notFound} />
      <Route path="/" exact render={Home} />
    </Switch>
  </Router>
);

export default App;
