// import './css/style.css'
import cipher from './js/cipher.js'

// const encodedMessage = cipher.encode()

const messageInput = document.getElementById('message');
const offsetInput = document.getElementById('offset');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');
const cryptedMessage = document.getElementById('crypted-message');
const resultDiv = document.getElementById('result');


function updateResults() {
    const offset = parseInt(offsetInput.value);
    const message = messageInput.value;

    if (encryptButton.classList.contains('active')) {
        // Checking if the offset number is a positive integer
        if (offset < 0 || !Number.isInteger(offset)) {
            // cryptedMessage.textContent = 'Offset must be a positive integer';
            alert('Offset must be a positive integer');
            return;
        }

        const encodedMessage = cipher.encode(offset, message);
        cryptedMessage.textContent = `Your encrypted message is: "${encodedMessage}"`;
    } else if (decryptButton.classList.contains('active')) {
        // Checking if the offset number is a positive integer
        if (offset < 0 || !Number.isInteger(offset)) {
            // cryptedMessage.textContent = 'Offset must be a positive integer';
            alert('Offset must be a positive integer');
            return;
        }

        const decodedMessage = cipher.decode(offset, message);
        cryptedMessage.textContent = `Your decrypted message is: "${decodedMessage}"`;
    }

    resultDiv.style.display = 'block';
}

messageInput.addEventListener('input', updateResults);
offsetInput.addEventListener('input', updateResults);


encryptButton.addEventListener('click', () => {
    encryptButton.classList.add('active');
    decryptButton.classList.remove('active');
    updateResults();
});

decryptButton.addEventListener('click', () => {
    decryptButton.classList.add('active');
    encryptButton.classList.remove('active');
    updateResults();
});