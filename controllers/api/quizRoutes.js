// Select the menus, buttons, and containers from the DOM
const categoryDropdown = document.getElementById("category");
const tagDropdown = document.getElementById("tag");
const difficultyDropdown = document.getElementById("difficulty");
const fetchQuizButton = document.getElementById("fetch-quiz-button");
const quizContainer = document.getElementById("quiz-container");

// Use handlebars to compile the quiz template HTML
const quizTemplate = Handlebars.compile(document.getElementById("quiz-template").innerHTML);

// Add event listener to the start quiz button and attach the fetchQuizData function so it fires when the button is clicked
fetchQuizButton.addEventListener("click", fetchQuizData);

async function fetchQuizData() {

    // Store the values of the apiKey, category selection, tag selection, and difficulty selection
    const apiKey = 'kR3QfNYpGN1lvM9Jau6VkcIECeMwgt5A3EH7iLAU'
    const category = categoryDropdown.value;
    const tag = tagDropdown.value;
    const difficulty = difficultyDropdown.value;

    // Construct the API url
    const apiURL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=${category}&tags=${tag}&difficulty=${difficulty}`;

    // Ensure the user has selected an option from each menu
    if(!category || !tag || !difficulty) {
        alert("Please select a category, tag, and difficulty level!");
        return;
    }
    try {

        // Fetch the api and pass the response to the quizTemplate and attach that to the DOM.
        const response = await fetch(apiURL);
        const quizData = await response.json();
        const quizHTML = quizTemplate(quizData);
        document.getElementById("quiz-container").innerHTML = quizHTML;
    } catch (error) {
        console.error(`Error fetching quiz data: ${error}`);
    }
}