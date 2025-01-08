// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result
function calculateResult() {
    let expression = document.getElementById('display').value;

    // Handle power operation (^) by replacing it with '**'
    expression = expression.replace(/\^/g, '**');

    // Handle square root operation (sqrt) by using Math.sqrt()
    expression = expression.replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');

    // Handle trigonometric functions (sin, cos, tan)
    expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin($1)');
    expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');
    expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan($1)');

    // Handle logarithm (log)
    expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log($1)');

    // Ensure that parentheses are properly closed for valid expressions
    try {
        // Evaluate the mathematical expression using eval
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
