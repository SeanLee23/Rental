// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display contact data (you can replace this with actual submission logic)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Show success message (you can add animations or other effects here)
    alert('Message sent successfully!');
});
