
const tips = [
    "Turn off lights when you leave a room.",
    "Use reusable bags instead of plastic bags.",
    "Walk, bike, or use public transport instead of driving.",
    "Reduce your meat consumption.",
    "Plant a tree.",
    "Use a reusable water bottle.",
    "Unplug electronics when not in use.",
    "Compost your food scraps.",
    "Fix leaky faucets.",
    "Use energy-efficient appliances."
];

const tipElement = document.getElementById("tip-of-the-day");
const newTipBtn = document.getElementById("new-tip-btn");

function getNewTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = tips[randomIndex];
}

newTipBtn.addEventListener("click", getNewTip);

// Display a random tip on page load
getNewTip();
