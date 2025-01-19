function handleSubmit(event) {
    event.preventDefault();
    let question = document.getElementById('question').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    if (question && email && contact) {
        // Save submission to localStorage
        let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.push({ question, email, contact });
        localStorage.setItem('submissions', JSON.stringify(submissions));

        // Show thank-you message
        document.querySelector('.thank-you').style.display = 'block';

        // Clear input fields
        document.getElementById('question').value = '';
        document.getElementById('email').value = '';
        document.getElementById('contact').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}