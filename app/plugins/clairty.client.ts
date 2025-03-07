import Clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
  Clarity.init("qko0ej55oc");
  console.info("Clarity Initialized");
});
