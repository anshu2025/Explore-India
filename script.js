// Counter Animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 50;
        const inc = target / speed;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update, 40);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// Testimonials Auto Change
const testimonials = [
    "Amazing experience! Highly recommended.",
    "Best travel service in India!",
    "Affordable and well organized tours."
];

let index = 0;
setInterval(() => {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial").innerText = testimonials[index];
}, 3000);

// Modalconst modal = document.getElementById("bookingModal");

function goToPackages(){
    window.location.href = "packages.html";
}


function closeModal(){
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

// Outside click close
window.onclick = function(e){
    if(e.target === modal){
        closeModal();
    }
}
<script>
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    toggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
</script>

