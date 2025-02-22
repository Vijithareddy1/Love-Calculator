
document.getElementById("calculate").addEventListener("click", function () {
    
    // Get the input values and remove extra spaces (case-insensitive check)
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let message = document.getElementById("message");

    // Check if both names are entered
    if (name1 === "" || name2 === "") {
        result.textContent = "Please enter both names!";
        result.style.color = "red"; // Show error in red color
        message.textContent = "";
        return; // Stop further execution
    }

    let loveScore;

    // Check if any name starts with 'k' or 's'
    let startsWithKS = name1.startsWith("k") || name1.startsWith("s") || name2.startsWith("k") || name2.startsWith("s");

    // Check if any name ends with 'a'
    let endsWithA = name1.endsWith("a") || name2.endsWith("a");

    // If both conditions match (ends with 'a' & starts with 'k'/'s') → Highest priority (94-100)
    if (startsWithKS && endsWithA) {
        loveScore = Math.floor(Math.random() * (100 - 94 + 1)) + 94;
    }
    // If only ends with 'a' → (70-100)
    else if (endsWithA) {
        loveScore = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
    }
    // If only starts with 'k' or 's' → (88-100)
    else if (startsWithKS) {
        loveScore = Math.floor(Math.random() * (100 - 88 + 1)) + 88;
    }
    // Otherwise, generate a random score between 0-100
    else {
        loveScore = Math.floor(Math.random() * 101);
    }

    // Determine message based on score
    let loveMessage;
    if (loveScore > 85) {
        loveMessage = "💞 A match made in heaven! Your love story is nothing short of magical! ✨";
    } else if (loveScore > 70) {
        loveMessage = "❤️ A beautiful connection! Keep nurturing the bond, and magic will follow!";
    } else if (loveScore > 50) {
        loveMessage = "😊 You both have good chemistry! A little effort can make it great!";
    } else if (loveScore > 30) {
        loveMessage = "🤝 A solid friendship is always a great foundation!";
    } else {
        loveMessage = "😅 Love is unpredictable! Maybe destiny has other plans!";
    }

    // Display the love score result and message
    result.textContent = `Love Score: ${loveScore}% ❤️`;
    result.style.color = "#d81b60"; // Set color to dark pink
    message.textContent = loveMessage;
    message.style.color = "#008080"; // Set color to deep purple
});
