import { App } from "vue";
import KaButton from "./button/Button.vue";
import KaLink from "./link/Link.vue";
import KaList from "./list/List.vue";
import KaListCell from "./list/ListCell.vue";
import KaStep from "./steps/Step.vue";
import KaSteps from "./steps/Steps.vue";
import KaSwitch from "./switch/Switch.vue";
import KaTabItem from "./tabs/TabItem.vue";
import KaTabs from "./tabs/Tabs.vue";
export default {
  install(app: App) {
    app.component(KaButton.name, KaButton);
    app.component(KaLink.name, KaLink);
    app.component(KaTabs.name, KaTabs);
    app.component(KaTabItem.name, KaTabItem);
    app.component(KaList.name, KaList);
    app.component(KaListCell.name, KaListCell);
    app.component(KaSwitch.name, KaSwitch);
    app.component(KaSteps.name, KaSteps);
    app.component(KaStep.name, KaStep);
  },
};
export {
  KaButton,
  KaLink,
  KaList,
  KaListCell,
  KaStep,
  KaSteps,
  KaSwitch,
  KaTabItem,
  KaTabs,
};
