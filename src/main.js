import "../styles/styles.scss";
import { initRouter } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    initRouter(app);
});