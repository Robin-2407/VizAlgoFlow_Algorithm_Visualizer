async function loadHeader() {
  try {
    const response = await fetch("/components/header.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    document.getElementById("header-placeholder").innerHTML = content;

    // After loading header content, load and execute header.js
    const headerScript = document.createElement("script");
    headerScript.src = "/scripts/components/header.js";
    document.body.appendChild(headerScript);
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

async function loadFooter() {
  try {
    const response = await fetch("/components/footer.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    document.getElementById("footer-placeholder").innerHTML = content;

    // No footer.js, so we don't need to load any additional script
  } catch (error) {
    console.error("Error loading footer:", error);
  }
}

// Load header and footer when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});
