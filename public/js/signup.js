const signupFormHandler = async (event) => {
  event.preventDefault();


  const username = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      //alert(response.message)
      console.log(response.message);
    } else {
      alert("Failed to sign up."+response.message);
    }

  
};
}

document
  .querySelector(".signup-btn")
  .addEventListener("click", signupFormHandler);

