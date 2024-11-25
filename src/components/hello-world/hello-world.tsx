import { LitElement, h, property, type JsxNode } from "@arcgis/lumina";

declare global {
  interface DeclareElements {
    // Declare a custom element with a given tag name
    "arcgis-hello-world": ArcgisHelloWorld;
  }
}

export class ArcgisHelloWorld extends LitElement {
  //#region Public Properties

  @property() name = "World";

  //#endregion

  //#region Rendering

  override render(): JsxNode {
    return <calcite-button>Hello {this.name}!</calcite-button>;
  }

  //#endregion
}
