const testimonial = [
    {
        name: "Decons of the Deep",
        photoUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "The seamless integration across devices, from my iPhone to my MacBook, allows me to stayconnected and productive no matter where I am"
    },
    {
        name: "Abyss Watcher",
        photoUrl: "https://images.unsplash.com/photo-1669618726566-d49056b93915?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I recently tried Tata products, and I couldn't be more impressed! The quality is outstanding, and the variety they offer is simply amazing."
    },
    {
        name: "Seigward of Catarina",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I used to spend hours searching the internet for information, often getting lost in a sea of irrelevant results."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let index = 0;

function updateTestimonial() {
    const { name, photoUrl, text } = testimonial[idx];

    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    index++;
    setTimeout(() => {
        updateTestimonial()
    }, 2000)
}