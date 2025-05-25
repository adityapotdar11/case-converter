// Case conversion functions
const convertCases = {
    sentence: (text) => {
        if (!text) return "";
        return text
            .toLowerCase()
            .split(".")
            .map((sent) => {
                sent = sent.trim();
                return sent.charAt(0).toUpperCase() + sent.slice(1);
            })
            .join(". ");
        // return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
    lower: (text) => text.toLowerCase(),
    upper: (text) => text.toUpperCase(),
    capitalized: (text) =>
        text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
    title: (text) =>
        text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
};

// DOM elements
const inputText = document.getElementById("inputText");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// Event handlers
document.querySelectorAll("[data-case]").forEach((button) => {
    button.addEventListener("click", () => {
        const caseType = button.dataset.case;
        inputText.value = convertCases[caseType](inputText.value);
    });
});

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(inputText.value);
        alert("Text copied to clipboard!");
    } catch (err) {
        alert("Failed to copy text");
    }
});

clearBtn.addEventListener("click", () => {
    inputText.value = "";
    inputText.focus();
});

// Initialize focus on textarea
inputText.focus();

feather.replace();
