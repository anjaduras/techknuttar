console.log("test.js is running!");

const characters = ["HTML", "CSS", "JS", "PYTHON", "SQL", "CPP"];
const points = Object.fromEntries(characters.map(c => [c, 0]));

const characterInfo = {
  HTML: {
    description: "Really grounded, smart, and calm—you remind me of HTML. I admire how you value your free time and fill it with meaningful hobbies and self-improvement; that’s becoming rare these days. Like HTML, you carry a rich history, and I bet you’re a great storyteller too. Your personal fortune cookie from me: You must expect great things of yourself before you can do them.",
    image: "./img/html_portrait.png"
  },
  CSS: {
    description: "Oh, I like you! You're so bubbly, stylish, and helpful—I bet tons of people want to be friends with you. Honestly, I’d probably “borrow” something from your closet, because your style is on another level. Like CSS, you're full of improvement ideas and love to beautify the world around you. Your personal fortune cookie from me: The beautiful thing about learning is that no one can take it away from you.",
    image: "./img/css_portrait.png"
  },
  JS: {
    description: "Ooh, you seem fun! You’re the perfect balance of weird and cool. You're the kind of person for those who can keep up with your tempo—and you’re totally fine with that. You might be impulsive or follow your heart, and I honestly love that about you. Also, major props for your music taste—so cool. Your personal fortune cookie from me: The best way to predict your future is to create it.",
    image: "./img/js_portrait.png"
  },
  PYTHON: {
    description: "Ahh, you’re a nice one. On cold days or in bad weather, your vibe stays unshakably warm—you carry that comforting aura no matter what. You’re also a great conversation partner. Even though you don’t talk about yourself much, everyone seems to talk about you! I get serious “I have no enemies” meme energy from you—you seem truly unproblematic. (Although… if you picked Thom Yorke during this test, I might have a few concerns to raise 😄) Your personal fortune cookie from me: Joy is what happens to us when we allow ourselves to recognize how good things really are.",
    image: "./img/py_portrait.png"
  },
  SQL: {
    description: "Hi! I admire the way you go about your plans and hobbies - so far from how I do it, but surely tactical! You will never get lost anywhere, and you are surely hard to compete with - as you always have your eyes on your goal and are hard to distract. Remember to have some time for yourself - you deserve rest! Keep it up, boss .Your personal fortune cookie from me: If I must give any of you advice it would be say yes. Say yes,and create your own destiny.",
    image: "./img/sql_portrait.png"
  },
  CPP: {
    description: "Hi (I say shyly). You're not like other girls, not like other men—not like other people in general. And honestly… I’m a little scared of you (respectfully).You’re powerful, intricate, and endlessly capable—there’s very little you can’t do once you set your logic to it. You may come off as tough to approach, but those who take the time to understand you are better for it. And even if it doesn’t always show, people admire you from a distance—maybe just too shy to say it out loud. :) Your personal fortune cookie from me: If you can imagine it, you can achieve it; if you can dream it, you can become it.",
    image: "./img/cpp_portrait.png"
  }
};


const questions = [
  {
    q: "1. Choose your go-to summer drink:", a: [
      { label: "Mohito", value: ["JS"] },
      { label: "Sparkling water", value: ["SQL"] },
      { label: "Orange juice", value: ["PYTHON"] }
    ]
  },
  {
    q: "2. Which school subject of these do you like the most?", a: [
      { label: "History", value: ["HTML"] },
      { label: "Chemistry", value: ["CSS"] },
      { label: "Math", value: ["CPP"] }
    ]
  },
  {
    q: "3. Do you like change?", a: [
      { label: "Yes", value: ["JS"] },
      { label: "No", value: ["SQL"] },
      { label: "Can adjust", value: ["PYTHON"] }
    ]
  },
  {
    q: "4. Choose your weekend plan:", a: [
      { label: "Book club", value: ["HTML"] },
      { label: "Gaming event", value: ["CPP"] },
      { label: "Planning the next week", value: ["SQL"] }
    ]
  },
  {
    q: "5. Choose a bird:", a: [
      { label: "Peacock", value: ["CSS"] },
      { label: "Crow", value: ["HTML"] },
      { label: "Parrot", value: ["JS"] }
    ]
  },
  {
    q: "6. Which Twin Peaks quote sounds the best right now?", a: [
      { label: "I feel like I know her... but sometimes my arms bend back.", value: ["CPP"] },
      { label: "My shadow is always with me. Sometimes ahead, sometimes behind. Sometimes to the left, sometimes to the right. Except on cloudy days, or at night.", value: ["CSS"] },
      { label: "Harry, I'm going to let you in on a little secret. Every day, once a day, give yourself a present. Don't plan it. Don't wait for it. Just let it happen. It could be a new shirt at the men's store, a catnap in your office chair, or two cups of good, hot black coffee.", value: ["PYTHON"] }
    ]
  },
  {
    q: "7. Did you lie during the test?", a: [
      { label: "Yes", value: ["JS"] },
      { label: "No", value: ["PYTHON"] },
      { label: "Won't tell", value: ["CPP"] }
    ]
  },
  {
    q: "8. The day before going on the trip, what are you most concerned about?", a: [
      { label: "Making sure you have the best outfits", value: ["CSS"] },
      { label: "Cheching the plan to make sure you'll see all the important places", value: ["HTML"] },
      { label: "Checking if the tickets/bookings information is correct", value: ["SQL"] }
    ]
  },
  {
    q: "9. Choose a music band:", a: [
      { label: "Anything with fonk", value: ["CPP"] },
      { label: "Tyler the Creator", value: ["JS"] },
      { label: "Frank Sinatra", value: ["HTML"] },
      { label: "Fleetwood Mac", value: ["CSS"] },
      { label: "Thom Yorke", value: ["PYTHON"] },
      { label: "Men At Work", value: ["SQL"] }
    ]
  }
];


const questionsDiv = document.getElementById("questions");
let currentQuestion = 0;
let quizFinished = false;



// Render questions
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block"; // 👈 this line is important

  // ✅ Now render the questions here:
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question";
    if (i === 0) div.classList.add("active");
    div.innerHTML = `<p>Q${i + 1}: ${q.q}</p>`;
    q.a.forEach((answer) => {
      const value = answer.value.join(",");
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${value}" />
          ${answer.label}
        </label><br/>
      `;
    });
    document.getElementById("questions").appendChild(div);
  });
});

const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

// Enable Next button on answer
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

    if (currentQuestion === questions.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "inline-block";
    }
  }
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!");

  // ... rest of the code

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
  //document.getElementById("progressContainer").style.display = "none";

  // Show result only
  const resultDiv = document.getElementById("result");
resultDiv.style.display = "block"; // <-- Add this line to ensure it's visible

resultDiv.innerHTML = `
  <h2>Your character is: ${topChar[0]}</h2>
  <div style="display: flex; align-items: flex-start; gap: 20px;">
    <img src="${info.image}" alt="${topChar[0]}" style="max-width: 200px;" />
    <p style="max-width: 600px;">${info.description}</p>
  </div>
`;

});
console.log("Points:", points);