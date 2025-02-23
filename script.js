

document.getElementById("toggleButton").addEventListener("click", function () {
    let links = document.querySelector(".links");
    let linkList = document.getElementById("linkList");

    // Toggle navbar visibility
    linkList.classList.toggle("active");

    // Add margin only when navbar is open
    if (linkList.classList.contains("active")) {
        links.style.marginBottom = "370px";
       
    } else {
        links.style.marginBottom = "0px"; // Reset when closed
    }
});


let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds



// Increase numbers


function animateNumbers() {
    const counters = document.querySelectorAll(".number");

    counters.forEach(counter => {
        let target = parseInt(counter.getAttribute("data-number"));
        let count = 0;
        let speed = target / 150; 

        function updateCount() {
            count += Math.ceil(speed);
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            counter.textContent = count;
        }

        let interval = setInterval(updateCount, 50); 
    });
}

// Initialize animation when the page loads
window.onload = function() {
    AOS.init();
    animateNumbers();
};
