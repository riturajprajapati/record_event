// document.getElementById('showMessagesBtn').addEventListener('click', function() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { action: 'showMessages' });
//     });
// });

document.getElementById('showMessagesBtn').addEventListener('click', function() {
    // Send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'showMessagesFromPopup' });
    });
});
