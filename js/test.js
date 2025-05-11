console.log("test.js is running!");

const characters = ["HTML", "CSS", "JS", "PYTHON", "SQL", "CPP"];
const points = Object.fromEntries(characters.map(c => [c, 0]));

const characterInfo = {
  HTML: {
    description: "Du bist bodenständig, reflektiert und ruhig – ganz wie HTML. Du scheinst deine Freizeit sinnvoll zu nutzen, sei es durch Hobbys oder persönliche Weiterentwicklung. Diese Art von Selbstbewusstsein ist heute selten. Wie HTML trägst du eine reiche Geschichte in dir – ich wette, du bist ein*e großartige*r Geschichtenerzähler*in. Dein persönlicher Glückskeks: Du musst Großes von dir erwarten, bevor du es erreichen kannst.",
    image: "./img/html_portrait.png"
  },
  CSS: {
    description: "Du bist stilvoll, kreativ und fällst einfach auf – ganz wie CSS! Du bringst wahrscheinlich Farbe in jeden Raum und inspirierst andere, ohne es zu merken. Dein Sinn für Mode ist sicher großartig. Du liebst es, die Welt schöner und persönlicher zu gestalten. Dein persönlicher Glückskeks: Das Schöne am Lernen ist, dass es dir niemand nehmen kann.",
    image: "./img/css_portrait.png"
  },
  JS: {
    description: "Du hast eine spontane, elektrische Ausstrahlung – witzig, schrullig und super cool. Du folgst vielleicht oft deinem Bauchgefühl, aber genau das macht deinen Charme aus. Menschen, die mit deinem Tempo mithalten können, haben großes Glück. Und dein Musikgeschmack? Echt top. Dein persönlicher Glückskeks: Der beste Weg, die Zukunft vorherzusagen, ist, sie selbst zu gestalten.",
    image: "./img/js_portrait.png"
  },
  PYTHON: {
    description: "Du bist warmherzig, aufmerksam und angenehm in deiner Art. Du sprichst vielleicht nicht viel über dich, aber andere reden viel über dich – im besten Sinne. Deine ruhige Ausstrahlung gibt anderen Sicherheit, und man spürt sofort, dass man dir vertrauen kann. Du bist der Typ Freund*in, der immer da ist – auch wenn es still ist. Dein persönlicher Glückskeks: Freude entsteht, wenn wir erkennen, wie gut die Dinge wirklich sind.",
    image: "./img/py_portrait.png"
  },
  SQL: {
    description: "Du bist organisiert, zielstrebig und denkst immer ein paar Schritte voraus. Du lässt dich nicht leicht ablenken, und wenn du ein Ziel hast, verfolgst du es konsequent. Andere kommen da kaum hinterher – deine Effizienz ist bewundernswert. Vergiss nur nicht, dir auch mal Ruhe zu gönnen. Dein persönlicher Glückskeks: Wenn ich dir nur einen Ratschlag geben darf, dann diesen: Sag Ja. Sag Ja – und gestalte dein eigenes Schicksal.",
    image: "./img/sql_portrait.png"
  },
  CPP: {
    description: "Du bist klug, komplex und unglaublich leistungsfähig. Vielleicht wirkst du auf den ersten Blick etwas unnahbar – aber wer sich die Mühe macht, dich kennenzulernen, ist beeindruckt von dem, was du kannst. Du lässt nicht jeden sofort an dich ran, aber wenn doch, dann entsteht eine starke Verbindung. Dein persönlicher Glückskeks: Wenn du es dir vorstellen kannst, kannst du es erreichen. Wenn du es träumen kannst, kannst du es werden.",
    image: "./img/cpp_portrait.png"
  }
};
const questions = [
  {
    q: "1. Was ist dein Lieblingsgetränk im Sommer?",
    a: [
      { label: "Mojito", value: ["JS"] },
      { label: "Sprudelwasser", value: ["SQL"] },
      { label: "Orangensaft", value: ["PYTHON"] }
    ]
  },
  {
    q: "2. Welches Schulfach magst du am liebsten?",
    a: [
      { label: "Geschichte", value: ["HTML"] },
      { label: "Chemie", value: ["CSS"] },
      { label: "Mathematik", value: ["CPP"] }
    ]
  },
  {
    q: "3. Magst du Veränderungen?",
    a: [
      { label: "Ja", value: ["JS"] },
      { label: "Nein", value: ["SQL"] },
      { label: "Ich kann mich anpassen", value: ["PYTHON"] }
    ]
  },
  {
    q: "4. Was wäre dein Wochenendplan?",
    a: [
      { label: "Buchclub", value: ["HTML"] },
      { label: "Gaming-Event", value: ["CPP"] },
      { label: "Die kommende Woche durchplanen", value: ["SQL"] }
    ]
  },
  {
    q: "5. Welches Zitat aus *Twin Peaks* passt gerade zu deiner Stimmung?",
    a: [
      { label: `"Ich habe das Gefühl, ich kenne sie ... aber manchmal biegen sich meine Arme nach hinten."`, value: ["CPP"] },
      { label: `"Mein Schatten ist immer bei mir. Manchmal vorne, manchmal hinten. Manchmal links, manchmal rechts. Außer an bewölkten Tagen oder nachts."`, value: ["CSS"] },
      { label: `"Harry, ich verrate dir ein kleines Geheimnis. Gib dir jeden Tag, einmal am Tag, ein Geschenk..."`, value: ["PYTHON"] }
    ]
  },
  {
    q: "6. Wähle einen Vogel:",
    a: [
      { label: "Pfau", value: ["CSS"] },
      { label: "Krähe", value: ["HTML"] },
      { label: "Papagei", value: ["JS"] }
    ]
  },
  {
    q: "7. Wähle eine Musikrichtung oder Band:",
    a: [
      { label: "Alles mit Funk", value: ["CPP"] },
      { label: "Tyler, The Creator", value: ["JS"] },
      { label: "Frank Sinatra", value: ["HTML"] },
      { label: "Fleetwood Mac", value: ["CSS"] },
      { label: "Thom Yorke", value: ["PYTHON"] },
      { label: "Men at Work", value: ["SQL"] }
    ]
  },
  {
    q: "8. Was beschäftigt dich am meisten vor einer Reise?",
    a: [
      { label: "Das perfekte Outfit zusammenstellen", value: ["CSS"] },
      { label: "Sicherstellen, dass du alle Highlights siehst", value: ["HTML"] },
      { label: "Tickets und Buchungen prüfen", value: ["SQL"] }
    ]
  },
  {
    q: "9. Hast du in diesem Test gelogen?",
    a: [
      { label: "Ja", value: ["JS"] },
      { label: "Nein", value: ["PYTHON"] },
      { label: "Sag ich nicht", value: ["CPP"] }
    ]
  }
  
];


const questionsDiv = document.getElementById("questions");
let currentQuestion = 0;
let quizFinished = false;
let updateProgress;

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block"; 

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    if (i === 0) div.classList.add("active");
    div.innerHTML = `<p>Q${i + 1}: ${q.q}</p>`;
    q.a.forEach(answer => {
      const value = answer.value.join(",");
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${value}" />
          ${answer.label}
        </label><br/>
      `;
    });
    questionsDiv.appendChild(div);
  });

  const progressBar = document.createElement("div");
  progressBar.id = "progressBarContainer";
  progressBar.innerHTML = `<div id="progressBarInner"></div>`;
  document.querySelector(".testcontent").insertBefore(progressBar, document.getElementById("quizForm"));

  const totalQuestions = questions.length;
  const progressInner = document.getElementById("progressBarInner");

  updateProgress = (index) => {
    const percent = Math.round((index / totalQuestions) * 100);
    progressInner.style.width = `${percent}%`;
  };

  updateProgress(1); 

  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  questionsDiv.addEventListener("change", () => {
    nextBtn.disabled = false;
  });

  nextBtn.addEventListener("click", () => {
    const currentDiv = document.querySelectorAll(".question")[currentQuestion];
    currentDiv.classList.remove("active");
    currentQuestion++;

    if (currentQuestion < questions.length) {
      document.querySelectorAll(".question")[currentQuestion].classList.add("active");
      nextBtn.disabled = true;

      updateProgress(currentQuestion + 1); 

      if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
      }
    }
  });

  document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Quiz submitted!");

    questions.forEach((_, i) => {
      const answer = document.querySelector(`input[name="q${i}"]:checked`).value;
      answer.split(",").forEach(char => {
        if (points[char] !== undefined) {
          points[char]++;
        }
      });
    });

    const topChar = Object.entries(points).sort((a, b) => b[1] - a[1])[0];
    const info = characterInfo[topChar[0]];

    quizFinished = true; // <--- add this
    document.getElementById("quizForm").style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("nextBtn").style.display = "none"; 
  
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    
    resultDiv.innerHTML = `
      <h2>Dein Charakter ist: ${topChar[0]}</h2>
      <div style="display: block; text-align: center;">
        <img src="${info.image}" alt="${topChar[0]}" style="max-width: 200px; display: block; margin: 0 auto;" />
        <p style="max-width: 600px;">${info.description}</p>
      </div>
    `;
    
  });
});