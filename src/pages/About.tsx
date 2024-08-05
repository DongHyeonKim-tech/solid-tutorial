import { Component } from "solid-js";
import { A } from "@solidjs/router";

const About: Component = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <nav>
        <A href={"/"}>Home</A>
      </nav>
    </div>
  );
};

export default About;
