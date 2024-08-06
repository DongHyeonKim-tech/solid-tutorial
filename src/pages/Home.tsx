import { Component, createEffect } from "solid-js";
import logo from "@/logo.svg";
import styles from "@/App.module.css";
import { A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { MenuStateType } from "@/utils/state";
import { useMenuStore } from "@/utils/store";

const Home: Component = () => {
  const [count, setCount] = createSignal<number>(0);

  const { arrMenu, isLoading, error, getMenuList } = useMenuStore(
    (state: MenuStateType) => ({
      arrMenu: state.data,
      isLoading: state.isLoading,
      error: state.error,
      getMenuList: state.fetchData,
    })
  );

  createEffect(() => {
    getMenuList();
  });

  createEffect(() => {
    console.log("arrMenu: ", arrMenu);
  }, [arrMenu]);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <button onClick={() => setCount((prev: number) => prev + 1)}>
          Count: {count()}
        </button>
        <button onClick={() => console.log("arrMenu: ", arrMenu)}>Menu</button>
        {arrMenu.map((item: any) => {
          return <div>{item.name}</div>;
        })}
        <nav>
          <A href={"/about"}>About</A>
        </nav>
      </header>
    </div>
  );
};

export default Home;
