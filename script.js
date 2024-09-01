function handleInput(input) {
  // Move to the next input when a number is entered
  if (input.value.length === 1) {
    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }
}

function handleBackspace(event, input) {
  // Handle backspace key press
  if (event.key === "Backspace" && input.value === "") {
    const previousInput = input.previousElementSibling;
    if (previousInput) {
      previousInput.focus();
    }
  }
}
