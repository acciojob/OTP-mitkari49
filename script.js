//your JS code here. If required.
let currentInput = document.getElementById('c1');

function handleInput(input) {
  if (input.value.length == 1) {
    currentInput = input.nextElementSibling;
    if (currentInput) {
      currentInput.focus();
      currentInput.select();
    }
  }
}

function handleBackspace(input) {
  if (input.value == "" && input.previousElementSibling) {
    currentInput = input.previousElementSibling;
    currentInput.focus();
    currentInput.select();
  }
}