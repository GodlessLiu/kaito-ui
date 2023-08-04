import { App } from "vue";
import KaButton from "./button/button.vue";
export default {
  install(app: App) {
    app.component("kaButton", KaButton);
  },
};
export { KaButton };
