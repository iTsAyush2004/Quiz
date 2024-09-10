document.addEventListener("DOMContentLoaded", () => {
    const answers = document.querySelectorAll(".ans");

    answers.forEach(answer => {
        answer.addEventListener("change", function () {
            const parentDiv = this.closest("div");
            parentDiv.classList.remove("correct", "incorrect");
            
            if (this.value === "right") {
                parentDiv.classList.add("correct");
            } else {
                parentDiv.classList.add("incorrect");
            }
        });
    });
});

function submitQuiz() {
    const answers = document.querySelectorAll(".ans");
    let score = 0;

    answers.forEach(answer => {
        if (answer.checked && answer.value === "right") {
            score++;
        }
    });

    localStorage.setItem("score", score);
    window.location.href = "response.html";
}
