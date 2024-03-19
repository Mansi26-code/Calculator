let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            const input = e.target.innerHTML;
            if (isValidInput(input)) {
                string += input;
                document.querySelector('input').value = string;
            } else {
                alert("Invalid input");
                // Optionally, you can clear the input or handle the error in a different way
            }
        }
    });
});

function isValidInput(input) {
    // Define the allowed operators
    const operators = ['+', '-', '*', '/','%'];

    // Check if the input is a number or an allowed operator
    if (!isNaN(input) || operators.includes(input)) {
        return true; // Valid input
    } else {
        return false; // Invalid input
    }
}
