import Clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === "development") {
    console.info("Clarity disabled in development mode");
  } else {
    Clarity.init("qko0ej55oc");
    console.info("Clarity Initialized");
  }
});
