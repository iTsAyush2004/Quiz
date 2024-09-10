function chan(){
    var a= document.querySelector(".btn")
    a.style.backgroundColor = "green"
    a.innerHTML="Submitted"
}

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "H2O2"],
            answer: "H2O"
        },
        {
            question: "What planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond"],
            answer: "Diamond"
        },
        {
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "200,000 km/s"],
            answer: "300,000 km/s"
        }
    ];

    questions.forEach((q, index) => {
        document.querySelector(`.q${index + 1} .q${index + 1}question p`).innerText = q.question;
        q.options.forEach((opt, optIndex) => {
            document.querySelector(`.q${index + 1} .opt${optIndex + 1} label`).innerText = opt;
        });
    });

    document.querySelector(".btn").addEventListener("click", function (event) {
        event.preventDefault();
        let score = 0;

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                const label = selectedOption.nextElementSibling;
                if (label.innerText == q.answer) {
                    label.style.color = "green";
                    score++;
                } else {
                    label.style.color = "red";
                }
            }
        });

        localStorage.setItem("score", score);
        window.location.href = "response.html";
    });
});

