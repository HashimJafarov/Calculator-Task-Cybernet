const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  if (e.target.textContent === "C") {
    result.textContent = "";
    return;
  }
  if (e.target.textContent === "=") {
    result.textContent = eval(result.textContent);
    return;
  }
  if (e.target.textContent === "X") {
    result.textContent += "*";
    return;
  }
  if (e.target.classList.contains("clear")) {
    result.textContent = result.textContent.slice(0, -1);
    return;
  }
  result.textContent += e.target.textContent;
});
