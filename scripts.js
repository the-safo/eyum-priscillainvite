document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('hidden');
    startConfetti();
});

document.getElementById('no-button').addEventListener('click', function() {
    displayNoMessage();
});

function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = ''; // Clear any existing confetti

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

/* Add the CSS for confetti animation */
const style = document.createElement('style');
style.innerHTML = `
    .confetti-piece {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #FFC0CB; /* Pink confetti */
        animation: fall 5s linear infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    #no-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ffffff;
        padding: 20px;
        border: 2px solid #000;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    #no-popup.hidden {
        display: none;
    }
`;
document.head.appendChild(style);

function displayNoMessage() {
    const noPopup = document.createElement('div');
    noPopup.id = 'no-popup';
    noPopup.innerHTML = `
        <h2>Oh no! Maybe next time?</h2>
        <button id="close-no-popup">Close</button>
    `;
    document.body.appendChild(noPopup);

    document.getElementById('close-no-popup').addEventListener('click', function() {
        noPopup.classList.add('hidden');
    });
}
