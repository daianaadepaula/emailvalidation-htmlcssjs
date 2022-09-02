
const input = document.querySelector("input");
const emailIcon = document.querySelector(".email-icon");

input.addEventListener("keyup", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "") {
        emailIcon.classList.replace("uil-check-circle", "uil-envelope");
        return emailIcon.style.color = "#d8bfd8";
    }
    if (input.value.match(pattern)) {
        emailIcon.classList.replace("uil-envelope", "uil-check-circle");
        return emailIcon.style.color = "#00FF7F";
    }
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    emailIcon.style.color = "#DE0611";
})
