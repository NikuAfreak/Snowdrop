// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.getElementById('contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate the form (you can customize this part)
        if (name && email && subject && message) {
            // Create an object to store the form data
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date().toISOString() // Optional: Store the submission time
            };

            // Save the form data in localStorage
            localStorage.setItem('contactFormData', JSON.stringify(formData));

            // Optionally, show a confirmation message or perform any other action
            alert('Your feedback has been submitted successfully.');

            // Optionally, reset the form
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
