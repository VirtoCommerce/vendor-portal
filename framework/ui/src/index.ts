import { App } from "vue";
import * as components from "./components";
import * as directives from "./directives";

import "./styles/index.less";

export default {
  install(app: App): void {
    // Register exported components
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });

    // Register exported directives
    Object.entries(directives).forEach(([directiveName, directive]) => {
      app.directive(directiveName, directive);
    });
  },
};

export * from "./components";
