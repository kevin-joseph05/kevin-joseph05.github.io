// --- THEME SWITCHER ---
const themeSwitcher = document.getElementById("theme-switcher");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
}

themeSwitcher.addEventListener("click", () => {
  let currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    body.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});


// --- PROJECTS ---
const projects = [
  {
    title: "Prove It! - EmberHacks Winner",
    desc: "Built an award-winning tool to help university students learn how to write mathematical proofs in introductory proof-based courses, featuring an interactive UI and AI tutor.",
    link: "https://devpost.com/software/prove-it"
  },
  {
    title: "Parka - SpurHacks",
    desc: "Developed a real-time parking tool that helps users identify open parking spaces from images, featuring a computer vision pipeline and an interactive map interface.",
    link: "https://devpost.com/software/parka-kztqej"
  },
  {
    title: "TalkBox - DeerHacks",
    desc: "Designed a real-time voice-to-text translation tool for online calls using Whisper and DeepL for live multilingual captions.",
    link: "https://devpost.com/software/talkbox-jp84ev"
  },
  {
    title: "Hangman Game",
    desc: "Developed a Java-based multiplayer Hangman game with real-time WebSocket sync, Firebase live leaderboards, and a dynamic UI, boosting engagement and reducing player wait times.",
    link: "https://github.com/jxlin25/CSC207-Hangman"
  },
  {
    title: "McDonald's Scheduler",
    desc: "Developed a Python job scheduler that extracts weekly shift details from email and automatically adds them to Google Calendar; containerized with Docker and configured to run weekly via Anacron.",
    link: "https://github.com/kevin-joseph05/mcdonalds-scheduler"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  let content = `<h3>${p.title}</h3><p>${p.desc}</p>`;
  if (p.link) {
    content += `<a href="${p.link}" target="_blank">View on DevPost/GitHub</a>`;
  }
  
  projectDiv.innerHTML = content;
  container.appendChild(projectDiv);
});
