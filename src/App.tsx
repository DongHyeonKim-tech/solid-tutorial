import type { Component } from "solid-js";

import { Route, Router } from "@solidjs/router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import CreateResouceTest from "@/pages/CreateResouceTest";

const App: Component = () => {
  return (
    <Router>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/create-resource-test"} component={CreateResouceTest} />
    </Router>
  );
};

export default App;
