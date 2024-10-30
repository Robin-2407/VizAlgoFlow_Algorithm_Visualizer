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

// Load header when page loads
document.addEventListener("DOMContentLoaded", loadHeader);
