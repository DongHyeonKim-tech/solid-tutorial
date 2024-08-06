import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import BasicForm from "@/components/about/BasicForm";
import { MenuStateType } from "@/utils/state";
import { useMenuStore } from "@/utils/store";

interface Family {
  key: number;
  name: string;
  relation: number;
}

interface Form {
  key: number;
  name: string;
  address?: string;
  age: number;
  isMarried: boolean;
  family?: Family[];
}

const About: Component = () => {
  const [form, setForm] = createSignal<Form>({
    key: 1,
    name: "",
    age: 0,
    isMarried: false,
  });

  const { arrMenu } = useMenuStore((state: MenuStateType) => ({
    arrMenu: state.data,
  }));

  createEffect(() => {
    console.log("arrMenu about: ", arrMenu);
  });

  createEffect(() => {
    console.log("form: ", form());
  });

  return (
    <div>
      <h1>ABOUT</h1>
      <BasicForm />
      <nav>
        <A href={"/"}>Home</A>
      </nav>
    </div>
  );
};

export default About;
