let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");
const operationLinks = document.querySelectorAll(".operations a");
const dropdownItems = document.querySelectorAll(".dropdown-item"); // Dropdown items for smaller screens

// Enable or disable dark mode based on user preference
const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

// Initialize dark mode on page load if previously enabled
if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Set the first link as default active on page load for both standard and dropdown links
operationLinks.forEach((link) => link.classList.remove("active"));
operationLinks[0].classList.add("active");

dropdownItems.forEach((item) => item.classList.remove("active"));
dropdownItems[0].classList.add("active");

// Handle active link functionality for larger screens
operationLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove active class from all links
    operationLinks.forEach((link) => link.classList.remove("active"));
    // Add active class to the clicked link
    link.classList.add("active");
    // Store the active link index in localStorage
    localStorage.setItem("activeLinkIndex", index);
  });
});

// Handle active link functionality for dropdown items on smaller screens
dropdownItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Remove active class from all dropdown items
    dropdownItems.forEach((item) => item.classList.remove("active"));
    // Add active class to the clicked dropdown item
    item.classList.add("active");
    // Store the active dropdown item index in localStorage
    localStorage.setItem("activeDropdownIndex", index);
  });
});
