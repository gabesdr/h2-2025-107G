# Vefforritun 1, 2025, hópverkefni 2!

- https://youtu.be/zlwHg9kDPZs

## Hópur

- Verkefnastjóri (JS/HTML)
  Gabríel del Rosario – gdr5@hi.is – github.com/gabesdr

- Aðal UI/UX-Forritari (CSS/HTML)
  Gabriel Óðinn Schurack – gos30@hi.is – github.com/GabrielSchurack07

- HTML-Forritari (HTML)
  Alans Trejis – alt@hi.is – github.com/ThaBlanky

- HTML/CSS Forritari (CSS/HTML)
  Sigurður Óli Guðjónsson – sog70@hi.is – github.com/Sjolidos

------------------------------------------------------------

## Verkefnalýsing

Verkefnið felst í því að útbúa vef sem leyfir að búa til og velja spurningar
og birta þær í barsvar (pubquiz) formi.  
Allt efni á vefnum er búið til með JavaScript við keyrslu.

------------------------------------------------------------

## Lýsing á verkefni

Verkefnið er skipt í eftirfarandi möppur:

src/       → JavaScript, router, views, CSV, localStorage  
styles/    → SCSS skipting (reset, global, home, quiz, create etc.)  
public/    → questions.csv

Til að keyra verkefnið:

npm install  
npm run dev  
npm start  

Lint:

npm run lint:css  
npm run lint:js  

Helstu ignore skrár í rót:
.gitignore  
.stylelintignore  

------------------------------------------------------------

## Efni

Vefsíðan er gerð samkvæmt verkefnalýsingu Hópverkefnis 2.

Forsíðan er hönnuð eftir eigin Figma-concept.  
Allt UI er skrifað í SCSS og birt með JS.

Spurningar eru:
- hlaðnar úr CSV með loadCSVQuestions()
- vistaðar í localStorage með storage.js
- yfir 11.000 samtals
- nýjar spurningar birtast neðst (ekki random)
- þegar leikur er byrjaður er röðun random (shuffle)
- currentIndex vistað í localStorage

------------------------------------------------------------

## Útfærð virkni

### Grunvirkni

• Birta eina spurningu í einu  
• Næsta / Fyrri takkar  
• Router (hash) heldur stöðu við refresh  
• Haus + valmynd + fótur á forsíðu
• Útlit skalanlegt 450px–1600px  

### Önnur virkni

Vista stöðu í localStorage (currentIndex)

Búa til nýjar spurningar + vista í localStorage (telst sem 2 verkefni)  

Metadata fyrir spurningu: flokkur, erfiðleikastig  

Hlaða inn 11k+ spurningum úr CSV  

Random shuffle í QuizView (Gert fyrir gamanið)

------------------------------------------------------------

## Gögn

Spurningar koma frá:

github.com/sveinn-steinarsson/is-trivia-questions

CSV inniheldur:
flokkur  
undirflokkur  
erfiðleikastig  
gæðastig  
spurning  
svar  

Við umbreyttum CSV yfir í JS með loadCSVQuestions()

------------------------------------------------------------

## Útgáfa

Útgáfa: 1.0

------------------------------------------------------------

## Útgáfusaga

| Útgáfa | Lýsing |
|-------|------------------------------------------------|
| 0.1   | Fyrsta útgáfa verkefnisins                     |
| 0.2   | Framework sett upp og concept útbúið í Figma   |
| 0.3   | Concept Branch                                 |
| 1.0   | Final                                          |
