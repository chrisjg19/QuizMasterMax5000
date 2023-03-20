const feedbackFormHandler = async (event) => {
  event.preventDefault();
  // http://localhost:3001/feedback?post-text=hello
  const userId = document.querySelector("#userIdInput").value.trim();
  const message = document.querySelector("#messageInput").value.trim();
  console.log(userId, message);
  /*
fetch("/api/feedbacks", {
  method:"POST",
  body:JSON.stringify({
    userId,
    message
  })
  headers: { "Content-Type": "application/json" },
});
.then(response =>{
  if (response.ok){
    console.log("success");
    alert("new Feedback Added success");
    document.location.replace("/feedback")
   }else {
    alert(response.statusText)}
  })
  .catch(err=>
    alert(err))
  };
*/

  if (userId && message) {
    const response = await fetch("/api/feedbacks", {
      method: "POST",
      body: JSON.stringify({ user_id: userId, message: message }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/feedback");
    } else {
      alert("Failed to feedbackSend." + response.message); // this is error Message
    }
  } else {
    console.log("userid ve messag alinamadi");
  }
};

document
  .querySelector(".feedbackFormHandler")
  .addEventListener("submit", feedbackFormHandler);
