let currentRating = 0;

// Add event listeners to star ratings
document.querySelectorAll('.star').forEach(item => {
    item.addEventListener('click', event => {
        currentRating = parseInt(event.target.getAttribute('data-rating'));
        highlightStars(currentRating);
    });
});

function highlightStars(rating) {
    document.querySelectorAll('.star').forEach(item => {
        if (parseInt(item.getAttribute('data-rating')) <= rating) {
            item.style.color = 'gold';
        } else {
            item.style.color = 'black';
        }
    });
}

function submitReview() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    if (currentRating === 0 || name.trim() === '' || commentText.trim() === '') {
        alert('Please provide your name, select a rating, and write a comment.');
        return;
    }
    const commentList = document.getElementById('commentList');
    const li = document.createElement('li');
    li.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Rating:</strong> ${currentRating} stars<br><strong>Comment:</strong> ${commentText}`;
    commentList.appendChild(li);
    // Reset rating, name, and comment field
    currentRating = 0;
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    // Reset star colors
    document.querySelectorAll('.star').forEach(item => {
        item.style.color = 'black';
    });
}
