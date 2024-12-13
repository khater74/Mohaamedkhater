// Add a new feature to the list
const addFeatureBtn = document.getElementById("add-feature-btn");
const newFeatureInput = document.getElementById("new-feature");
const featuresList = document.getElementById("features-list");

addFeatureBtn.addEventListener("click", () => {
    const feature = newFeatureInput.value.trim();
    if (feature) {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
        newFeatureInput.value = ""; // Clear the input field after adding
    } else {
        alert("Please enter a new feature!");
    }
});
