let headerNet, eventsRings, scheduleBirds, historyBirds, sponsorsRings;

// Get the video elements and the overlay element
// JavaScript code for handling video and text animations
const firstVideo = document.getElementById("first-video");
const heroTitle = document.querySelector(".hero-title");
const heroSlogan = document.querySelector(".hero-slogan");
const registerBtn = document.querySelector(".btn");

// Set the animation delay for the text
document.addEventListener("DOMContentLoaded", () => {
  if (heroTitle) {
    heroTitle.style.opacity = "1"; // Show title after 1 second
    heroTitle.classList.add("fadeInUp");
  }

  if (heroSlogan) {
    heroSlogan.style.opacity = "1"; // Show slogan after 1 second
    heroSlogan.classList.add("fadeInUp");
  }

  if (registerBtn) {
    registerBtn.style.opacity = "1"; // Show button after 1.5 seconds
    registerBtn.classList.add("fadeInUp");
  }
}); // 1 second delay

const initializeVanta = (element) => {
  

};

function toggleEvents() {
  const techEvents = document.getElementById("tech-events");
  const nonTechEvents = document.getElementById("non-tech-events");
  const btn = document.getElementById("toggle-btn");

  if (techEvents.style.display !== "none") {
    techEvents.style.display = "none";
    nonTechEvents.style.display = "grid";
    btn.textContent = "Show Tech Events";
  } else {
    techEvents.style.display = "grid";
    nonTechEvents.style.display = "none";
    btn.textContent = "Show Non-Tech Events";
  }
}

function showTechNonTech(department) {
  hideAllEventGrids();
  document.getElementById("department-boxes").style.display = "none";
  document.getElementById("tech-non-tech-events").style.display = "grid";
  // Hide all department-specific event cards initially
  const eventCards = document.querySelectorAll(
    "#tech-non-tech-events .event-card"
  );
  eventCards.forEach((card) => {
    card.style.display = "none";
  });

  // Show only the event cards for the selected department
  const selectedDepartmentCards = document.querySelectorAll(
    `#tech-non-tech-events .event-card[data-department="${department}"]`
  );
  selectedDepartmentCards.forEach((card) => {
    card.style.display = "block";
  });

  showBackButton("tech-non-tech-events");
}

function showEvents(department, type) {
  // Hide all event grids
  hideAllEventGrids();

  let eventGridId = "";

  if (department === "computer" && type === "tech") {
    eventGridId = "computer-tech-events";
  } else if (department === "electrical" && type === "tech") {
    eventGridId = "electrical-tech-events";
  } else if (department === "humanity" && type === "non-tech") {
    eventGridId = "humanity-non-tech-events";
  } else if (department === "civil" && type === "tech") {
    eventGridId = "civil-tech-events";
  } else if (department === "civil" && type === "non-tech") {
    eventGridId = "civil-non-tech-events";
  } else if (department === "mechanical" && type === "tech") {
    eventGridId = "mechanical-tech-events";
  } else if (department === "mechanical" && type === "non-tech") {
    eventGridId = "mechanical-non-tech-events";
  } else if (department === "pharmacy" && type === "non-tech") {
    eventGridId = "pharmacy-non-tech-events";
  } else {
    console.error(
      "No matching event grid found for department:",
      department,
      "and type:",
      type
    );
    return;
  }

  const eventGrid = document.getElementById(eventGridId);
  if (eventGrid) {
    eventGrid.style.display = "grid";
    showBackButton(eventGridId);
  } else {
    console.error("Event grid with ID", eventGridId, "not found.");
  }
}

function showDepartmentBoxes() {
  hideAllEventGrids();
  document.getElementById("tech-non-tech-events").style.display = "none";
  document.getElementById("department-boxes").style.display = "grid";
  hideBackButton();
}

function showBackButton(sectionId) {
  const backButton = document.querySelector(`#${sectionId} .back-button`);
  if (backButton) {
    backButton.style.display = "inline-block";
  }
}

function hideBackButton() {
  const backButtons = document.querySelectorAll(".back-button");
  backButtons.forEach((button) => {
    button.style.display = "none";
  });
}

function hideAllEventGrids() {
  document.getElementById("tech-non-tech-events").style.display = "none";
  document.getElementById("computer-tech-events").style.display = "none";
  document.getElementById("electrical-tech-events").style.display = "none";
  document.getElementById("humanity-non-tech-events").style.display = "none";
  document.getElementById("civil-tech-events").style.display = "none";
  document.getElementById("civil-non-tech-events").style.display = "none";
  document.getElementById("mechanical-tech-events").style.display = "none";
  document.getElementById("mechanical-non-tech-events").style.display = "none";
  document.getElementById("pharmacy-non-tech-events").style.display = "none";
  document.getElementById("department-boxes").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  
});
