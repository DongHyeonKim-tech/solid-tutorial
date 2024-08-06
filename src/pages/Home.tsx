import { Component } from "solid-js";
import logo from "@/logo.svg";
import styles from "@/App.module.css";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

const Home: Component = () => {
  const [count, setCount] = createSignal<number>(0);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <button onClick={() => setCount((prev: number) => prev + 1)}>
          Count: {count()}
        </button>
        <nav>
          <A href={"/about"}>About</A>
        </nav>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!!
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default Home;
