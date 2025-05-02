// Tabs
function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName("content-tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
  
    const tablinks = document.getElementsByClassName("tab");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
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
  