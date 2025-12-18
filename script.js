// Typing animation
const texts = ["Java Full Stack Developer", "Web Developer", "Problem Solver"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Skill animation on scroll
const skills = document.querySelectorAll(".progress div");

window.addEventListener("scroll", () => {
    const skillSection = document.getElementById("skills").getBoundingClientRect().top;
    if (skillSection < window.innerHeight) {
        skills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });
    }
});