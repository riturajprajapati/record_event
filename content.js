// Function to add event listeners for iframes recursively
function addEventListenersToIframes(iframes) {
    iframes.forEach(function(iframe) {
        iframe.contentWindow.document.addEventListener('click', function(event) {
            let target = event.target;
            let eventData = '';

            // Extract information about the clicked element inside the iframe
            if (target.tagName.toLowerCase() === 'label') {
                eventData = 'click on ' + target.textContent.trim();
            } else if (target.tagName.toLowerCase() === 'input') {
                eventData = 'type "' + event.target.value + '" in input field';
            } else {
                // For other elements, store the tag name
                eventData = 'click on ' + target.tagName.toLowerCase();
            }
            console.log(eventData);
            // Send the event data to the background script for recording
            // chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'click', eventData: eventData });
        });

        iframe.contentWindow.document.addEventListener('input', function(event) {
            let target = event.target;
            let eventData = '';

            // Extract information about the typed element inside the iframe
            if (target.tagName.toLowerCase() === 'input') {
                eventData = "'" + event.target.value + "' content typed in input field";
            }
            console.log(eventData);
            // Send the event data to the background script for recording
            // chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'input', eventData: eventData });
        });

        // iframe.contentWindow.addEventListener('scroll', function(event) {
        //     // Record scroll events inside the iframe
        //     chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'scroll' });
        // });

        // Recursively add event listeners for nested iframes
        addEventListenersToIframes(iframe.contentWindow.document.querySelectorAll('iframe'));
    });
}

// Add event listeners for top-level iframes
addEventListenersToIframes(document.querySelectorAll('iframe'));

// Add event listeners for top-level document
document.addEventListener('click', function(event) {
    let target = event.target;
    let eventData = '';

    // Extract information about the clicked element in the top-level document
    if (target.tagName.toLowerCase() === 'label') {
        eventData = 'click on ' + target.textContent.trim() + "  " + target.id ? target.id : target.name ? target.name : null;
    } else if (target.tagName.toLowerCase() === 'input') {
        eventData = 'type "' + event.target.value + '" in input field' + "  " + target.id ? target.id : target.name ? target.name : null;;
    } else {
        // For other elements, store the tag name
        eventData = 'click on ' + target.tagName.toLowerCase() ;
    }
    console.log(eventData);
    // Send the event data to the background script for recording
    // chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'click', eventData: eventData });
});

document.addEventListener('input', function(event) {
    let target = event.target;
    let eventData = '';

    // Extract information about the typed element in the top-level document
    if (target.tagName.toLowerCase() === 'input') {
        eventData = "'" + event.target.value + "' content typed in input field";
    }
    console.log(eventData);
    // Send the event data to the background script for recording
    // chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'input', eventData: eventData });
});

// window.addEventListener('scroll', function(event) {
//     // Record scroll events in the top-level document
//     chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'scroll' });
// });

// window.addEventListener('click', function(event) {
//     let target = event.target;
//     let eventData = '';

//     // Extract information about the clicked element in the top-level document
//     if (target.tagName.toLowerCase() === 'label') {
//         eventData = 'click on ' + target.textContent.trim();
//     } else if (target.tagName.toLowerCase() === 'input') {
//         eventData = 'type "' + event.target.value + '" in input field';
//     } else {
//         // For other elements, store the tag name
//         eventData = 'click on ' + target.tagName.toLowerCase();
//     }
//     console.log(eventData);
//     // Send the event data to the background script for recording
//     // chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'click', eventData: eventData });
// });