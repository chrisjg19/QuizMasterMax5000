const categoryDropdown = document.getElementById("category");
const tagDropdown = document.getElementById("tag");
const difficultyDropdown = document.getElementById("difficulty");
const fetchQuizButton = document.getElementById("fetch-quiz-button");
const quizTemplate = Handlebars.compile(
  document.getElementById("quiz-template").innerHTML
);

fetchQuizButton.addEventListener("click", fetchQuizData);

async function fetchQuizData() {
  const apiKey = "kR3QfNYpGN1lvM9Jau6VkcIECeMwgt5A3EH7iLAU";
  const category = categoryDropdown.value;
  const tag = tagDropdown.value;
  const difficulty = difficultyDropdown.value;

  if (!category || !tag || !difficulty) {
    alert("Please select a category, tag, and difficulty level!");
    return;
  }
  const url = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=${category}&difficulty=${difficulty}&tags=${tag}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const quizHTML = quizTemplate(data);
    document.getElementById("quiz-container").innerHTML = quizHTML;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
}
