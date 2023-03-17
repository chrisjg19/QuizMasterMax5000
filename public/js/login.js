const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in."+response.message);
    }
  }
};

const signupbtnHandler = async () => {
  console.log("clicked signup btn");
  document.location.replace("/sign-up");
};

document
  .querySelector(".login-btn")
  .addEventListener("click", loginFormHandler);

document
  .querySelector(".signup-btn")
  .addEventListener("click", signupbtnHandler);
