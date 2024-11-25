import { defineConfig } from "vite";
import { useLumina } from "@arcgis/lumina-compiler";

export default defineConfig({
  plugins: [
    useLumina({
      build: {
        wrappers: [
          // To enable wrappers, follow the wrappers documentation:
          // https://qawebgis.esri.com/arcgis-components/lumina/build#buildwrappers
          /*{
            type: "react18",
            proxiesFile: "../lumina-components-react/src/components.ts",
          },*/
        ],
      },
      documentation: {
        getComponentDocsUrl: (tag) =>
          `https://developers.arcgis.com/javascript/latest/components/storybook/?path=/docs/map-components_component-${tag}--docs`,
        getComponentDemoUrl: (tag) =>
          `https://developers.arcgis.com/javascript/latest/components/storybook/?path=/story/map-components_component-reference-${tag}--${tag}`,
      },
      css: {
        // Provide styles that apply to the entire page (i.e. declare CSS variables):
        globalStylesPath: "src/styles/global.css",
        commonStylesPath: "src/styles/common.css",
      },
    }),
  ],
  /*
   * While useLumina() pre-configures everything for you, you can still
   * provide any Vite, Vitest, ESBuild or Rollup configuration option. See:
   * - https://vitejs.dev/config/
   * - https://vitest.dev/config/
   */
});
