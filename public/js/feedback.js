const feedbackFormHandler = async (event) => {
  event.preventDefault();

  const userId = document.querySelector("#userIdInput").value.trim();
  const message = document.querySelector("#messageInput").value.trim();

  if (userId && message) {
    const response = await fetch("/api/feedbacks/", {
      method: "POST",
      body: JSON.stringify({ user_id:userId,message: message }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/feedback");
    } else {
      alert("Failed to feedbackSend."+response.message);// this is error Message
    }
  }
};



document
  .querySelector("#sendFeedback")
  .addEventListener("click", feedbackFormHandler);


