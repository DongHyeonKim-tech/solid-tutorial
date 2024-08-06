import { Component } from "solid-js";
import { createSignal, createEffect } from "solid-js";
import { Switch, Input } from "@suid/material";
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

  return (
    <div>
      <Input
        value={form()?.name}
        placeholder={"이름"}
        onChange={(e: any) => formChangeHandler("name", e.target.value)}
      />
      <Input
        value={form()?.address}
        placeholder={"주소"}
        onChange={(e: any) => formChangeHandler("address", e.target.value)}
      />
      <Input
        value={form()?.age}
        placeholder={"나이"}
        onChange={(e: any) => formChangeHandler("age", e.target.value)}
      />
      <Switch
        value={form()?.isMarried}
        onChange={(e: any, value: boolean) =>
          formChangeHandler("isMarried", value)
        }
      />
    </div>
  );
};

export default BasicForm;
