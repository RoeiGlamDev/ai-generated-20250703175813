// Get all elements
const hero = document.querySelector('.hero');
const videoGrid = document.querySelector('.video-grid');
const videoCards = document.querySelectorAll('.video-card');

// Add event listeners
hero.addEventListener('mouseover', () => {
    hero.classList.add('fade-in');
});

videoCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('fade-in');
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Add error handling
window.addEventListener('error', (event) => {
    console.error('Error:', event);
});

// Add user feedback
const feedbackButton = document.createElement('button');
feedbackButton.textContent = 'Feedback';
feedbackButton.style.position = 'fixed';
feedbackButton.style.bottom = '20px';
feedbackButton.style.right = '20px';
feedbackButton.style.background = '#ffd700';
feedbackButton.style.color = '#333';
feedbackButton.style.border = 'none';
feedbackButton.style.padding = '10px 20px';
feedbackButton.style.fontSize = '18px';
feedbackButton.style.cursor = 'pointer';

document.body.appendChild(feedbackButton);

feedbackButton.addEventListener('click', () => {
    alert('Thank you for your feedback!');
});