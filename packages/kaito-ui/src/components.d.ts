import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    kaButton: typeof components.KaButton;
    KaLink: typeof components.KaLink;
    KaTabs: typeof components.KaTabs;
    KaTabItem: typeof components.KaTabItem;
    KaList: typeof components.KaList;
  }
}
export {};
