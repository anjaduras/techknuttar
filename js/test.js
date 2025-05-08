// List of your 6 characters
const characters = ['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON', 'CPP', 'SQL'];

// Initialize score object
let scores = {
    HTML: 0,
    CSS: 0,
    JAVASCRIPT: 0,
    PYTHON: 0,
    CPP: 0,
    SQL: 0
};

// Example question structure
const questions = [
  {
    text: "Choose a music band:",
    answers: [
      { text: "Anything with fonk", character: "CPP" },
      { text: "Tyler the Creator", character: "JAVASCRIPT" },
      { text: "Frank Sinatra", character: "HTML" },
      { text: "Fleetwood Mac", character: "CSS" },
      { text: "Thom Yorke", character: "PYTHON" },
      { text: "Men At Work", character: "SQL" }
    ]
  },
  {
    text: "Choose your go-to summer drink:",
    answers: [
      { text: "Mohito", character: "JAVASCRIPT" },
      { text: "Sparkling water", character: "SQL" },
      { text: "Orange juice", character: "PYTHON" }
    ]
  },
  {
    text: "Which school subject of these do you like the most?",
    answers: [
      { text: "History", character: "JAVASCRIPT" },
      { text: "Chemistry", character: "CSS" },
      { text: "Math", character: "CPP" }
    ]
  },
  {
    text: "Do you like change?",
    answers: [
      { text: "Yes", character: "JAVASCRIPT" },
      { text: "No", character: "SQL" },
      { text: "Can adapt", character: "PYTHON" }
    ]
  },
  {
    text: "Choose your weekend plan:",
    answers: [
      { text: "Book club", character: "HTML" },
      { text: "Gaming event", character: "CPP" },
      { text: "Planning the next week", character: "SQL" }
    ]
  },
  {
    text: "Choose a bird:",
    answers: [
      { text: "Peacock", character: "CSS" },
      { text: "Crow", character: "HTML" },
      { text: "Parrot", character: "JAVASCRIPT" }
    ]
  },
  {
    text: "Which Twin Peaks quote sounds the best right now?",
    answers: [
      { text: "Laura Palmer: I feel like I know her... but sometimes my arms bend back.", character: "CPP" },
      { text: "Chemistry", character: "CSS" },
      { text: "Math", character: "CPP" }
    ]
  },
];

// Function to record a user's answer
function selectAnswer(character) {
  scores[character]++;
}

// Example of final result
function getResult() {
  let topCharacter = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return `You are most like: ${topCharacter}`;
}
