import { LitElement, h, property, type JsxNode } from "@arcgis/lumina";
import type T9nStrings from "./assets/t9n/hello-world.t9n.en.json";
import { useT9n } from "../../controllers/useT9n";

declare global {
  interface DeclareElements {
    // Declare a custom element with a given tag name
    "arcgis-hello-world": ArcgisHelloWorld;
  }
}

export class ArcgisHelloWorld extends LitElement {
  //#region Public Properties

  @property() name = "World";

  @property() messageOverrides?: typeof this._messages._overrides;

  //#endregion

  //#region Private Properties
  private _messages = useT9n<typeof T9nStrings>();
  //#endregion

  //#region Rendering

  override render(): JsxNode {
    return <calcite-button>{this._messages.hello} {this.name}!</calcite-button>;
  }

  //#endregion
}
