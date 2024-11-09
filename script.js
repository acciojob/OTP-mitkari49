document.addEventListener("DOMContentLoaded", () => {
    const codes = document.querySelectorAll(".code");

    codes.forEach((code, index) => {
        code.addEventListener("input", (e) => {
            // Move to the next input if a number is entered
            if (e.target.value.length === 1) {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }
        });

        code.addEventListener("keydown", (e) => {
            // Move to the previous input on backspace if the current input is empty
            if (e.key === "Backspace" && e.target.value === "") {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }
        });
    });
});
