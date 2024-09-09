const faqs = document.querySelectorAll(".faq");
console.log(faqs);

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    faq.classList.toggle("active");

    if (faq.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.querySelector("img").src = "assets/images/icon-minus.svg";
    } else {
      answer.style.maxHeight = "0";
      question.querySelector("img").src = "assets/images/icon-plus.svg";
    }
  });
});
