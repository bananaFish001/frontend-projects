const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
})

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}