const postButton = document.getElementById("postTweet");
const tweetInput = document.getElementById("tweetInput");
const timeline = document.getElementById("timeline");

postButton.addEventListener("click", function () {

    const tweetText = tweetInput.value;

    if (tweetText.trim() === "") {
        alert("Tweet cannot be empty");
        return;
    }

    const tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet");

    tweetDiv.innerHTML = `
        <p><strong>@User</strong></p>
        <p>${tweetText}</p>
    `;

    timeline.prepend(tweetDiv);

    tweetInput.value = "";
});
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});
