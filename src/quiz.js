import { loadCSVQuestions } from "./data/loadCSV.js";
import {
    loadUserQuestions,
    saveCurrentIndex
} from "./storage.js";

let allQuestionsOrdered = [];
let questions = [];
let currentIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export async function initQuiz() {
    const csv = await loadCSVQuestions();
    const user = loadUserQuestions();

    allQuestionsOrdered = [...csv, ...user];

    if (allQuestionsOrdered.length === 0) {
        throw new Error("Engar spurningar tiltækar.");
    }

    questions = [...allQuestionsOrdered];
    shuffleArray(questions);

    currentIndex = 0;
    saveCurrentIndex(0);
    }

    export function getCurrentQuestion() {
    return questions[currentIndex];
    }

    export function getTotalQuestions() {
    return questions.length;
    }

    export function getCurrentIndex() {
    return currentIndex;
    }

    export function canGoPrev() {
    return currentIndex > 0;
    }

    export function canGoNext() {
    return currentIndex < questions.length - 1;
    }

    export function goPrev() {
    if (canGoPrev()) {
        currentIndex--;
        saveCurrentIndex(currentIndex);
    }
    }

    export function goNext() {
    if (canGoNext()) {
        currentIndex++;
        saveCurrentIndex(currentIndex);
    }
    }

    export function getAllQuestionsOrdered() {
    return [...allQuestionsOrdered];
}