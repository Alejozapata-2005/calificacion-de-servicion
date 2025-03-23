// script.js
document.getElementById('ratingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    const review = {
        name: name,
        rating: rating,
        comment: comment
    };

    displayReview(review);

    // Limpiar el formulario
    document.getElementById('ratingForm').reset();
});

function displayReview(review) {
    const reviewsDiv = document.getElementById('reviews');
    const newReview = document.createElement('div');
    newReview.classList.add('review');

    newReview.innerHTML = `
        <strong>${review.name}</strong> - Calificación: ${review.rating}/5
        <p>${review.comment}</p>
    `;

    reviewsDiv.appendChild(newReview);
}