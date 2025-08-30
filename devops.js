document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    console.log("Form Submitted:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }

    alert("Form submitted successfully!");

    this.reset();
});
