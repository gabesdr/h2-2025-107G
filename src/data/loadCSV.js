export async function loadCSVQuestions() {
    try {
        const res = await fetch("/questions.csv");

    if (!res.ok) {
        console.error("CSV fetch failed:", res.status, res.statusText);
        return [];
    }

    const text = await res.text();
    const lines = text.split("\n").filter((l) => l.trim().length > 0);

    const parsed = lines.map((line) => {
        const parts = splitCSV(line);
        return {
            category: parts[1] || "Óflokkað",
            difficulty: parts[2] || "unknown",
            question: parts[4] || "",
            answer: parts[5] || "",
        };
    });

    return parsed.filter((q) => q.question && q.answer);
    } catch (err) {
        console.error("CSV LOADING ERROR:", err);
        return [];
    }
}

function splitCSV(line) {
    const result = [];
    let current = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            insideQuotes = !insideQuotes;
            continue;
        }

        if (char === "," && !insideQuotes) {
            result.push(current.trim());
            current = "";
            continue;
        }

        current += char;
    }
    result.push(current.trim());
    return result;
}