let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const operationLinks = document.querySelectorAll(".operations a");

// Enable or disable dark mode based on user preference
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Handle active link functionality
operationLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    // Remove active class from all links
    operationLinks.forEach((link) => link.classList.remove("active"));
    // Add active class to the clicked link
    e.target.classList.add("active");
    // Store the active link index in localStorage
    localStorage.setItem("activeLinkIndex", index);
  });
});

// On page load, set the first link as the default active, ignoring any saved index
operationLinks.forEach((link) => link.classList.remove("active"));
operationLinks[0].classList.add("active");
localStorage.setItem("activeLinkIndex", 0);
