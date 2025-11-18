import { initQuiz, getAllQuestionsOrdered } from "../quiz.js";

export async function renderListView(container) {
    const wrapper = document.createElement("section");
    wrapper.className = "list-view";

    const title = document.createElement("h1");
    title.textContent = "Spurningarbanki";
    wrapper.appendChild(title);

    const backBtn = document.createElement("button");
    backBtn.textContent = "Til baka á forsíðu";
    backBtn.addEventListener("click", () => {
        window.location.hash = "#home";
    });
    wrapper.appendChild(backBtn);

    const list = document.createElement("ul");
    list.className = "question-list";
    wrapper.appendChild(list);

    container.appendChild(wrapper);

    try {
        await initQuiz();
    } catch (err) {
        const p = document.createElement("p");
        p.textContent = "Ekki tókst að hlaða spurningum.";
        wrapper.appendChild(p);
        console.error(err);
        return;
    }

    const all = getAllQuestionsOrdered();

    all.forEach((q, index) => {
        const li = document.createElement("li");
        li.className = "question-list-item";

        const titleSpan = document.createElement("span");
        titleSpan.className = "question-list-title";
        titleSpan.textContent = `${index + 1}. ${q.question}`;

        const meta = document.createElement("span");
        meta.className = "question-list-meta";
        meta.textContent = `(${q.category || "Óflokkað"} – ${q.difficulty || "?"})`;

        li.appendChild(titleSpan);
        li.appendChild(meta);
        list.appendChild(li);
    });
}