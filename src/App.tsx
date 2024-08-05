import type { Component } from "solid-js";

import { Route, Router } from "@solidjs/router";
import Home from "@/pages/Home";
import About from "@/pages/About";

const App: Component = () => {
  return (
    <Router>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
    </Router>
  );
};

export default App;
