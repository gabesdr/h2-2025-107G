import {
    initQuiz,
    getCurrentQuestion,
    getCurrentIndex,
    getTotalQuestions,
    canGoNext,
    canGoPrev,
    goNext,
    goPrev
} from "../quiz.js";

export async function renderQuizView(container) {
    const wrapper = document.createElement("section");
    wrapper.className = "quiz-view";

    const title = document.createElement("h1");
    title.textContent = "Spurningar";
    wrapper.appendChild(title);

    const info = document.createElement("p");
    info.className = "quiz-info";
    wrapper.appendChild(info);

    const questionBox = document.createElement("article");
    questionBox.className = "quiz-question";
    wrapper.appendChild(questionBox);

    const controls = document.createElement("div");
    controls.className = "quiz-controls";

    const backBtn = document.createElement("button");
    backBtn.textContent = "Til baka á forsíðu";
    backBtn.addEventListener("click", () => {
        window.location.hash = "#home";
    });

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Fyrri";

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Næsta";

    controls.appendChild(backBtn);
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    wrapper.appendChild(controls);

    const answerBox = document.createElement("div");
    answerBox.className = "quiz-answer";
    const answerText = document.createElement("p");

    const toggleAnswerBtn = document.createElement("button");
    toggleAnswerBtn.textContent = "Sýna svar";

    let answerVisible = false;
    toggleAnswerBtn.addEventListener("click", () => {
        answerVisible = !answerVisible;
        answerBox.style.display = answerVisible ? "block" : "none";
        toggleAnswerBtn.textContent = answerVisible ? "Fela svar" : "Sýna svar";
    });

    answerBox.appendChild(answerText);
    wrapper.appendChild(toggleAnswerBtn);
    wrapper.appendChild(answerBox);

    container.appendChild(wrapper);

    try {
        await initQuiz();
    } catch (err) {
        questionBox.textContent = "Ekki tókst að hlaða spurningum.";
        console.error(err);
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        toggleAnswerBtn.disabled = true;
        return;
    }

    function updateView() {
        answerVisible = false;
        answerBox.style.display = "none";
        toggleAnswerBtn.textContent = "Sýna svar";

        const q = getCurrentQuestion();
        const index = getCurrentIndex();
        const total = getTotalQuestions();

        info.textContent = `Spurning ${index + 1} af ${total}`;
        questionBox.textContent = q.question;
        answerText.textContent = q.answer;

        prevBtn.disabled = !canGoPrev();
        nextBtn.disabled = !canGoNext();
    }


    prevBtn.addEventListener("click", () => {
        goPrev();
        updateView();
    });

    nextBtn.addEventListener("click", () => {
        goNext();
        updateView();
    });

    updateView();
}