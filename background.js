chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'recordEvent') {
        // Record the event, you can save it to storage or perform other actions
        console.log('Event recorded:', message.eventType, message.value);
    }
});


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.action === 'recordEvent') {
//         // Record the event
//         console.log('Event recorded:', message.eventType, message.eventData);
//     }
// });

// window.addEventListener('message', function(event) {
//     if (event.data && event.data.action === 'recordEvent') {
//         // Record the event from iframe
//         console.log('Event recorded from iframe:', event.data.eventType, event.data.eventData);
//     }
// });
