import { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import client from "@/utils/client";

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

const BasicForm = () => {
  const [form, setForm] = createSignal<Form>({
    key: 1,
    name: "",
    age: 0,
    isMarried: false,
  });

  const [menu, setMenu] = createSignal();

  const formChangeHandler = (
    name: string,
    value: string | number | boolean
  ) => {
    setForm((prev: Form) => {
      return { ...prev, [name]: value };
    });
  };

  createEffect(() => {
    console.log("form: ", form());
  });

  createEffect(() => {
    console.log("menu: ", menu());
  });

  return (
    <div>
      <input
        value={form()?.name}
        placeholder={"이름"}
        onChange={(e: any) => formChangeHandler("name", e.target.value)}
      />
      <input
        value={form()?.address}
        placeholder={"주소"}
        onChange={(e: any) => formChangeHandler("address", e.target.value)}
      />
      <input
        value={form()?.age}
        placeholder={"나이"}
        onChange={(e: any) => formChangeHandler("age", e.target.value)}
      />
      {/* <Switch
        value={form()?.isMarried}
        placeholder={"기혼여부"}
        onChange={(value: boolean) => formChangeHandler("isMarried", value)}
      /> */}
      <button
        onClick={() => {
          client.get("bim-mng/menu-list").then((res) => {
            console.log("res: ", res);
            setMenu(res.data);
          });
        }}
      >
        호출
      </button>
    </div>
  );
};

export default BasicForm;
