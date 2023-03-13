let contactForm = document.getElementById("contactForm");
let submitBtn = document.getElementById("submitBtn");
let thumbsUpChange = document.getElementById("thumbsUpChange")

contactForm.addEventListener("submit", (event) => {  
    event.preventDefault();
    submitBtn.innerText = "Thanks!";

    let thumbsUp = document.createElement("img");
    thumbsUp.src = "images/thumbsUp.png";
    thumbsUp.width = 100;
    thumbsUp.height = 100;
    thumbsUp.style.display = "block"
    thumbsUp.style.marginLeft = "200px";

    thumbsUpChange.replaceWith(thumbsUp);

    setTimeout(() => {
        thumbsUp.replaceWith(thumbsUpChange);
        submitBtn.innerText = "Submit";
    }, 1000);
});
