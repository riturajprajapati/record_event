
// let eventData;
// // Add event listeners for top-level document
// document.addEventListener('click', function(event) {
//     let target = event.target;
//     // let eventData = '';
//         // For other elements, store the tag name
//         eventData = 'click on ' + target.tagName.toLowerCase() + "  " + (target.id ? target.id : target.name ? target.name : target.textContent.trim().substring(0, 20)) ;
//     // console.log(eventData);
// });

// document.addEventListener('input', function(event) {
//     let target = event.target;
//     // let eventData = '';

//     // Extract information about the typed element in the top-level document
//     if (target.tagName.toLowerCase() === 'input') {
//         eventData = "'" + event.target.value + "' content typed in input field" + "  " + (target.id ? target.id : target.name ? target.name : target.textContent.trim().substring(0, 20));
//     }
//     // console.log(eventData);
// });

// // window.addEventListener('scroll', function(event) {
// //     // Record scroll events in the top-level document
// //     chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'scroll' });
// // });

// document.addEventListener('blur', function(){
//     console.log(eventData);
// },true);


// Add event listener for click events
document.addEventListener('click', function(event) {
    let target = event.target;

    // Extract relevant information about the clicked element
    const elementInfo = {
        tagName: target.tagName.toLowerCase(),
        id: target.id || null,
        className: target.className || null,
        textContent: target.textContent.trim() || null,
        // Add more properties as needed
    };

    console.log(elementInfo);
    // Send element information to the API
    sendDataToAPI(elementInfo);
});

// Function to send data to API via proxy server
function sendDataToAPI(elementInfo) {
    // Data to send to the API
    const data = {
        clickedElement: elementInfo
    };

    // Fetch options
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // Proxy server URL for development
    // const proxyUrl = 'https://dummy.restapiexample.com/api/v1/create'; // Change to your proxy server URL
    //const proxyUrl = 'https://reqres.in/api/users';
    const proxyUrl = 'https://65cdf35ac715428e8b3f9016.mockapi.io/todo';

    // Send request to the proxy server
    fetch(proxyUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response:', data);
            // Verify API response here
            if (data.success) {
                console.log('Data successfully sent to API');
            } else {
                console.error('API response indicates failure');
            }
        })
        .catch(error => {
            console.error('Error sending data to API:', error);
        });
}

// // getData.js

// fetch('https://reqres.in/api/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Parse the JSON data
//   })
//   .then(data => {
//     console.log('Data received from API:', elementInfo);
//     // Process the data further as needed
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });
