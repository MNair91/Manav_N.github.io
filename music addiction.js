// music-addiction.js

// Simulated "listening time" counter (in minutes)
let listeningTime = 0;

// Threshold (in minutes) after which a warning appears
const addictionThreshold = 180; // 3 hours

// Function to simulate listening time increasing
function simulateListening() {
    listeningTime += 15; // simulate 15 minutes passing
    console.log(`You've been listening for ${listeningTime} minutes.`);
    
    const timeDisplay = document.getElementById("timeDisplay");
    if (timeDisplay) {
        timeDisplay.textContent = `Listening Time: ${listeningTime} minutes`;
    }

    if (listeningTime >= addictionThreshold) {
        showWarning();
    }
}

// Function to toggle tips on healthy music habits
function toggleTips() {
    const tips = document.getElementById("healthyTips");
    if (tips.style.display === "none" || tips.style.display === "") {
        tips.style.display = "block";
    } else {
        tips.style.display = "none";
    }
}


// Automatically simulate listening time every 5 seconds (for demo)
setInterval(simulateListening, 5000);

// Add toggle button behavior (make sure a button with id "toggleTipsBtn" exists in HTML)
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggleTipsBtn");
    if (btn) {
        btn.addEventListener("click", toggleTips);
    }

    const myBtn = document.getElementById("myButton");
    if (myBtn) {
        myBtn.addEventListener("click", function() {
            alert("Clicked the button!");
        });
    }
});