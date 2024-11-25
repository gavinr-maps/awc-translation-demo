import { mount } from "@arcgis/lumina-compiler/testing";
import { it, expect } from "vitest";

it("renders without errors", async () => {
  const { el } = await mount("hello-world");

  expect(el.shadowRoot).toMatchInlineSnapshot(`<calcite-button>Hello World!</calcite-button>`);
});
