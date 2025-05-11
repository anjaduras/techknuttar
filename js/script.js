const languages = [
  { code: "german", flag: "🇩🇪" },
  { code: "english", flag: "🇬🇧" },
  { code: "ukrainian", flag: "🇺🇦" }
];

let currentLangIndex = 2;

function cycleLanguage() {
  currentLangIndex = (currentLangIndex + 1) % languages.length;
  const lang = languages[currentLangIndex];
  const langBtn = document.getElementById("language-toggle");
  langBtn.textContent = lang.flag;
  const fakeEvent = { currentTarget: langBtn };
  openTab(fakeEvent, lang.code);
}

function openTab(evt, tabName) {
  const tabs = document.getElementsByClassName("content-tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add("active");
  }

  // Optional: only highlight button if tab elements exist
  if (evt && evt.currentTarget) {
    const tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");
  }
  updateHeaderPhrase(tabName);
}

function updateHeaderPhrase(langCode) {
  const phraseIds = {
    german: "phrase-de",
    english: "phrase-en",
    ukrainian: "phrase-ua"
  };

  for (const code in phraseIds) {
    const phraseElement = document.getElementById(phraseIds[code]);
    if (phraseElement) {
      phraseElement.style.display = (code === langCode) ? "block" : "none";
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Set initial language to German
  currentLangIndex = 0;
  const langBtn = document.getElementById("language-toggle");
  langBtn.textContent = languages[currentLangIndex].flag;
  openTab({ currentTarget: langBtn }, languages[currentLangIndex].code);
});

  // Darkmode
  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      document.getElementById("theme-toggle").textContent = "🌙";
    }
  };
  
  function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById("theme-toggle");
    const isDark = body.classList.toggle("dark-mode");
  
    icon.textContent = isDark ? "🌙" : "🌞";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  
 
  