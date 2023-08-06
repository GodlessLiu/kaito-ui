import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    kaButton: typeof components.KaButton;
  }
}
export {};
