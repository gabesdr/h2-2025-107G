// Quiz data - 10 trivia questions about Iceland
const questions = [
  { id: 1, question: "Hvað er höfuðborg Íslands?", answer: "Reykjavík" },
  { id: 2, question: "Hvað er stærsta vatn Íslands?", answer: "Þingvallavatn" },
  { id: 3, question: "Hvað heitir fjallið sem er yfir Reykjavík?", answer: "Esja" },
  { id: 4, question: "Hversu margir íbúar búa á Íslandi?", answer: "Um 370.000" },
  { id: 5, question: "Hvað er þjóðarblóm Íslands?", answer: "Holtasóley" },
  { id: 6, question: "Hvað er langlífasti tré Íslands?", answer: "Björk" },
  { id: 7, question: "Hvað er hæsti fjallstindur Íslands?", answer: "Hvannadalshnjúkur" },
  { id: 8, question: "Hvað er stærsti jökull Íslands?", answer: "Vatnajökull" },
  { id: 9, question: "Hvað er kveikjari í íslenskri matargerð?", answer: "Kók" },
  { id: 10, question: "Hvað er þjóðardansinn?", answer: "Vívikvæði" }
];

// Application state
let currentQuestionIndex = 0;
let showAnswer = false;

// DOM elements
const homePage = document.getElementById('homePage');
const questionsPage = document.getElementById('questionsPage');
const homeBtn = document.getElementById('homeBtn');
const questionsBtn = document.getElementById('questionsBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const homeFromQuizBtn = document.getElementById('homeFromQuizBtn');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const answerText = document.getElementById('answerText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize application
function init() {
  // Load saved state from localStorage
  const savedIndex = localStorage.getItem('currentQuestionIndex');
  if (savedIndex !== null) {
    currentQuestionIndex = parseInt(savedIndex);
  }

  // Set up event listeners
  homeBtn.addEventListener('click', showHomePage);
  questionsBtn.addEventListener('click', showQuestionsPage);
  startQuizBtn.addEventListener('click', startQuiz);
  homeFromQuizBtn.addEventListener('click', showHomePage);
  showAnswerBtn.addEventListener('click', toggleAnswer);
  prevBtn.addEventListener('click', previousQuestion);
  nextBtn.addEventListener('click', nextQuestion);

  // Show home page initially
  showHomePage();
}

// Show home page
function showHomePage() {
  homePage.classList.remove('hidden');
  questionsPage.classList.add('hidden');
  homeBtn.classList.add('text-blue-600');
  homeBtn.classList.remove('text-gray-600');
  questionsBtn.classList.add('text-gray-600');
  questionsBtn.classList.remove('text-blue-600');
}

// Show questions page
function showQuestionsPage() {
  homePage.classList.add('hidden');
  questionsPage.classList.remove('hidden');
  homeBtn.classList.add('text-gray-600');
  homeBtn.classList.remove('text-blue-600');
  questionsBtn.classList.add('text-blue-600');
  questionsBtn.classList.remove('text-gray-600');
  updateQuestion();
}

// Start quiz
function startQuiz() {
  currentQuestionIndex = 0;
  showAnswer = false;
  showQuestionsPage();
}

// Update question display
function updateQuestion() {
  const question = questions[currentQuestionIndex];
  
  // Update question counter
  questionCounter.textContent = `Spurning ${currentQuestionIndex + 1} af ${questions.length}`;
  
  // Update question text
  questionText.textContent = question.question;
  
  // Reset answer display
  showAnswer = false;
  showAnswerBtn.classList.remove('hidden');
  answerText.classList.add('hidden');
  
  // Update navigation buttons
  updateNavigationButtons();
  
  // Save current state to localStorage
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
}

// Toggle answer visibility
function toggleAnswer() {
  showAnswer = !showAnswer;
  if (showAnswer) {
    showAnswerBtn.classList.add('hidden');
    answerText.classList.remove('hidden');
    answerText.textContent = questions[currentQuestionIndex].answer;
  } else {
    showAnswerBtn.classList.remove('hidden');
    answerText.classList.add('hidden');
  }
}

// Update navigation buttons state
function updateNavigationButtons() {
  // Previous button
  if (currentQuestionIndex === 0) {
    prevBtn.disabled = true;
    prevBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    prevBtn.classList.remove('bg-gray-600', 'text-white', 'hover:bg-gray-700');
  } else {
    prevBtn.disabled = false;
    prevBtn.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    prevBtn.classList.add('bg-gray-600', 'text-white', 'hover:bg-gray-700');
  }
  
  // Next button
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.disabled = true;
    nextBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  } else {
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    nextBtn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  }
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestion();
  }
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    updateQuestion();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);