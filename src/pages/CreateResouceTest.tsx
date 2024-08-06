import { Component } from "solid-js";
import client from "@/utils/client";
import { createResource, For } from "solid-js";

const CreateResouceTest: Component = () => {
  const [menus] = createResource(async () => {
    const response = await client.get("bim-mng/menu-list");
    return await response.data;
  });
  return (
    <div>
      Test
      <div>
        <For each={menus()}>{(menu) => <li>{menu.name}</li>}</For>
      </div>
    </div>
  );
};

export default CreateResouceTest;
