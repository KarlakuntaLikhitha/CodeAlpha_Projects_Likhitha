const colorDisplay = document.getElementById("generated-color");
const generateBtn = document.getElementById("generate-btn");
const customizeBtn = document.getElementById("customize-btn");
const copyBtn = document.getElementById("copy-btn");
const customColorInput = document.getElementById("custom-color-input");

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the displayed color
function updateColor(color) {
    colorDisplay.textContent = "Generated Color:";
    colorDisplay.style.backgroundColor = color;
    colorDisplay.style.color = color;
}

// Event listener for the "Generate Color" button
generateBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    updateColor(randomColor);
    customColorInput.value = randomColor; // Set the custom input color
});

// Event listener for the "Customize" button
customizeBtn.addEventListener("click", () => {
    const customColor = customColorInput.value;
    if (customColor) {
        updateColor(customColor);
    }
});

// Event listener for the "Copy Color Code" button
copyBtn.addEventListener("click", () => {
    const colorCode = colorDisplay.style.backgroundColor;
    if (colorCode) {
        navigator.clipboard.writeText(colorCode).then(() => {
            alert("Color code copied to clipboard!");
        });
    }
});
