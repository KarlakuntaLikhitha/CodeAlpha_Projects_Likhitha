function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const scale = document.getElementById("scale").value;
    let result = 0;

    if (scale === "celsius") {
        result = (temperatureInput - 32) * (5 / 9);
    } else if (scale === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (scale === "kelvin") {
        result = temperatureInput + 273.15;
    }

    document.getElementById("resultValue").textContent = result.toFixed(2);
}
