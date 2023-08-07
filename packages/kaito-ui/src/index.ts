import { App } from "vue";
import KaButton from "./button/button.vue";
import KaLink from "./link/link.vue";
export default {
  install(app: App) {
    app.component(KaButton.name, KaButton);
    app.component(KaLink.name, KaLink);
  },
};
export { KaButton };
