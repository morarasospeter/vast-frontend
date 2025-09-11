document.getElementById("questionForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    question: document.getElementById("question").value
  };

  let response = await fetch("https://vast-backend-l9in.onrender.com/api/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  let result = await response.json();
  document.getElementById("message").innerText = result.message;

});
