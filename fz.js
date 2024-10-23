document.getElementById('saveTokenBtn').addEventListener('click', function () {
    const token = document.getElementById('tokenInput').value;

    if (token) {
        // Store the token in local storage under the key "userToken"
        chrome.storage.local.set({ userToken: token }, function () {
            console.log('Token saved as userToken:', token);
            alert('Token saved successfully!');
            window.location.href = 'https://factorio.zone';
        });
    } else {
        alert('Please enter a token.');
    }
});