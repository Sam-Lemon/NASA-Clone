document.querySelectorAll(".dropdown-toggle").forEach((button, index) => {
    button.addEventListener("click", () => {
        const dropdown = document.querySelectorAll(".dropdown")[index];
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});



