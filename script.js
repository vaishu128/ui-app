// Function to toggle the appliance ON/OFF
function toggleAppliance(button) {
    if (button.innerText === "ON") {
        button.innerText = "OFF";
        button.classList.add("active");
    } else {
        button.innerText = "ON";
        button.classList.remove("active");
    }
}

// Event listeners for each appliance's toggle button
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        toggleAppliance(this);
    });
});

// Optional: Update the UI based on input ranges
document.getElementById('fan-speed').addEventListener('input', function() {
    console.log('Fan speed set to:', this.value);
});

document.getElementById('ac-temp').addEventListener('input', function() {
    console.log('AC temperature set to:', this.value);
});

document.getElementById('light-brightness').addEventListener('input', function() {
    console.log('Light brightness set to:', this.value);
});

document.getElementById('light-color').addEventListener('input', function() {
    console.log('Light color set to:', this.value);
});
