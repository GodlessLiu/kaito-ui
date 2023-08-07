import { App } from "vue";
import KaButton from "./button/button.vue";
import KaLink from "./link/link.vue";
import KaTabItem from "./tabs/tabItem.vue";
import KaTabs from "./tabs/tabs.vue";
export default {
  install(app: App) {
    app.component(KaButton.name, KaButton);
    app.component(KaLink.name, KaLink);
    app.component(KaTabs.name, KaTabs);
    app.component(KaTabItem.name, KaTabItem);
  },
};
export { KaButton, KaLink, KaTabItem, KaTabs };
