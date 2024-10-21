// Retrieve the stored token and inject it into the website's local storage
chrome.storage.local.get(['userToken'], function (result) {
    if (result.userToken) {
        // Assuming we want to set the token in the website's local storage
        window.localStorage.setItem('userToken', result.userToken);
        console.log('Injected token into the website:', result.userToken);
    }
});