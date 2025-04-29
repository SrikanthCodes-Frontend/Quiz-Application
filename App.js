const questions = [
    {
      question: "Who is the Prime Minister in India at 2025.?",
      options: ["Mukesh Ambani", "Reventh Reddy", "Narendra Damodardas Modi", "ChandraBabu Naidu"],
      answer: "Narendra Damodardas Modi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Tolstoy", "Homer", "Dickens"],
      answer: "Shakespeare"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsList = document.getElementById("options-list");
  const nextBtn = document.getElementById("next-btn");
  const scoreBox = document.getElementById("score-box");
  
  function loadQuestion() {
    const currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;
    optionsList.innerHTML = "";
  
    currentQ.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => checkAnswer(option);
      optionsList.appendChild(li);
    });
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentIndex].answer;
    if (selected === correct) {
      score++;
    }
    disableOptions();
  }
  
  function disableOptions() {
    const options = optionsList.querySelectorAll("li");
    options.forEach(option => {
      option.onclick = null;
      if (option.textContent === questions[currentIndex].answer) {
        option.style.background = "green";
      } else {
        option.style.background = "red";
      }
    });
  }
  
  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsList.innerHTML = "";
    nextBtn.style.display = "none";
    scoreBox.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  loadQuestion();
  