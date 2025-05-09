const languages = [
  { code: "german", flag: "🇩🇪" },
  { code: "ukrainian", flag: "🇺🇦" },
  { code: "english", flag: "🇬🇧" }
];

let currentLangIndex = 1; 

function cycleLanguage() {
  currentLangIndex = (currentLangIndex + 1) % languages.length;
  const lang = languages[currentLangIndex];

  // Update the language button flag
  const langBtn = document.getElementById("language-toggle");
  langBtn.textContent = lang.flag;

  // Simulate an event-like object for openTab
  const fakeEvent = { currentTarget: langBtn };

  // Switch the content tab
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
}

  
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
  
  // Progress 

  document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.createElement("div");
    progressBar.id = "progressBarContainer";
    progressBar.innerHTML = `
      <div id="progressBarInner"></div>
    `;
    document.body.insertBefore(progressBar, document.getElementById("quizForm"));
  
    const totalQuestions = document.querySelectorAll(".question").length;
    const progressInner = document.getElementById("progressBarInner");
  
    function updateProgress(currentIndex) {
      const percent = Math.round((currentIndex / totalQuestions) * 100);
      progressInner.style.width = `${percent}%`;
    }
  
    // Hook into your existing logic
    const originalNext = nextBtn.onclick;
    nextBtn.onclick = () => {
      updateProgress(currentQuestion + 1);
      originalNext();
    };
  
    updateProgress(1); // start at question 1
  });
  