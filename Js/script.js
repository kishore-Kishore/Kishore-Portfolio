
var typed  = new Typed(".text-1",{
    strings: ['<i>Quality</i> Assurance.', 'Power BI'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});















document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

