document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.setAttribute("id", `code-${index + 1}`); // Set unique IDs like code-1, code-2, etc.

        code.addEventListener("input", (e) => {
            if (e.target.value.length === 1) {
                setTimeout(() => { // Add a slight delay to ensure focus shift is caught by Cypress
                    if (index < codes.length - 1) {
                        codes[index + 1].focus();
                    }
                }, 50);
            }
        });

        code.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && e.target.value === "") {
                setTimeout(() => {
                    if (index > 0) {
                        codes[index - 1].focus();
                    }
                }, 50);
            }
        });
    });

    // Autofocus on the first input field for a better user experience
    codes[0].focus();
});
