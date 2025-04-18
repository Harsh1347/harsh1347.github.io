document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");

  const textArray = ["Data Enthusiast", "LLM Engineer", "Builder of Educational AI Tools"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = textArray[textIndex];
    typedText.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % textArray.length;
      }
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
});
