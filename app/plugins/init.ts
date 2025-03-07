export default defineNuxtPlugin((nuxtApp) => {
  let host = "";
  // Get host in case of server side request
  if (import.meta.env.SSR) {
    host = nuxtApp?.ssrContext?.event?.req?.headers?.host || "";
  } else {
    host = window.location.host;
  }
  let protocol = "https";
  if (process.env.NODE_ENV === "development") {
    protocol = "http";
  }
  const origin = new URL(`${protocol}://${host}`);
  // Extract origin and set data in app context
  nuxtApp.provide("app_origin", origin.origin);
  nuxtApp.provide("app_hostname", origin.hostname);
});
