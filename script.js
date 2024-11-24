
const questions = [
    {
        question: "Quels sont les usages les plus fréquents des écrans par les enfants ?",
        answers: ["Jouer à des jeux vidéo", "Regarder des dessins animés ou séries", "Faire des devoirs ou recherches", "Regarder des vidéos sur YouTube", "Parler avec des amis en ligne"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quels sont les dangers liés à une surexposition aux écrans ?",
        answers: ["Fatigue visuelle", "Manque de sommeil", "Isolement social", "Difficultés scolaires", "Accès à des contenus inappropriés"],
        points: [10, 7, 5, 3, 1]
    },
    {
        question: "Quelles sont les bonnes pratiques pour limiter l'usage des écrans ?",
        answers: ["Instaurer des règles de temps d'écran", "Privilégier les activités en famille", "Pas d’écran avant de dormir", "Utiliser des applications éducatives", "Éteindre les écrans pendant les repas"],
        points: [10, 7, 5, 3, 1]
    }
];

let currentQuestion = 0;
let currentAnswerIndex = 4;

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("reveal-button").addEventListener("click", revealAnswer);
document.getElementById("next-button").addEventListener("click", showNextQuestion);

function startGame() {
    console.log("Game started"); // Debugging message
    currentQuestion = 0;
    currentAnswerIndex = 4;
    document.getElementById("start-button").style.display = "none";
    document.getElementById("reveal-button").style.display = "inline";
    document.getElementById("next-button").style.display = "none";
    showQuestion();
}

function showQuestion() {
    console.log(`Displaying question ${currentQuestion + 1}`); // Debugging message
    const questionData = questions[currentQuestion];
    const questionContainer = document.getElementById("question");
    const answersList = document.getElementById("answers-list");

    questionContainer.textContent = questionData.question;
    answersList.innerHTML = ""; // Clear previous answers

    currentAnswerIndex = 4; // Start from the last answer
}

function revealAnswer() {
    console.log("Revealing an answer"); // Debugging message
    const questionData = questions[currentQuestion];
    const answersList = document.getElementById("answers-list");

    if (currentAnswerIndex >= 0) {
        const li = document.createElement("li");
        li.textContent = `${questionData.answers[currentAnswerIndex]} (${questionData.points[currentAnswerIndex]} points)`;
        answersList.appendChild(li);
        currentAnswerIndex--;
    }

    if (currentAnswerIndex < 0) {
        document.getElementById("reveal-button").style.display = "none";
        document.getElementById("next-button").style.display = "inline";
    }
}

function showNextQuestion() {
    console.log("Moving to next question"); // Debugging message
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        endGame();
        return;
    }
    currentAnswerIndex = 4;
    document.getElementById("reveal-button").style.display = "inline";
    document.getElementById("next-button").style.display = "none";
    showQuestion();
}

function endGame() {
    console.log("Game ended"); // Debugging message
    document.getElementById("question").textContent = "Le jeu est terminé ! Merci d'avoir participé.";
    document.getElementById("answers-list").innerHTML = "";
    document.getElementById("reveal-button").style.display = "none";
    document.getElementById("next-button").style.display = "none";
}
