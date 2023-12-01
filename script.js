const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const questionText = document.getElementById('question');
const answerText = document.getElementById('answer');
const audio = document.getElementById('audio');
const toggleButton = document.getElementById('toggle-button')

function toggleMute() {
  audio.muted = !audio.muted;
}

let isMoved = false;

let questionIndex = 0;
const questions = [
  'HI BUB!!!',
  'GALIT KA BA? :(',
  'GALIT KA BA? :(',
  'AYIIEEEE HINDI NA SIYA GALET',
  'AYIIEEEE HINDI NA SIYA GALET',
  'OKAY LANG BA ETO MUNA GIFT KO?',
  'OKAY LANG BA ETO MUNA GIFT KO?',
  'KAHIT ETO MUNA, BAWI AKO SA SUSUNOD',
  'KAHIT ETO MUNA, BAWI AKO SA SUSUNOD',
  'LOVE MOKO?',
  'LOVE MOKO?',
  'DIKA NAMAN MAKAKATANGGI HAHA!',
  'DIKA NAMAN MAKAKATANGGI HAHA!',
  'AYIEEEEE LOVE NIYA AKO BLEH! :p',
  'AYIEEEEE LOVE NIYA AKO BLEH! :p'
];
let answers = [];

function changeQuestion(answer) {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    questionText.textContent = questions[questionIndex];
    answers.push(answer);
  } else if (questionIndex === questions.length - 1) {
    answers.push(answer);
    displayAnswers();
  }
}

function displayAnswers() {
  questionText.style.display = 'none';
  answerText.textContent = 'HAPPY 5TH MONTHSARRY I LOVE YOU TOO BUBBY ZHI JEROEN CHIN CHIN!! ❤️❤️❤️';
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  toggleButton.style.display = 'none';
}

function showAnswer() {
  displayAnswers();
}

noButton.addEventListener('click', () => {
  if (!isMoved) {
    noButton.classList.add('move-right');
  } else {
    noButton.classList.remove('move-right');
  }
  isMoved = !isMoved;
});

yesButton.addEventListener('click', () => {
  if (questionIndex === 0) {
    questionText.textContent = questions[questionIndex];
    questionIndex++;
  } else if (questionIndex < questions.length) {
    changeQuestion('Yes');
  }
});