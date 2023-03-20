// // Select the menus, buttons, and containers from the DOM
// const categoryDropdown = document.getElementById("category");
// // const tagDropdown = document.getElementById("tag");
// const difficultyDropdown = document.getElementById("difficulty");
// const fetchQuizButton = document.getElementById("fetch-quiz-button");
// const quizContainer = document.getElementById("quiz-container");

// const categoryDropdownMenu = categoryDropdown.nextElementSibling;

// categoryDropdownMenu.addEventListener("click", function(e) {
//   // Check that clicked element is a dropdown item
//   if (e.target.classList.contains("dropdown-item")) {
//     // Get selected category and display it in the dropdown button
//     const selectedCategory = e.target.textContent;
//     categoryDropdown.textContent = selectedCategory;
//   }
// });

// const difficultyDropdownMenu = difficultyDropdown.nextElementSibling;

// difficultyDropdownMenu.addEventListener("click", function(e) {
//     // Check that clicked element is a dropdown item
//     if (e.target.classList.contains("dropdown-item")) {
//       // Get selected difficulty and display it in the dropdown button
//       const selectedDifficulty = e.target.textContent;
//       difficultyDropdown.textContent = selectedDifficulty;
//     }
//   });

// // fetchQuizButton.addEventListener('click', () => {
// //     window.location.href= '/quiz';
// // });

// // Use handlebars to compile the quiz template HTML


// // const startQuiz = async function fetchQuizData() {

// //     // Store the values of the apiKey, category selection, tag selection, and difficulty selection
// //     const apiKey = 'kR3QfNYpGN1lvM9Jau6VkcIECeMwgt5A3EH7iLAU'
// //     const category = categoryDropdown.value;
// //     const tag = tagDropdown.value;
// //     const difficulty = difficultyDropdown.value;

// //     // Construct the API url
// //     const apiURL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=${category}&tags=${tag}&difficulty=${difficulty}`;

// //     // Ensure the user has selected an option from each menu
// //     if(!category || !tag || !difficulty) {
// //         alert("Please select a category, tag, and difficulty level!");
// //         return;
// //     }
// //     try {

// //         // Fetch the api and pass the response to the quizTemplate and attach that to the DOM.
// //         // Use handlebars to compile the quiz template HTML
// //         const quizTemplate = Handlebars.compile(quizContainer);
// //         const response = await fetch(apiURL);
// //         const quizData = await response.json();
// //         const quizHTML = quizTemplate(quizData);
// //         document.getElementById("quiz-container").innerHTML = quizHTML;
// //     } catch (error) {
// //         console.error(`Error fetching quiz data: ${error}`);
// //     }
// // }

// // // Add event listener to the start quiz button and attach the fetchQuizData function so it fires when the button is clicked
// // fetchQuizButton.addEventListener("click", startQuiz);

// const startQuiz = async function fetchQuizData() {
//     // Store the values of the apiKey, category selection, tag selection, and difficulty selection
//     const apiKey = 'kR3QfNYpGN1lvM9Jau6VkcIECeMwgt5A3EH7iLAU'
//     const category = categoryDropdown.value;
//     const difficulty = difficultyDropdown.value;
  
//     // Construct the API url
//     const apiURL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=${category}&difficulty=${difficulty}`;
  
//     // Ensure the user has selected an option from each menu
//     if(!category || !difficulty) {
//       alert("Please select a category, tag, and difficulty level!");
//       return;
//     }
  
//     try {
//       // Fetch the api and pass the response to the quizTemplate
//       const response = await fetch(apiURL);
//       const quizData = await response.json();
//       // Redirect to the quiz page with quiz data as a query parameter
//       window.location.href = `/quiz?data=${JSON.stringify(quizData)}`;
//     } catch (error) {
//       console.error(`Error fetching quiz data: ${error}`);
//     }
//   }

//   fetchQuizButton.addEventListener("click", startQuiz);


// Select the menus, buttons, and containers from the DOM
const categoryDropdown = document.getElementById("category");
// const tagDropdown = document.getElementById("tag");
const difficultyDropdown = document.getElementById("difficulty");
const fetchQuizButton = document.getElementById("fetch-quiz-button");
const quizContainer = document.getElementById("quiz-container");

const categoryDropdownMenu = categoryDropdown.nextElementSibling;

categoryDropdownMenu.addEventListener("click", function(e) {
  // Check that clicked element is a dropdown item
  if (e.target.classList.contains("dropdown-item")) {
    // Get selected category and display it in the dropdown button
    const selectedCategory = e.target.textContent;
    categoryDropdown.textContent = selectedCategory;
  }
});

const difficultyDropdownMenu = difficultyDropdown.nextElementSibling;

difficultyDropdownMenu.addEventListener("click", function(e) {
    // Check that clicked element is a dropdown item
    if (e.target.classList.contains("dropdown-item")) {
      // Get selected difficulty and display it in the dropdown button
      const selectedDifficulty = e.target.textContent;
      difficultyDropdown.textContent = selectedDifficulty;
    }
  });

const startQuiz = async function fetchQuizData() {
    // Store the values of the apiKey, category selection, tag selection, and difficulty selection
    const apiKey = 'kR3QfNYpGN1lvM9Jau6VkcIECeMwgt5A3EH7iLAU'
    const category = categoryDropdown.value;
    const difficulty = difficultyDropdown.value;
  
    // Construct the API url
    const apiURL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&category=${category}&difficulty=${difficulty}`;
  
    // Ensure the user has selected an option from each menu
    if(!category || !difficulty) {
      alert("Please select a option from each menu!");
      return;
    }
  
    try {
      // Fetch the api and pass the response to the quizTemplate and attach that to the DOM.
      // Use handlebars to compile the quiz template HTML
      const response = await fetch(apiURL);
      const quizData = await response.json();
      const quizTemplate = Handlebars.compile(quizContainer.innerHTML);
      window.location.href=`/quiz?data=${JSON.stringify(quizData)}`;


    //   const quizHTML = quizTemplate(quizData);
    //   quizContainer.innerHTML = quizHTML;
    } catch (error) {
      console.error(`Error fetching quiz data: ${error}`);
      quizContainer.innerHTML = "Error fetching quiz data. Please try again later.";
    }
  }

fetchQuizButton.addEventListener("click", startQuiz);


  