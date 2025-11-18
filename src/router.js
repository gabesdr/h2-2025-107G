import { renderHomeView } from "./views/homeView.js";
import { renderQuizView } from "./views/quizView.js";
import { renderCreateView } from "./views/createView.js";
import { renderListView } from "./views/listView.js";

function getPageFromHash() {
    const { hash } = window.location;
    if (!hash) return "home";
    return hash.replace("#", "");
}

export function initRouter(appElement) {
    function render() {
        const page = getPageFromHash();
        appElement.innerHTML = "";

        if (page === "quiz") {
        renderQuizView(appElement);
        } else if (page === "create") {
        renderCreateView(appElement);
        } else if (page === "list") {
        renderListView(appElement);
        } else {
        renderHomeView(appElement);
        }
    }

    window.addEventListener("hashchange", render);
    render();
}