import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    kaButton: typeof components.KaButton;
    KaLink: typeof components.KaLink;
    KaTabs: typeof components.KaTabs;
    KaTabItem: typeof components.KaTabItem;
    KaList: typeof components.KaList;
    KaListCell: typeof components.KaListCell;
    KaSwitch: typeof components.KaSwitch;
    KaStep: typeof components.KaStep;
    KaSteps: typeof components.KaSteps;
  }
}
export {};
