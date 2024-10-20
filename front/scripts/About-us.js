document.addEventListener("DOMContentLoaded", function () {
  const sendComment = () => {
    const comment = document.getElementById("opinion").value;
    const commentContainer = document.getElementById("opiniones-guardadas");
    


    const userOpinion = document.createElement("p");
    userOpinion.classList.add("user-comment");

    userOpinion.innerHTML = `
        <p>${comment}</p>
      `;

    commentContainer.appendChild(userOpinion);
  };


  function clearInput() {
    opinion.value = "";
  }
  
  const opinionForm = document.getElementById("opinion-form");
  opinionForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    sendComment();
    clearInput();
  });
});
