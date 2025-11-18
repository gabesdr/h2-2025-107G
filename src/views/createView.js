import { loadUserQuestions, saveUserQuestions } from "../storage.js";

export function renderCreateView(container) {
  const wrapper = document.createElement("section");
  wrapper.className = "create-view";

  const title = document.createElement("h1");
  title.textContent = "Búa til spurningu";
  wrapper.appendChild(title);

  const backBtn = document.createElement("button");
  backBtn.type = "button";
  backBtn.textContent = "Til baka á forsíðu";
  backBtn.addEventListener("click", () => {
    window.location.hash = "#home";
  });
  wrapper.appendChild(backBtn);

  const form = document.createElement("form");
  form.className = "question-form";

  form.innerHTML = `
    <label>
      Spurning
      <textarea name="question" required rows="2"></textarea>
    </label>

    <label>
      Svar
      <textarea name="answer" required rows="2"></textarea>
    </label>

    <label>
      Flokkur (1 = Almenn kunnátta, 2 =	Náttúra og vísindi, 3 =	Bókmenntir og listir, 4 =	Saga, 5 =	Landafræði, 6 =	Skemmtun og afþreying, 7 = Íþróttir og tómstundir)
      <input name="categoryId" type="number" min="1" max="7" required />
    </label>

    <label>
      Undirflokkur (valfrjálst)
      <input name="subcategory" placeholder="t.d. Tónlist - Rokk" />
    </label>

    <label>
      Erfiðleikastig (1 = létt, 2 = meðal, 3 = erfið)
      <input name="difficulty" type="number" min="1" max="3" required />
    </label>

    <label>
      Gæðastig (Hversu góð er spurningin?: 1–3)
      <input name="quality" type="number" min="1" max="3" />
    </label>

    <button type="submit">Vista spurningu</button>
    <p class="form-message" aria-live="polite"></p>
  `;

  const message = form.querySelector(".form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fd = new FormData(form);

    const question = fd.get("question").toString().trim();
    const answer = fd.get("answer").toString().trim();
    const categoryId = Number(fd.get("categoryId"));
    const subcategory = fd.get("subcategory").toString().trim() || "";
    const difficulty = Number(fd.get("difficulty"));
    const qualityRaw = fd.get("quality").toString().trim();
    const quality = qualityRaw ? Number(qualityRaw) : null;

    if (!question || !answer) {
      message.textContent = "Spurning og svar þurfa að vera fyllt út.";
      return;
    }

    if (categoryId < 1 || categoryId > 7) {
      message.textContent = "Flokkur verður að vera tala 1-7.";
      return;
    }

    if (difficulty < 1 || difficulty > 3) {
      message.textContent = "Erfiðleikastig verður að vera tala 1-3.";
      return;
    }

    const current = loadUserQuestions();

    const newQuestion = {
      id: `user-${Date.now()}`,
      categoryId,
      subcategory,
      difficulty,
      quality,
      question,
      answer,
    };

    current.push(newQuestion);
    saveUserQuestions(current);

    form.reset();
    message.textContent = "Spurning vistuð!";
  });

  wrapper.appendChild(form);
  container.appendChild(wrapper);
}