export function renderHomeView(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "home";

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";

    const h1 = document.createElement("h1");
    h1.textContent = "Quizly!";
    titleContainer.appendChild(h1);

    const separator = document.createElement("div");
    separator.className = "title-separator";
    separator.setAttribute("role", "separator");

    const desc = document.createElement("section");
    desc.className = "desc";

    const h2 = document.createElement("h2");
    h2.textContent = "Spurningarleikur fyrir góða stemmingu!";
    desc.appendChild(h2);

    const p = document.createElement("p");
    p.textContent =
        "Búðu til þínar eigin spurningar eða skoðaðu þær sem eru í boði. " +
        "Ýttu á byrja leik þegar þú ert tilbúin(n) að spila!";
    desc.appendChild(p);

    const sectionsWrapper = document.createElement("div");
    sectionsWrapper.className = "sections-wrapper";

    function createCard(title, text, buttonText, onClick) {
        const card = document.createElement("article");
        card.className = "section-card";

        const h3 = document.createElement("h3");
        h3.textContent = title;
        card.appendChild(h3);

        const cp = document.createElement("p");
        cp.innerHTML = text;
        card.appendChild(cp);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = buttonText;
        btn.addEventListener("click", onClick);
        card.appendChild(btn);

        return card;
    }

    const card1 = createCard(
        "Section 1",
        "Búa til spurningar!<br>Smelltu hér til að búa til þínar eigin spurningar!",
        "Búa til spurningar",
        () => {
        window.location.hash = "#create";
        },
    );

    const card2 = createCard(
        "Section 2",
        "Byrja leik!<br>Prófaðu þekkinguna þína með spurningum úr bankanum.",
        "Byrja leik",
        () => {
        window.location.hash = "#quiz";
        },
    );

    const card3 = createCard(
        "Section 3",
        "Skoða spurningar!<br>Skoðaðu allar spurningar í bankanum.",
        "Skoða spurningar",
        () => {
        window.location.hash = "#list";
        },
    );

    sectionsWrapper.appendChild(card1);
    sectionsWrapper.appendChild(card2);
    sectionsWrapper.appendChild(card3);

    const footer = document.createElement("footer");
    const fp = document.createElement("p");
    fp.textContent = "Gert af Gabríel del Rosario, Gabriel Óðinn Schurack, Alans Trejis og Sigurði Óla Guðjónssyni";
    footer.appendChild(fp);

    wrapper.appendChild(titleContainer);
    wrapper.appendChild(separator);
    wrapper.appendChild(desc);
    wrapper.appendChild(sectionsWrapper);
    wrapper.appendChild(footer);

    container.appendChild(wrapper);
}