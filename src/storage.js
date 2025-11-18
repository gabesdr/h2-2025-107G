const USER_QUESTIONS_KEY = "quizly-user-questions";
const CURRENT_INDEX_KEY = "quizly-current-index";

export function loadUserQuestions() {
    const raw = localStorage.getItem(USER_QUESTIONS_KEY);
    if (!raw) return [];
    try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function saveUserQuestions(list) {
    localStorage.setItem(USER_QUESTIONS_KEY, JSON.stringify(list));
}

export function loadCurrentIndex() {
    const raw = localStorage.getItem(CURRENT_INDEX_KEY);
    if (!raw) return 0;
    const num = Number(raw);
    if (Number.isNaN(num)) return 0;
    return num;
}

export function saveCurrentIndex(index) {
    localStorage.setItem(CURRENT_INDEX_KEY, String(index));
}