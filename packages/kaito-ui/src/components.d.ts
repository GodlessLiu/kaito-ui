import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    kaButton: typeof components.KaButton;
    KaLink: typeof components.KaLink;
    KaTags: typeof components.KaTabs;
  }
}
export {};
