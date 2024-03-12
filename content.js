// let eventData;

// // Add event listeners for top-level document
// document.addEventListener('click', function (event) {
//     let target = event.target;
//     // let eventData = '';
//     // For other elements, store the tag name
//     eventData = 'click on ' + target.tagName.toLowerCase() + "  " + (target.id ? target.id : target.name ? target.name : target.textContent.trim().substring(0, 20));
//     console.log(eventData);
//     sendDataToAPI(eventData);
// });

// document.addEventListener('input', function (event) {
//     let target = event.target;
//     // let eventData = '';

//     // Extract information about the typed element in the top-level document
//     if (target.tagName.toLowerCase() === 'input') {
//         eventData = "'" + event.target.value + "' content typed in input field" + "  " + (target.id ? target.id : target.name ? target.name : target.textContent.trim().substring(0, 20));
//     }
//     console.log(eventData);
// });




// // window.addEventListener('scroll', function(event) {
// //     // Record scroll events in the top-level document
// //     chrome.runtime.sendMessage({ action: 'recordEvent', eventType: 'scroll' });
// // });

// // document.addEventListener('blur', function(){
// //     console.log(eventData);
// // },true);


// // // Add event listener for click events
// // document.addEventListener('click', function(event) {
// //     let target = event.target;

// //     // Extract relevant information about the clicked element
// //     const elementInfo = {
// //         tagName: target.tagName.toLowerCase(),
// //         id: target.id || null,
// //         className: target.className || null,
// //         textContent: target.textContent.trim() || null,
// //         // Add more properties as needed
// //     };

// //     console.log(elementInfo);
// //     // Send element information to the API
// //     sendDataToAPI(elementInfo);
// // });

// // Function to send data to API via proxy server
// function sendDataToAPI(elementInfo) {
//     // Data to send to the API
//     const data = {
//         name : elementInfo
//     };

//     // Fetch options
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };

//     // Proxy server URL for development
//     // const proxyUrl = 'https://dummy.restapiexample.com/api/v1/create'; // Change to your proxy server URL
//     //const proxyUrl = 'https://reqres.in/api/users';
//     // const proxyUrl = 'https://65cdf35ac715428e8b3f9016.mockapi.io/todo';
//         const proxyUrl = 'http://127.0.0.1:3000/students';

//     // Send request to the proxy server
//     fetch(proxyUrl, options)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('API response:', data);
//             // Verify API response here
//             if (data.success) {
//                 console.log('Data successfully sent to API');
//             } else {
//                 console.error('API response indicates failure');
//             }
//         })
//         .catch(error => {
//             console.error('Error sending data to API:', error);
//         });
// }


//////////////////////////////////////////////////////

function createElementOnUI(elementType, elementProperty) {
  const ele = document.createElement(elementType);

  if (elementProperty.id != undefined) {
    ele.id = elementProperty.id;
  }
  if (elementProperty.className != undefined) {
    ele.className = elementProperty.className;
  }
  if (elementProperty.backgroundImage != undefined) {
    ele.style.backgroundImage = elementProperty.backgroundImage;
  }
  if (elementProperty.display != undefined) {
    ele.style.display = elementProperty.display;
  }
  if (elementProperty.alignItems != undefined) {
    ele.style.alignItems = elementProperty.alignItems;
  }
  if (elementProperty.width != undefined) {
    ele.style.width = elementProperty.width;
  }
  if (elementProperty.src != undefined) {
    ele.src = elementProperty.src;
  }
  if (elementProperty.alignItems != undefined) {
    ele.style.alignItems = elementProperty.alignItems;
  }
  if (elementProperty.textContent != undefined) {
    ele.textContent = elementProperty.textContent;
  }
  if (elementProperty.href != undefined) {
    ele.href = elementProperty.href;
  }
  return ele;
}

function createHeader() {

  let divPopupHeaderProperty = {};
  divPopupHeaderProperty.className = 'xpath-popup-header';
  divPopupHeaderProperty.display = 'flex';
  divPopupHeaderProperty.alignItems = 'center';
  divPopupHeaderProperty.id = 'xpath-popup-header';
  const popupHeader = createElementOnUI('div', divPopupHeaderProperty);

  let imgLogoProperty = {};
  imgLogoProperty.src = `chrome-extension://${chrome.runtime.id}/img/logo.png`

  imgLogoProperty.className = 'img';
  imgLogoProperty.width = '60px';
  imgLogoProperty.id = 'logo-image';
  const logoImage = createElementOnUI('img', imgLogoProperty);

  let divTitleProperty = {};
  divTitleProperty.className = 'find-my-locator black-text';
  divTitleProperty.textContent = 'Design My Test Case';
  divTitleProperty.alignItems = 'center';
  divTitleProperty.id = 'header-text';
  const title = createElementOnUI('div', divTitleProperty);

  let punchLineProperty = {};
  punchLineProperty.className = 'add-click-use';
  punchLineProperty.textContent = 'Add->click->use';
  punchLineProperty.alignItems = 'center';
  punchLineProperty.id = 'punch-line';
  const punchLine = createElementOnUI('div', punchLineProperty);

  let buttonContainerProperty = {};
  buttonContainerProperty.className = 'button-container';
  const buttonContainer = createElementOnUI('div', buttonContainerProperty);

  let minimizeButtonProperty = {};
  minimizeButtonProperty.className = 'minimize-popup-button';
  minimizeButtonProperty.textContent = '–';
  minimizeButtonProperty.id = 'minimize-popup-button';
  minimizeButton = createElementOnUI('button', minimizeButtonProperty);

  let maximizeButtonProperty = {};
  maximizeButtonProperty.className = 'maximize-popup-button';
  maximizeButtonProperty.textContent = '+';
  maximizeButtonProperty.display = 'none'; // Initially hidden
  maximizeButtonProperty.id = 'maximize-popup-button';
  maximizeButton = createElementOnUI('button', maximizeButtonProperty);

  let closeButtonProperty = {};
  closeButtonProperty.id = 'close-popup-button';
  closeButtonProperty.className = 'close-popup-button';
  closeButtonProperty.textContent = 'X';
  closeButtonProperty.id = 'close-popup-button';
  closeButton = createElementOnUI('button', closeButtonProperty);


  const anchorElement1 = document.createElement('a');
  anchorElement1.target = "_blank";
  anchorElement1.href = 'https://devqaexpert.com/findmylocator-help/';

  let helpImageProperty = {};
  helpImageProperty.src = `chrome-extension://${chrome.runtime.id}/img/help-1751.png`;
  helpImageProperty.className = 'help_nav_bar';
  helpImageProperty.id = 'help_nav_bar';
  const helpImage = createElementOnUI('img', helpImageProperty);

  helpImage.addEventListener('click', function () {
    window.open(anchorElement1.href, '_blank');
  });

  let bugReportproperty = {};
  bugReportproperty.src = `chrome-extension://${chrome.runtime.id}/img/bug.png`;

  bugReportproperty.className = 'bug-report';

  bugReportproperty.width = '25px';
  bugReportproperty.id = 'bug-report';
  const bugReport = createElementOnUI('img', bugReportproperty);
  bugReport.style.width = '60px';
  bugReport.style.cursor = 'pointer'; // Add pointer cursor for hover effect


  // Add hover effect
  bugReport.addEventListener('mouseover', function () {
    bugReport.setAttribute('title', 'Report Bug'); // Display 'hiiii' on hover
  });
  // Create an anchor element
  const linkToGoogle = document.createElement('a');

  // Set the URL to go to Google
  linkToGoogle.href = 'https://devqaexpert.com/find_my_locator/report-a-bug/';
  linkToGoogle.target = '_blank'; // Opens in a new tab

  // Append the image to the anchor element
  linkToGoogle.appendChild(bugReport);


  // Append the image element to the anchor element
  anchorElement1.appendChild(helpImage);

  // Append the anchor element to the bodyBlock
  // bodyBlock.appendChild(anchorElement);
  buttonContainer.appendChild(linkToGoogle);
  buttonContainer.appendChild(anchorElement1);
  // buttonContainer.appendChild(helpImage);
  buttonContainer.appendChild(minimizeButton);
  buttonContainer.appendChild(maximizeButton);
  buttonContainer.appendChild(closeButton);
  popupHeader.appendChild(logoImage);
  popupHeader.appendChild(title);
  popupHeader.appendChild(punchLine);
  popupHeader.appendChild(buttonContainer);
  return popupHeader;

}

//   function createBodyContent() {
//     let popupContentProperty = {};
//     popupContentProperty.className = 'xpath-popup-content';
//     popupContentProperty.id = 'xpath-popup-content';
//     const popupContent = createElementOnUI('div', popupContentProperty);

//     return popupContent;
//   }

function createBodyContent() {
  // // Create the popup content div
  // let popupContentProperty = {};
  // popupContentProperty.className = 'xpath-popup-content';
  // popupContentProperty.id = 'xpath-popup-content';
  // const popupContent = createElementOnUI('div', popupContentProperty);

  // // Create the 'Start' button
  // const startButtonProperty = {};
  // startButtonProperty.textContent = 'Start';
  // startButtonProperty.id = 'start-button'; // Add id to the 'Start' button
  // startButtonProperty.className = 'button'; // Add class to the 'Start' button
  // const startButton = createElementOnUI('button', startButtonProperty);
  // startButton.style.marginRight = '50px';
  // startButton.style.border ='solid #060606 1px';
  // startButton.style.width='60px';
  // startButton.style.height='30px';

  // // Create the 'Stop' button
  // const stopButtonProperty = {};
  // stopButtonProperty.textContent = 'Stop';
  // stopButtonProperty.id = 'stop-button'; // Add id to the 'Stop' button
  // stopButtonProperty.className = 'button'; // Add class to the 'Stop' button
  // const stopButton = createElementOnUI('button', stopButtonProperty);
  // stopButton.style.marginRight = '50px';
  // stopButton.style.border = 'solid #060606 1px';
  // stopButton.style.width='60px';
  // stopButton.style.height='30px';

  // // Append buttons to the button container
  // popupContent.appendChild(startButton);
  // popupContent.appendChild(stopButton);

  // return popupContent;

  let popupContentProperty = {};
  popupContentProperty.className = 'xpath-popup-content';
  popupContentProperty.id = 'xpath-popup-content';
  const popupContent = createElementOnUI('div', popupContentProperty);

  // Create a container div to hold both buttons
  let buttonContainerProperty = {};
  buttonContainerProperty.className = 'buttoned-container'; // Add class to the button container
  buttonContainerProperty.id = 'buttoned-container'; // Add id to the button container
  const buttonContainer = createElementOnUI('div', buttonContainerProperty);
  buttonContainer.style.padding = '1px';
  buttonContainer.style.margin = '3px';
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.height = '100%';

  // Create the 'Start' button
  const startButtonProperty = {};
  startButtonProperty.textContent = 'Start';
  startButtonProperty.id = 'start-button'; // Add id to the 'Start' button
  startButtonProperty.className = 'button'; // Add class to the 'Start' button
  const startButton = createElementOnUI('button', startButtonProperty);
  startButton.style.marginRight = '50px';
  startButton.style.border = 'solid #060606 1px';
  startButton.style.width = '60px';
  startButton.style.height = '30px';
  startButton.addEventListener('click', startButtonClickHandler);

  // Create the 'Stop' button
  const stopButtonProperty = {};
  stopButtonProperty.textContent = 'Stop';
  stopButtonProperty.id = 'stop-button'; // Add id to the 'Stop' button
  stopButtonProperty.className = 'button'; // Add class to the 'Stop' button
  const stopButton = createElementOnUI('button', stopButtonProperty);
  stopButton.style.marginRight = '50px';
  stopButton.style.border = 'solid #060606 1px';
  stopButton.style.width = '60px';
  stopButton.style.height = '30px';

  const generateButtonProperty = {};
  generateButtonProperty.textContent = 'Generate';
  generateButtonProperty.id = 'generate-button'; // Add id to the 'Stop' button
  generateButtonProperty.className = 'button'; // Add class to the 'Stop' button
  const generateButton = createElementOnUI('button', generateButtonProperty);
  generateButton.style.marginRight = '20px';
  generateButton.style.border = 'solid #060606 1px';
  generateButton.style.width = '80px';
  generateButton.style.height = '30px';


  // Append buttons to the button container
  buttonContainer.appendChild(startButton);
  buttonContainer.appendChild(stopButton);
  buttonContainer.appendChild(generateButton);

  // Append the button container to the popup content
  popupContent.appendChild(buttonContainer);

  // Add CSS properties to center the button container
  // $('#buttoned-container').css({
  //     'display': 'flex',
  //     'justify-content': 'center',
  //     'align-items': 'center',
  //     'height': '100%', // Adjust this based on your layout
  // });

  return popupContent;
}

// Rest of the code remains the same...


function createFooter() {

  let lineProperty1 = {};
  lineProperty1.className = 'hr1';
  lineProperty1.id = 'hr1';
  const line1 = createElementOnUI('hr', lineProperty1);
  popupContent.appendChild(line1);

  // let poweredByProperty1 = {};
  // poweredByProperty1.className = 'powered-by-lable1';
  // poweredByProperty1.id = 'powered-by-lable1';
  // poweredByProperty1.textContent = 'Perform right click > Find my locator to get the locator of disable & navigating element.';
  // const poweredBy1 = createElementOnUI('div', poweredByProperty1);
  // popupContent.appendChild(poweredBy1);

  let footerProperty = {};
  footerProperty.className = 'xpath-popup-footer';
  footerProperty.id = 'xpath-popup-footer';
  const footerContent = createElementOnUI('div', footerProperty);

  let poweredByProperty = {};
  poweredByProperty.className = 'powered-by-lable';
  poweredByProperty.id = 'powered-by-lable';
  poweredByProperty.textContent = 'Powered By DevQAExpert Solution Pvt. Ltd.';
  const poweredBy = createElementOnUI('div', poweredByProperty);

  let websitePropertydiv = {};
  websitePropertydiv.className = 'website-lable';
  websitePropertydiv.id = 'website-lable1';
  const websitePropertydiv1 = createElementOnUI('div', websitePropertydiv);

  let websiteProperty = {};
  websiteProperty.className = 'website-lable';
  websiteProperty.id = 'website-lable';
  // websiteProperty.target="_blank";
  websiteProperty.textContent = ' www.devqaexpert.com';
  websiteProperty.href = 'https://devqaexpert.com/';
  const websiteblog = createElementOnUI('a', websiteProperty);
  websiteblog.target = "_blank";
  websitePropertydiv1.appendChild(websiteblog);


  let tncProperty = {};
  tncProperty.className = 'tnc-lable';
  tncProperty.id = 'tnc-lable';
  tncProperty.textContent = '*T&C apply';
  const tnc = createElementOnUI('div', tncProperty);

  let copyrightProperty = {};
  copyrightProperty.className = 'copyright-lable';
  copyrightProperty.id = 'copyright-lable';
  copyrightProperty.textContent = 'Copyright,2023';
  const copyright = createElementOnUI('div', copyrightProperty);

  let versionProperty = {};
  versionProperty.className = 'version-lable';
  versionProperty.id = 'version-lable';
  versionProperty.textContent = 'Version 1.0';
  const versionUI = createElementOnUI('div', versionProperty);

  footerContent.appendChild(poweredBy);
  footerContent.appendChild(websitePropertydiv1);
  footerContent.appendChild(tnc);
  footerContent.appendChild(copyright);
  footerContent.appendChild(versionUI);

  return footerContent;
}


function createPopup() {
  //help icon for text locator bydefaulf hidden

  if (document.getElementById('xpath-popup')) return;
  // Create popup elements

  let divPopupProperty = {};
  divPopupProperty.id = 'xpath-popup';
  divPopupProperty.className = 'xpath-popup';
  divPopupProperty.backgroundImage = `url("chrome-extension://${chrome.runtime.id}/img/34092971.jpg")`;
  const popup = createElementOnUI('div', divPopupProperty);

  popupHeader = createHeader();
  popupContent = createBodyContent();
  popupFooter = createFooter();
  popup.appendChild(popupHeader);
  popup.appendChild(popupContent);
  popup.appendChild(popupFooter);

  // Append popup to body
  document.body.appendChild(popup);

  //Event Listeners
  closeButton.addEventListener('click', function (e) {
    e.stopPropagation();
    try {

      if (document.getElementById('xpath-popup') != null) {
        popup.parentNode.removeChild(popup);
        extensionState = "OFF";
        chrome.storage.sync.set({ extensionState: extensionState }, function () {
          console.log('Extension state is set off for storage.');
        });
      }
    }
    catch (e) { }
  });

  // closeButton.addEventListener('click', function (e) {
  //   e.stopPropagation();
  //   try {
  //     if (popup != null) {
  //       popup.parentNode.removeChild(popup);
  //       info=chrome.management.getSelf;
  //       // Get the extension ID
  //       chrome.management.getSelf(function(info) {
  //         if (info.id) {
  //           // Disable the extension by its ID
  //           chrome.management.setEnabled(info.id, false, function() {
  //             if (chrome.runtime.lastError) {
  //               console.error("Failed to disable extension: " + chrome.runtime.lastError);
  //             } else {
  //               console.log("Extension is disabled.");
  //             }
  //           });
  //         }
  //       });
  //     }
  //   } catch (e) {
  //   }
  // });

  minimizeButton.addEventListener('click', function (e) {
    e.stopPropagation();
    try {
      let popup = document.getElementById('xpath-popup');
      popup.style.width = '460px'; // Maintain the original width
      popup.style.height = '50px';
      popup.style.bottom = '10px';
      popup.style.right = '10px';
      popup.style.top = 'auto';
      popupContent.style.display = 'none';
      maximizeButton.style.display = 'inline-block';
      minimizeButton.style.display = 'none';
      minimizedState = true;
    }
    catch (e) { }
  });

  maximizeButton.addEventListener('click', function (e) {
    // e.preventDefault();
    e.stopPropagation();
    popup.style.width = '460px'; // Set it back to its original width
    popup.style.height = 'auto'; // Set it back to its original height
    popup.style.top = '10px'; // Set it back to its original top position
    popup.style.right = '10px'; // Set it back to its original right position
    popup.style.bottom = 'auto'; // Reset the bottom property
    popupContent.style.display = 'block'; // Display the content again
    maximizeButton.style.display = 'none';
    minimizeButton.style.display = 'inline-block';
    minimizedState = false;
  });

  //   const xpathSection = createSection('XPath:', 'xpath-locator-text', 'xpath-copy-button', 'Copy XPath');
  // const cssSection = createSection('CSS Locator:', 'css-locator-text', 'css-copy-button', 'Copy CSS');

  // addCopyEventListener(xpathSection.querySelector('#xpath-copy-button'), xpathSection.querySelector('#xpath-locator-text'));
  // addCopyEventListener(cssSection.querySelector('#css-copy-button'), cssSection.querySelector('#css-locator-text'));


  addDragEventListener(popup, popupHeader);

  // function createSection(titleText, textId, buttonId, buttonText) {
  //   const section = document.createElement('div');
  //   section.className = 'locator-section';

  //   const title = document.createElement('p');
  //   title.textContent = titleText;

  //   const text = document.createElement('p');
  //   text.id = textId;

  //   const button = document.createElement('button');
  //   button.id = buttonId;
  //   button.textContent = buttonText;

  //   section.appendChild(title);
  //   section.appendChild(text);
  //   section.appendChild(button);

  //   return section;
  // }

  function createSection(titleText, textId, buttonId, buttonText) {
    const section = document.createElement('div');
    section.className = 'locator-section';

    const title = document.createElement('p');
    title.textContent = titleText;

    const text = document.createElement('p');
    text.id = textId;

    const button = document.createElement('button');
    button.id = buttonId;
    button.textContent = buttonText;

    section.appendChild(title);
    section.appendChild(text);
    section.appendChild(button);

    return section;
  }

  function addCopyEventListener(button, textElement) {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Stop event propagation
      e.preventDefault();  // Prevent the default click action
      copyToClipboard(textElement.textContent);
    });
  }

  function addDragEventListener(popup, header) {
    let isDragging = false;
    let startX, startY, initialMouseX, initialMouseY;

    header.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = popup.offsetLeft;
      startY = popup.offsetTop;
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
    });

    function mousemove(e) {
      if (isDragging) {
        const dx = e.clientX - initialMouseX;
        const dy = e.clientY - initialMouseY;
        popup.style.left = startX + dx + 'px';
        posLeft = popup.style.left;

        if ((startY + dy) < 0) {
          popup.style.top = 5 + 'px';
          posTop = popup.style.top;

        } else {
          popup.style.top = startY + dy + 'px';
          posTop = popup.style.top;
        }
      }
    }

    function mouseup() {
      isDragging = false;
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    }
  }

  function copyToClipboard(text) {
    if (text) {
      navigator.clipboard.writeText(text).then(function () {
        console.log('Copying to clipboard was successful!');
      }, function (err) {
        //console.error('Could not copy text: ', err);
      });
    } else {
      //console.error('No text available to copy');
    }
  }

  //Apply dynamic css. 
  applyCssInPopup();
}

function applyCssInPopup() {
  $(document).ready(function () {
    $('.suggested-variable-text').attr('style', 'color:black !important; display:inline; padding:1px; width:210px !important; min-width: 210px !important; height: 20px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 14px; background: #FFFFFF; border-radius: 10px; margin-bottom:0px; box-sizing: content-box;');
    // $('.xpath-popup-content').css('padding', '1px');
    // $('.specific-attribute-div').attr('style', 'position: relative; display: flex; align-items: center; width: 456.400px; height: 41.600px;');
    // $('.specific-attribute-lable1').attr('style', 'display: inline-block; position: relative; width: 180px; height: 13px; margin-left: 20px; top: 1px; color: #FFFFFF;');
    $('.specific-attribute-lable').attr('style', 'display: inline-block; position: relative; width: 150px; height: 20px; top: -8px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 14px; line-height: 24px; text-transform: uppercase; color: #FFFFFF;');
    $('.if-any').attr('style', 'display: inline-block; position: absolute; width: 50px; height: 25px; margin-left: 60px; top: 11px !important; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 12px; line-height: 20px; color: #FFFFFF; left: 0;');
    // $('.help_specific_attribute').attr('style', 'display: inline-block; position: relative; width: 11px; height: 11px; left: 2px; bottom: 14px; margin-left: 3px;');
    $('.specific-attribute-text').attr('style', 'color: black !important; display: inline-block; padding:1px; width:210px !important; min-width: 210px !important; height: 20px; background: #FFFFFF; border-radius: 10px; bottom: 14px; vertical-align: middle; box-sizing: content-box; font-family: "Futura Md BT"; margin-bottom:0px;');
    // $('.custom-tooltip1').attr('style', 'position: absolute; background-color: #ffffff; color: #171212; text-align: left; padding-left: 10px; width: 400px; border-radius: 4px; z-index: 1000; visibility: hidden; font-size: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: visibility 0.2s; border: 1px solid #FFC700; bottom: -37px; line-height: 1.1; font-family: "Futura Md BT";');
    $('.suggested-variable-label').attr('style', 'display: inline-block; position: relative; width: 180px; height: 20px; margin-left: 20px; top: 1px; color: #FFFFFF; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 11px; line-height: 24px; text-transform: uppercase;');
    // $('.copy-suggested-variable').attr('style', 'display: inline-block; position: relative; width: 13px; height: 16px; right: 25px; top: -1px; border: none; padding: 0px; vertical-align: middle;');
    // $('.custom-tooltip4').attr('style', 'position: absolute; background-color: #ffffff; color: #171212; text-align: left; padding-left: 5px; width: 55px; border-radius: 4px; z-index: 9999; visibility: hidden; font-size: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: visibility 0.2s; border: 1px solid #FFC700; margin-top: 15px; line-height: 1.1; font-family: "Futura Md BT"; font-weight: 400; letter-spacing: 0px;');
    // $('.hr').attr('style', 'margin-top: 5px; margin-bottom: 0px; background-color: #c9c9c9;');
    // $('.custom-tooltip2').attr('style', 'position: absolute; background-color: #ffffff; color: #171212; text-align: left; padding-left: 10px; width: 400px; border-radius: 4px; z-index: 9999; visibility: hidden; font-size: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: visibility 0.2s; border: 1px solid #FFC700; margin-top: -50px; line-height: 1.1; font-family: "Futura Md BT";');
    // $('.locator-block').attr('style', 'position: relative; top: 1px; width: 30%; height: 90px; margin: auto; margin-left: 10px; margin-right: 10px; background-color: transparent; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 5px; z-index: 1000; align-items: center;');
    // $('.header-block').attr('style', 'position: relative; display: inline-block; top: 1px; width: 100%; height: 20px; margin: auto; margin-left: 10px; margin-right: 10px; background-color: transparent; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); z-index: 1000;');
    $('.header-text').attr('style', 'display: inline-block; flex: 1; height: 15px; left: auto; right: 20px; top: 150px; font-family: Futura Md BT !important; font-style: bold; font-weight: 400; font-size: 15px; line-height: 18px; color: #FFFFFF !important;');
    // $('.header-help').attr('style', 'display: inline-block; width: 11px; height: 11px; left: 395px; top: 155px; margin-left: 5px;');
    // $('.custom-tooltip').attr('style', 'position: absolute; background-color: #ffffff; color: #171212; text-align: left; padding-left: 10px; width: 400px; border-radius: 4px; z-index: 9999; visibility: hidden; font-size: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: visibility 0.2s; border: 1px solid #FFC700; margin-top: -53px; line-height: 1.1; font-family: "Futura Md BT";');
    // $('.locator-body-block').attr('style', 'display: inline-block; top: 220px; width: 400px; height: 68px; margin-left: 30px; margin-top: 0px; background-repeat: no-repeat; background-size: auto;');
    // $('.locator-css-div-block').attr('style', 'display: flex; align-items: center; top: 220px; width: 82%; height: 25px; margin: auto; margin-left: 10px; margin-right: 10px; margin-top: 5px; background-color: transparent; z-index: 1000;');
    $('.css-label').attr('style', 'display: inline-block; width: 37px; height: 14px; left: 145px; top: 265px; margin-left: 30px; margin-top: 5px; font-family: Futura Md BT !important; font-style: bold; font-weight: 400; font-size: 14px; line-height: 19px; color: #FFC700;');

    $('.css-text').attr('style', 'color:black !important; box-sizing: border-box; padding:1px; width: 250px !important; height: 18px; left: 210px; top: 262px; display: inline-block; margin-top: 10px; margin-left: 10px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 14px; background: #FFFFFF; border-radius: 7px; border: 1px solid #FFC700; vertical-align: sub; margin-bottom:0px');
    // $('.css-copy').attr('style', 'display: inline-block; position: absolute; width: 13px; height: 20px; left: 370px; top: 37px; margin-left: 15px; background-color: transparent; border: none; padding: 0px;');
    // $('.custom-tooltip3').attr('style', 'position: absolute; background-color: #ffffff; color: #171212; text-align: left; padding-left: 5px; width: 55px; border-radius: 4px; z-index: 9999; visibility: hidden; font-size: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); transition: visibility 0.2s; border: 1px solid #FFC700; margin-top: -50px; line-height: 1.1; font-family: "Futura Md BT"; font-weight: 400; letter-spacing: 0px;');
    // $('.locator-xpath-div-block').attr('style', 'display: inline-block; top: 210px; width: 84%; height: 15px; margin-left: 10px; margin-right: 7px; background-color: transparent; z-index: 1000;');
    $('.xpath-label').attr('style', 'display: inline-block; width: 37px; height: 14px; left: 145px; top: 265px; margin-left: 30px; margin-top: 10px; font-family: Futura Md BT !important; font-style: bold; font-weight: 400; font-size: 14px; line-height: 19px; color: #FFC700;');
    $('.xpath-text').attr('style', 'color:black !important; box-sizing: border-box; padding:1px; width: 250px !important; height: 18px; left: 210px; top: 262px; display: inline-block; margin-top: 10px; margin-left: 10px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 14px; background: #FFFFFF; border-radius: 7px; border: 1px solid #FFC700; vertical-align: sub;');
    // $('.xpath-copy').attr('style', 'display: inline-block; position: absolute; width: 13px; height: 20px; left: 370px; top: 67.5px; margin-left: 15px; background-color: transparent; border: none; padding: 0px;');
    // $('.locator-block2').attr('style', 'position: relative; top: 1px; width: 30%; height: 90px; margin: auto; margin-left: 10px; margin-right: 10px; background-color: transparent; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 5px; z-index: 1000; align-items: center;');
    // $('.locator-block3').attr('style', 'position: relative; top: 1px; width: 30%; height: 90px; margin: auto; margin-left: 10px; margin-right: 10px; background-color: transparent; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 5px; z-index: 1000; align-items: center;');
    // $('.locator-block4').attr('style', 'position: relative; top: 1px; width: 30%; height: 90px; margin: auto; margin-left: 10px; margin-right: 10px; background-color: transparent; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 5px; z-index: 1000; align-items: center;');
    // $('.xpath-popup').attr('style', 'position: fixed; top: 10px; right: 10px; width: 460px; height: auto; border: 1px solid #ccc; background-color: #f9f9f9; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 5px; z-index: 99999;');
    // $('.xpath-popup-header').attr('style', 'display: flex; width: 460px; height: 45px; padding: 5px; background-color: #f0f0f0; border-bottom: 1px solid #ccc; border-radius: 5px 5px 0 0; width: 100%; box-sizing: border-box;');
    $('.black-text').attr('style', 'width: 300px; height: 15px; left: 0; top: 23px; font-family: Futura Md BT !important; font-style: normal; font-weight: 500; font-size: 18px; line-height: 21px; text-transform: uppercase; color: #000000; display: flex; justify-content: center; align-items: center;');
    $('.add-click-use').attr('style', 'position: absolute; width: 95px; height: 17px; left: 170px; top: 29px; font-family: Calibri !important; font-style: normal; font-weight: 400; font-size: 10px; line-height: 20px; text-transform: uppercase; color: #606060; display: flex; justify-content: center; align-items: center;');
    // $('.button-container').attr('style', 'display: flex; gap: 0; justify-content: flex-end; width: 50px; margin-left: 20px;');


    // $('.help_nav_bar').attr('style', 'width: 18px; height: 18px; margin-top: 5px; background-color: transparent;');

    // $('.minimize-popup-button').attr('style', 'position: sticky; width: 30px; height: 27px; left: calc(50% - 10px/2 + 248.5px); margin-top: 0px; font-family: Futura Md BT !important; font-style: normal; font-weight: 900; font-size: 18px; line-height: 24px; text-transform: uppercase; color: #000000; padding: -10px; text-align: center;');
    // $('.button-container button').hover(function () {
    //   $(this).css('color', 'red');
    // });
    // $('.maximize-popup-button').attr('style', 'position: sticky; width: 30px ; height: 27px; left: calc(50% - 10px/2 + 248.5px); margin-top: 2px; font-family: Futura Md BT !important; font-style: normal; font-weight: 900 ; font-size: 18px ; line-height: 24px ; text-transform: uppercase; color: #000000 ; padding: -10px ; text-align: center ;');


    // $('.button-container button').attr('style', 'background: none; border: none; font-size: 16px; cursor: pointer;');
    // $('.close-popup-button').attr('style', 'width: 1px; height: 25px; right: 0; margin-top: 2px; font-family: Futura Md BT !important; font-style: normal; font-weight: 900; font-size: 18px; line-height: 24px; text-transform: uppercase; color: #000000; padding-left: 10px; padding: -10px; overflow: visible;');

    // $('.xpath-popup-footer').attr('style', 'display: flex; bottom: 0; height: 50px; width: 460px; margin-top: 5px; background-color: #f0f0f0; border-bottom: 1px solid #ccc; border-radius: 0 0 5px 5px; text-align: center; width: 100%; box-sizing: border-box; letter-spacing: 0px;');
    $('.powered-by-lable').attr('style', 'display: inline-block; position: relative; height: 15px; left: 130px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 11px; line-height: 24px; color: #000000; justify-content: center; align-items: center;');
    $('.powered-by-lable1').attr('style', 'letter-spacing :0px; padding-left : 30px; display: inline-block; position: relative; top: 3px; height: 15px; right: 10px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 12px !important; line-height: 24px !important; color: #f5e8e8 !important;');
    $('.website-lable').attr('style', 'display: inline-block; position: relative; top: 6px; height: 15px; right: 10px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 11px; line-height: 24px; color: #000000; justify-content: center; align-items: center; text-decoration: underline;');
    $('.tnc-lable').attr('style', 'display: inline-block; position: relative; top: 27px; height: 15px; right: 300px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 9px; line-height: 24px; color: #000000; justify-content: center; align-items: center;');
    $('.copyright-lable').attr('style', 'display: inline-block; position: relative; top: 27px; height: 15px; right: 140px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 9px; line-height: 24px; color: #000000; justify-content: center; align-items: center;');
    $('.version-lable').attr('style', 'display: inline-block; position: relative; top: 27px; height: 15px; left: 8px; font-family: Futura Md BT !important; font-style: normal; font-weight: 400; font-size: 9px; line-height: 24px; color: #000000; justify-content: center; align-items: center;');
    // // $('.xpath-popup').attr('style', 'left: ' + posLeft + 'px; top: ' + posTop + 'px;');

  });

  //$('.xpath-popup-content').css('position', 'static');
  $('.xpath-popup-content').css('padding', '1px');
  //$('.xpath-popup-content').css('box-sizing', 'content-box');
  //$('.xpath-popup-content').css('line-height', '1.3');
  // ---------------------------
  $('.specific-attribute-div').css('position', 'relative');//-----------
  $('.specific-attribute-div').css('display', 'flex');//------
  $('.specific-attribute-div').css('align-items', 'center');//-----
  $('.specific-attribute-div').css('width', '456.400px');
  $('.specific-attribute-div').css('height', '41.600px');

  $('.specific-attribute-lable1').css('display', 'inline-block');
  $('.specific-attribute-lable1').css('position', 'relative');
  $('.specific-attribute-lable1').css('width', ' 180px ');
  $('.specific-attribute-lable1').css('height', '13px');//-------5
  $('.specific-attribute-lable1').css('margin-left', '20px');
  $('.specific-attribute-lable1').css('top', '1px');
  $('.specific-attribute-lable1').css('color', '#FFFFFF');

  // $('.specific-attribute-lable').css('display', 'inline-block');
  // $('.specific-attribute-lable').css('position', 'relative');
  // $('.specific-attribute-lable').css('width', ' 150px ');
  // $('.specific-attribute-lable').css('height', '20px');
  // $('.specific-attribute-lable').css('top', '-8px');//---1
  // $('.specific-attribute-lable').css('font-family', 'Futura Md BT');
  // $('.specific-attribute-lable').css('font-style', 'normal');
  // $('.specific-attribute-lable').css('font-weight', '400');
  // $('.specific-attribute-lable').css('font-size', ' 14px ');
  // $('.specific-attribute-lable').css('line-height', '24px');
  // $('.specific-attribute-lable').css('text-transform', 'uppercase ');
  // $('.specific-attribute-lable').css('color', '#FFFFFF');

  // $('.if-any').css('display', 'inline-block');
  // $('.if-any').css('position', 'absolute');//----------relative
  // $('.if-any').css('width', ' 50px ');
  // $('.if-any').css('height', '25px');
  // $('.if-any').css('margin-left', '60px');
  // $('.if-any').css('top', '11px');//--------------1//-----(-13)
  // $('.if-any').css('font-family', 'Futura Md BT');
  // $('.if-any').css('font-style', 'normal');
  // $('.if-any').css('font-weight', '400');
  // $('.if-any').css('font-size', ' 12px ');
  // $('.if-any').css('line-height', '20px');
  // $('.if-any').css('color', '#FFFFFF');
  // $('.if-any').css('left', '0');//-----------exter add

  // $('.help_specific_attribute').css('display', 'inline-block');
  // $('.help_specific_attribute').css('position', 'relative');
  // $('.help_specific_attribute').css('width', ' 11px ');
  // $('.help_specific_attribute').css('height', '11px');
  // $('.help_specific_attribute').css('left', '2px');
  // $('.help_specific_attribute').css('bottom', '1px');//-----------14
  // $('.help_specific_attribute').css('margin-left', ' 3px');

  $('.help_specific_attribute1').css('display', 'inline-block');
  $('.help_specific_attribute1').css('position', 'absolute');
  $('.help_specific_attribute1').css('width', '15px');
  $('.help_specific_attribute1').css('height', '18px');
  $('.help_specific_attribute1').css('left', '370px');
  $('.help_specific_attribute1').css('top', '38px');//---37
  $('.help_specific_attribute1').css('margin-left', '35px');
  $('.help_specific_attribute1').css('background-color', 'transparent');
  $('.help_specific_attribute1').css('border', 'none');
  $('.help_specific_attribute1').css('padding', '0px');

  // $('.specific-attribute-text').css('display', 'inline-block');
  // $('.specific-attribute-text').css('width', '210px');
  // $('.specific-attribute-text').css('height', '20px ')
  // $('.specific-attribute-text').css('background', '#FFFFFF ');;
  // $('.specific-attribute-text').css('border-radius', '10px ');
  // $('.specific-attribute-text').css('bottom', '14px ');
  // $('.specific-attribute-text').css('vertical-align', 'middle');
  // $('.specific-attribute-text').css('box-sizing', 'content-box');
  // $('.specific-attribute-text').css('font-family', 'Futura Md BT');
  // $('.specific-attribute-text').css('paddig', '10px');
  // // $('.specific-attribute-text').css('position','absolute');

  // -----------------
  $('.custom-tooltip1').css('position', 'absolute');
  $('.custom-tooltip1').css('background-color', ' #ffffff');
  $('.custom-tooltip1').css('color', '#171212');
  $('.custom-tooltip1').css('text-align', ' left');
  $('.custom-tooltip1').css('padding-left', ' 10px');
  $('.custom-tooltip1').css(' width', '400px');
  $('.custom-tooltip1').css('border-radius', ' 4px');
  $('.custom-tooltip1').css('z-index', ' 1000');
  $('.custom-tooltip1').css('visibility', ' hidden');
  $('.custom-tooltip1').css('font-size', ' 15px');
  $('.custom-tooltip1').css('box-shadow', ' 0 4px 8px rgba(0, 0, 0, 0.1)');
  $('.custom-tooltip1').css('transition', 'visibility 0.2s');
  $('.custom-tooltip1').css('border', ' 1px solid #FFC700');
  $('.custom-tooltip1').css('bottom', '-37px');//---------extra add
  $('.custom-tooltip1').css('line-height', '1.1');//---extra add
  $('.custom-tooltip1').css('font-family', 'Futura Md BT');

  // $('.suggested-variable-label').css('display', 'inline-block');
  // $('.suggested-variable-label').css('position', 'relative');
  // $('.suggested-variable-label').css('width', ' 180px ');
  // $('.suggested-variable-label').css('height', '20px');
  // $('.suggested-variable-label').css('margin-left', '20px');
  // $('.suggested-variable-label').css('top', '1px');
  // $('.suggested-variable-label').css('color', '#FFFFFF');
  // $('.suggested-variable-label').css('font-family', 'Futura Md BT');
  // $('.suggested-variable-label').css('font-style', 'normal');
  // $('.suggested-variable-label').css('font-weight', '400');
  // $('.suggested-variable-label').css('font-size', ' 11px ');
  // $('.suggested-variable-label').css('line-height', '24px');
  // $('.suggested-variable-label').css('text-transform', 'uppercase ');

  // $('.suggested-variable-text').css('display', 'inline-block');
  // $('.suggested-variable-text').css('position', 'relative');
  // $('.suggested-variable-text').css('width', ' 210px ');
  // $('.suggested-variable-text').css('height', '20px');
  // $('.suggested-variable-text').css('right','5px');
  // $('.suggested-variable-text').css('font-family', 'Futura Md BT');
  // $('.suggested-variable-text').css('font-style', 'normal');
  // $('.suggested-variable-text').css('font-weight', '400');
  // $('.suggested-variable-text').css('font-size', ' 14px ');
  // $('.suggested-variable-text').css('background', ' #FFFFFF');
  // $('.suggested-variable-text').css('border-radius', ' 10px');
  // $('.suggested-variable-text').css('box-sizing', 'content-box');

  $('.copy-suggested-variable').css('display', 'inline-block');
  $('.copy-suggested-variable').css('position', 'relative');
  $('.copy-suggested-variable').css('width', ' 13px');
  $('.copy-suggested-variable').css('height', '16px');
  $('.copy-suggested-variable').css('right', '25px');
  $('.copy-suggested-variable').css('top', '-1px');
  // $('.copy-suggested-variable').css('margin-buttom', '2px');
  $('.copy-suggested-variable').css('margin-top', '2px');
  $('.copy-suggested-variable').css('border', 'none');
  $('.copy-suggested-variable').css('padding', ' 0px');
  $('.copy-suggested-variable').css('vertical-align', 'middle');
  $('.copy-suggested-variable').css('min-width', '0px');
  $('.copy-suggested-variable').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.copy-suggested-variable').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');

  $('.custom-tooltip4').css('position', 'absolute');
  $('.custom-tooltip4').css('background-color', ' #ffffff');
  $('.custom-tooltip4').css('color', '#171212');
  $('.custom-tooltip4').css('text-align', ' left');
  $('.custom-tooltip4').css('padding-left', ' 5px');
  $('.custom-tooltip4').css(' width', '55px');
  $('.custom-tooltip4').css('border-radius', ' 4px');
  $('.custom-tooltip4').css('z-index', ' 9999');
  $('.custom-tooltip4').css('visibility', ' hidden');
  $('.custom-tooltip4').css('font-size', ' 15px');
  $('.custom-tooltip4').css('box-shadow', ' 0 4px 8px rgba(0, 0, 0, 0.1)');
  $('.custom-tooltip4').css('transition', 'visibility 0.2s');
  $('.custom-tooltip4').css('border', ' 1px solid #FFC700');
  $('.custom-tooltip4').css('margin-top', '15px');//---------extra add
  $('.custom-tooltip4').css('line-height', '1.1');//---extra add
  $('.custom-tooltip4').css('font-family', 'Futura Md BT');//-extra add
  $('.custom-tooltip4').css('font-weight', '400');//---extra add
  $('.custom-tooltip4').css('letter-spacing', '0px');

  $('.hr').css('margin-top', '5px');
  $('.hr').css('margin-bottom', ' 0px');
  $('.hr').css('background-color', '#c9c9c9');

  $('.hr1').css('margin-top', ' 5px');
  $('.hr1').css('margin-bottom', ' 0px');
  $('.hr1').css('background-color', '#c9c9c9');

  $('.custom-tooltip2').css('position', 'absolute');
  $('.custom-tooltip2').css('background-color', ' #ffffff');
  $('.custom-tooltip2').css('color', '#171212');
  $('.custom-tooltip2').css('text-align', ' left');
  $('.custom-tooltip2').css('padding-left', ' 10px');
  $('.custom-tooltip2').css(' width', '400px');
  $('.custom-tooltip2').css('border-radius', ' 4px');
  $('.custom-tooltip2').css('z-index', ' 9999');
  $('.custom-tooltip2').css('visibility', ' hidden');
  $('.custom-tooltip2').css('font-size', ' 15px');
  $('.custom-tooltip2').css('box-shadow', ' 0 4px 8px rgba(0, 0, 0, 0.1)');
  $('.custom-tooltip2').css('transition', 'visibility 0.2s');
  $('.custom-tooltip2').css('border', ' 1px solid #FFC700');
  $('.custom-tooltip2').css('margin-top', '-50px');//---------extra add
  $('.custom-tooltip2').css('line-height', '1.1');//---extra add
  $('.custom-tooltip2').css('font-family', 'Futura Md BT');

  // -----------------------suggested variable end-------------------

  // ----------------------Unique locator start------------------
  // $('.button-container').css('position', 'relative');
  // $('.button-container').css('top', '1px');
  // $('.button-container').css('width', '30%');
  // $('.button-container').css('height', '90px');
  // $('.button-container').css('margin', 'auto');
  // $('.button-container').css('margin-left', '10px');
  // $('.button-container').css('margin-right', ' 10px');
  // $('.button-container').css('background-color', 'transparent');
  // $('.button-container').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  // $('.button-container').css('border-radius', ' 5px');
  // $('.button-container').css('z-index', '1000');
  // $('.button-container').css('align-items', 'center');

  $('.header-block').css('position', 'relative');
  $('.header-block').css('display', 'inline-block');
  $('.header-block').css('top', '1px');
  $('.header-block').css('width', '100%');
  $('.header-block').css('height', '20px');
  $('.header-block').css('margin', 'auto');
  $('.header-block').css('margin-left', '10px');
  $('.header-block').css('margin-right', ' 10px');
  $('.header-block').css('background-color', 'transparent');
  $('.header-block').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.header-block').css('z-index', '1000');

  // $('.header-text').css('display', 'inline-block');
  // $('.header-text').css('flex', '1');
  // $('.header-text').css('height', '15px');
  // $('.header-text').css('left', 'auto');
  // $('.header-text').css('right', '20px');
  // $('.header-text').css('top', ' 150px');
  // $('.header-text').css('font-family', 'Futura Md BT');
  // $('.header-text').css('font-style', 'bold');
  // $('.header-text').css('font-weight', '400');
  // $('.header-text').css('font-size', '15px');
  // $('.header-text').css('line-height', '18px');
  // $('.header-text').css('color', '#FFFFFF');

  $('.header-help').css('display', 'inline-block');
  $('.header-help').css('width', ' 11px ');
  $('.header-help').css('height', '11px');//-------5
  $('.header-help').css('left', '395px');
  $('.header-help').css('top', '155px');
  $('.header-help').css('margin-left', '5px');


  $('.custom-tooltip').css('position', 'absolute');
  $('.custom-tooltip').css('background-color', ' #ffffff');
  $('.custom-tooltip').css('color', '#171212');
  $('.custom-tooltip').css('text-align', ' left');
  $('.custom-tooltip').css('padding-left', ' 10px');
  $('.custom-tooltip').css('width', '400px');
  $('.custom-tooltip').css('border-radius', ' 4px');
  $('.custom-tooltip').css('z-index', ' 9999');
  $('.custom-tooltip').css('visibility', ' hidden');
  $('.custom-tooltip').css('font-size', ' 15px');
  $('.custom-tooltip').css('box-shadow', ' 0 4px 8px rgba(0, 0, 0, 0.1)');
  $('.custom-tooltip').css('transition', 'visibility 0.2s');
  $('.custom-tooltip').css('border', ' 1px solid #FFC700');
  $('.custom-tooltip').css('margin-top', '-53px');//---------extra add--(-50)
  $('.custom-tooltip').css('line-height', '1.1');//---extra add
  $('.custom-tooltip').css('font-family', 'Futura Md BT');
  $('.custom-tooltip').css('letter-spacing', '0px');


  $('.locator-body-block').css('display', 'inline-block');
  $('.locator-body-block').css('top', '220px');
  $('.locator-body-block').css('width', ' 400px ');
  $('.locator-body-block').css('height', '68px');//-------5
  $('.locator-body-block').css('margin-left', '30px');
  $('.locator-body-block').css('margin-top', '0px');//---1
  $('.locator-body-block').css('background-repeat', 'no-repeat');
  $('.locator-body-block').css('background-size', 'auto');
  $('.locator-body-block').css('position', 'static');

  // $('.locator-css-div-block').css('display', 'inline-block');
  $('.locator-css-div-block').css('display', 'flex');//---
  $('.locator-css-div-block').css('align-items', 'center');//---
  $('.locator-css-div-block').css('top', '220px');
  $('.locator-css-div-block').css('width', '82%');
  $('.locator-css-div-block').css('height', '25px');//----15
  $('.locator-css-div-block').css('margin', 'auto');
  $('.locator-css-div-block').css('margin-left', '10px');
  $('.locator-css-div-block').css('margin-right', ' 10px');
  $('.locator-css-div-block').css('margin-top', ' 5px');
  $('.locator-css-div-block').css('background-color', 'transparent');
  $('.locator-css-div-block').css('z-index', '1000');
  //$('.locator-css-div-block').css('position', 'static');

  // $('.css-label').css('display', 'inline-block');
  // $('.css-label').css('width', ' 37px ');
  // $('.css-label').css('height', '14px');
  // $('.css-label').css('left', ' 145px ');
  // $('.css-label').css('top', '265px');
  // $('.css-label').css('margin-left', ' 30px ');
  // $('.css-label').css('margin-top', '5px');
  // $('.css-label').css('font-family', 'Futura Md BT');
  // $('.css-label').css('font-style', 'bold');
  // $('.css-label').css('font-weight', '400');
  // $('.css-label').css('font-size', ' 14px ');
  // $('.css-label').css('line-height', '19px');
  // $('.css-label').css('color', '#FFC700');
  // // $('.css-label').css('padding-right','4px');//--

  // $('.css-text').css('box-sizing', 'border-box');
  // $('.css-text').css('width', '250px');
  // $('.css-text').css('height', '18px');//----15
  // $('.css-text').css('left', '210px');
  // $('.css-text').css('top', '262px');
  // $('.css-text').css('display', 'inline-block');
  // $('.css-text').css('margin-top', '10px');
  // $('.css-text').css('margin-left', '10px');
  // $('.css-text').css('font-family', 'Futura Md BT');
  // $('.css-text').css('font-style', 'normal');
  // $('.css-text').css('font-weight', '400');
  // $('.css-text').css('font-size', '14px');
  // $('.css-text').css('background', '#FFFFFF');
  // $('.css-text').css('border-radius', '7px');
  // $('.css-text').css('border', '1px solid #FFC700');
  // $('.css-text').css('vertical-align', 'sub');

  $('.css-copy').css('display', 'inline-block');
  $('.css-copy').css('position', 'absolute');
  $('.css-copy').css('width', '13px');
  $('.css-copy').css('height', '20px');
  $('.css-copy').css('left', '370px');
  $('.css-copy').css('top', '37px');//---37
  $('.css-copy').css('margin-left', '15px');
  $('.css-copy').css('margin-top', '0px');
  $('.css-copy').css('background-color', 'transparent');
  $('.css-copy').css('border', 'none');
  $('.css-copy').css('padding', '0px');
  $('.css-copy').css('min-width', '0px');
  $('.css-copy').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.css-copy').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');

  $('.custom-tooltip3').css('position', 'absolute');
  $('.custom-tooltip3').css('background-color', ' #ffffff');
  $('.custom-tooltip3').css('color', '#171212');
  $('.custom-tooltip3').css('text-align', ' left');
  $('.custom-tooltip3').css('padding-left', ' 5px');
  $('.custom-tooltip3').css(' width', '55px');
  $('.custom-tooltip3').css('border-radius', ' 4px');
  $('.custom-tooltip3').css('z-index', ' 9999');
  $('.custom-tooltip3').css('visibility', ' hidden');
  $('.custom-tooltip3').css('font-size', ' 15px');
  $('.custom-tooltip3').css('box-shadow', ' 0 4px 8px rgba(0, 0, 0, 0.1)');
  $('.custom-tooltip3').css('transition', 'visibility 0.2s');
  $('.custom-tooltip3').css('border', ' 1px solid #FFC700');
  $('.custom-tooltip3').css('margin-top', '-50px');//---------extra add--
  $('.custom-tooltip3').css('line-height', '1.1');//---extra add
  $('.custom-tooltip3').css('font-family', 'Futura Md BT');//-extra add
  $('.custom-tooltip3').css('font-weight', '400');//---extra add
  $('.custom-tooltip3').css('letter-spacing', '0px');

  $('.locator-xpath-div-block').css('display', 'inline-block');
  $('.locator-xpath-div-block').css('top', '210px');
  $('.locator-xpath-div-block').css('width', '84%');
  $('.locator-xpath-div-block').css('height', '15px');
  $('.locator-xpath-div-block').css('margin-left', '10px');
  $('.locator-xpath-div-block').css('margin-right', ' 7px');
  $('.locator-xpath-div-block').css('background-color', 'transparent');
  $('.locator-xpath-div-block').css('z-index', '1000');
  // $('.locator-xpath-div-block').css('margin','auto');
  // $('.locator-xpath-div-block').css('margin-top',' 5px');

  // $('.xpath-label').css('display', 'inline-block');
  // $('.xpath-label').css('width', ' 37px ');
  // $('.xpath-label').css('height', '14px');
  // $('.xpath-label').css('left', ' 145px ');
  // $('.xpath-label').css('top', '265px');
  // $('.xpath-label').css('margin-left', ' 30px ');
  // $('.xpath-label').css('margin-top', '10px');
  // $('.xpath-label').css('font-family', 'Futura Md BT');
  // $('.xpath-label').css('font-style', 'bold');
  // $('.xpath-label').css('font-weight', '400');
  // $('.xpath-label').css('font-size', ' 14px ');
  // $('.xpath-label').css('line-height', '19px');
  // $('.xpath-label').css('color', '#FFC700');

  // $('.xpath-text').css('box-sizing', 'border-box');
  // $('.xpath-text').css('width', '250px');
  // $('.xpath-text').css('height', '18px');
  // $('.xpath-text').css('left', '210px');
  // $('.xpath-text').css('top', '262px');
  // $('.xpath-text').css('display', 'inline-block');
  // $('.xpath-text').css('margin-top', '10px');
  // $('.xpath-text').css('margin-left', '10px');
  // $('.xpath-text').css('font-family', 'Futura Md BT');
  // $('.xpath-text').css('font-style', 'normal');
  // $('.xpath-text').css('font-weight', '400');
  // $('.xpath-text').css('font-size', '14px');
  // $('.xpath-text').css('background', '#FFFFFF');
  // $('.xpath-text').css('border-radius', '7px');
  // $('.xpath-text').css('border', '1px solid #FFC700');
  // $('.xpath-text').css('vertical-align', 'sub');

  $('.xpath-copy').css('display', 'inline-block');
  $('.xpath-copy').css('position', 'absolute');
  $('.xpath-copy').css('width', '13px');
  $('.xpath-copy').css('height', '20px');
  $('.xpath-copy').css('left', '370px');
  $('.xpath-copy').css('top', '67.5px');
  $('.xpath-copy').css('margin-left', '15px');
  $('.xpath-copy').css('margin-top', '0px');
  $('.xpath-copy').css('background-color', 'transparent');
  $('.xpath-copy').css('border', 'none');
  $('.xpath-copy').css('padding', '0px');
  $('.xpath-copy').css('min-width', '0px');
  $('.xpath-copy').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.xpath-copy').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');

  // ------------------------Alternate locator start------ already commented---
  $('.locator-block1').css('position', 'relative');
  $('.locator-block1').css('top', '1px');
  $('.locator-block1').css('width', '30%');
  $('.locator-block1').css('height', '90px');
  $('.locator-block1').css('margin', 'auto');
  $('.locator-block1').css('margin-left', '10px');
  $('.locator-block1').css('margin-right', ' 10px');
  $('.locator-block1').css('background-color', 'transparent');
  $('.locator-block1').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.locator-block1').css('border-radius', ' 5px');
  $('.locator-block1').css('z-index', '1000');
  $('.locator-block1').css('align-items', 'center');

  // -----------------------Without Locator-------
  $('.locator-block2').css('position', 'relative');
  $('.locator-block2').css('top', '1px');
  $('.locator-block2').css('width', '30%');
  $('.locator-block2').css('height', '90px');
  $('.locator-block2').css('margin', 'auto');
  $('.locator-block2').css('margin-left', '10px');
  $('.locator-block2').css('margin-right', ' 10px');
  $('.locator-block2').css('background-color', 'transparent');
  $('.locator-block2').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.locator-block2').css('border-radius', ' 5px');
  $('.locator-block2').css('z-index', '1000');
  $('.locator-block2').css('align-items', 'center');

  // -----------------------iframe locator-------
  $('.locator-block3').css('position', 'relative');
  $('.locator-block3').css('top', '1px');
  $('.locator-block3').css('width', '30%');
  $('.locator-block3').css('height', '90px');
  $('.locator-block3').css('margin', 'auto');
  $('.locator-block3').css('margin-left', '10px');
  $('.locator-block3').css('margin-right', ' 10px');
  $('.locator-block3').css('background-color', 'transparent');
  $('.locator-block3').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.locator-block3').css('border-radius', ' 5px');
  $('.locator-block3').css('z-index', '1000');
  $('.locator-block3').css('align-items', 'center');

  // -----------------------Text Locator------
  $('.locator-block4').css('position', 'relative');
  $('.locator-block4').css('top', '1px');
  $('.locator-block4').css('width', '90%');
  $('.locator-block4').css('height', '90px');
  $('.locator-block4').css('margin', 'auto');
  $('.locator-block4').css('margin-left', '10px');
  $('.locator-block4').css('margin-right', ' 10px');
  $('.locator-block4').css('background-color', 'transparent');
  $('.locator-block4').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.locator-block4').css('border-radius', ' 5px');
  $('.locator-block4').css('z-index', '1000');
  $('.locator-block4').css('align-items', 'center');

  //-----------------------BLOCK5------
  $('.locator-block5').css('position', 'relative');
  $('.locator-block5').css('top', '1px');
  $('.locator-block5').css('width', '30%');
  $('.locator-block5').css('height', '90px');
  $('.locator-block5').css('margin', 'auto');
  $('.locator-block5').css('margin-left', '10px');
  $('.locator-block5').css('margin-right', ' 10px');
  $('.locator-block5').css('background-color', 'transparent');
  $('.locator-block5').css('box-shadow', ' 0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.locator-block5').css('border-radius', ' 5px');
  $('.locator-block5').css('z-index', '1000');
  $('.locator-block5').css('align-items', 'center');

  // ---------------------header----------
  $('.xpath-popup').css('position', 'fixed');
  $('.xpath-popup').css('top', '10px');
  $('.xpath-popup').css('right', '10px');
  $('.xpath-popup').css('width', '460px');
  $('.xpath-popup').css('height', 'auto');
  $('.xpath-popup').css('border', '1px solid #ccc');
  $('.xpath-popup').css('background-color', '#f9f9f9');
  $('.xpath-popup').css('box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.1)');
  $('.xpath-popup').css('border-radius', '5px');
  $('.xpath-popup').css('z-index', '99999');
  $('.xpath-popup').css('font-size', '10px');
  $('.xpath-popup').css('line-height', '22px');


  $('.xpath-popup-header').css('display', 'flex');
  // $('.xpath-popup-header').css('margin-right', '20px');
  $('.xpath-popup-header').css('width', '460px ');
  $('.xpath-popup-header').css('height', '45px ');
  $('.xpath-popup-header').css('padding', '10px');//-----5
  $('.xpath-popup-header').css('background-color', '#f0f0f0');
  $('.xpath-popup-header').css('border-bottom', '1px solid #ccc');
  $('.xpath-popup-header').css('border-radius', '5px 5px 0 0');
  $('.xpath-popup-header').css('width', '100%');
  $('.xpath-popup-header').css('box-sizing', 'border-box');

  // $('.black-text').css('width', '300px ');
  // $('.black-text').css('heigh', ' 15px');
  // $('.black-text').css('left', ' 0');
  // $('.black-text').css('top', '23px');
  // $('.black-text').css('font-family', 'Futura Md BT');
  // $('.black-text').css('font-style', 'normal');
  // $('.black-text').css('font-weight', '500');
  // $('.black-text').css('font-size', '18px');
  // $('.black-text').css('line-height', '21px');
  // $('.black-text').css('text-transform', 'uppercase');
  // $('.black-text').css('color', '#000000');
  // $('.black-text').css('display', 'flex');
  // $('.black-text').css('justify-content', 'center');
  // $('.black-text').css('align-items', 'center');

  // $('.add-click-use').css('position', 'absolute');
  // $('.add-click-use').css('width', '95px ');
  // $('.add-click-use').css('height', '17px ');
  // $('.add-click-use').css('left', '170px');
  // $('.add-click-use').css('top', '29px');
  // $('.add-click-use').css('font-family', 'Calibri');
  // $('.add-click-use').css('font-style', 'normal');
  // $('.add-click-use').css('font-weight', '400');
  // $('.add-click-use').css('font-size', '10px');
  // $('.add-click-use').css('line-height', '20px');
  // $('.add-click-use').css('text-transform', 'uppercase');
  // $('.add-click-use').css('color', '#606060');
  // $('.add-click-use').css('display', 'flex');
  // $('.add-click-use').css('justify-content', 'center');
  // $('.add-click-use').css('align-items', 'center');

  $('.button-container').css('display', 'flex');
  $('.button-container').css('gap', '0');
  $('.button-container').css('justify-content', 'flex-end');
  $('.button-container').css('width', '50px');
  $('.button-container').css('margin-left', '20px');

  $('.bug-report').css('width', '22px');
  $('.bug-report').css('height', '22px');
  $('.bug-report').css('display', 'inline-block');
  $('.bug-report').css('position', 'relative');
  $('.bug-report').css('top', '2px');
  $('.bug-report').css('left', '-7px');
  $('.bug-report').css('font-family', 'Futura Md BT');
  $('.bug-report').css('line-height', '24px');
  $('.bug-report').css('color', '#000000');
  $('.bug-report').css('justify-content', 'center');
  $('.bug-report').css('align-items', 'center');
  $('.bug-report').css('max-width', '20px');
  //$('.bug-report').css('vertical-align','sub');
  $('.bug-report').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.bug-report').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');

  $('.help_nav_bar').css('width', '18px');
  $('.help_nav_bar').css('height', '19.5px');
  $('.help_nav_bar').css('margin-top', '4px');
  $('.help_nav_bar').css('background-color', 'transparent');
  $('.help_nav_bar').css('back', 'transparent');
  $('.help_nav_bar').css('max-width', '20px');//==extra added
  //$('.help_nav_bar').css('vertical-align','sub');//==extra added
  $('.help_nav_bar').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.help_nav_bar').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');

  $('.minimize-popup-button').css('position', 'sticky');
  $('.minimize-popup-button').css('width', '30px');
  $('.minimize-popup-button').css('height', '27px');
  //$('.minimize-popup-button').css('left', 'calc(50% - 10px/2 + 248.5px)');
  $('.minimize-popup-button').css('margin', '2px');
  $('.minimize-popup-button').css('margin-top', '0px');
  $('.minimize-popup-button').css('font-family', 'Futura Md BT');
  $('.minimize-popup-button').css('font-style', 'normal');
  $('.minimize-popup-button').css('font-weight', '900');
  $('.minimize-popup-button').css('font-size', '18px');
  $('.minimize-popup-button').css('line-height', '24px');
  $('.minimize-popup-button').css('text-transform', 'uppercase');
  $('.minimize-popup-button').css('color', '#000000');
  $('.minimize-popup-button').css('text-align', 'center');
  $('.minimize-popup-button').css('padding-top', '0px');//==extra added
  $('.minimize-popup-button').css('padding-bottom', '0px');
  $('.minimize-popup-button').css('padding-left', '5px');
  $('.minimize-popup-button').css('padding-right', '5px');
  $('.minimize-popup-button').css('overflow', 'visible');
  $('.minimize-popup-button').css('min-width', '20px');
  $('.minimize-popup-button').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.minimize-popup-button').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');


  // // maximize-popup-button
  $('.maximize-popup-button').css('position', 'sticky');
  $('.maximize-popup-button').css('width', '30px');
  $('.maximize-popup-button').css('height', '27px');
  //$('.maximize-popup-button').css('left', 'calc(50% - 10px/2 + 248.5px)');
  $('.maximize-popup-button').css('margin-top', '2px');
  $('.maximize-popup-button').css('font-family', 'Futura Md BT');
  $('.maximize-popup-button').css('font-style', 'normal');
  $('.maximize-popup-button').css('font-weight', '900');
  $('.maximize-popup-button').css('font-size', '18px');
  $('.maximize-popup-button').css('line-height', '24px');
  $('.maximize-popup-button').css('text-transform', 'uppercase');
  $('.maximize-popup-button').css('color', '#000000');
  $('.maximize-popup-button').css('text-align', 'center');
  $('.maximize-popup-button').css('padding-top', '1px');
  $('.maximize-popup-button').css('padding-bottom', '1px');
  $('.maximize-popup-button').css('padding-left', '5px');
  $('.maximize-popup-button').css('padding-right', '5px');
  $('.maximize-popup-button').css('min-width', '25px');
  $('.maximize-popup-button').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.maximize-popup-button').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');


  // When the button is hovered, change the color to red
  $('.button-container button').hover(function () {
    $(this).css('color', 'red');
  });

  $('.button-container button').css('background', 'none');
  $('.button-container button').css('border', 'none');
  $('.button-container button').css('font-size', '16px');
  $('.button-container button').css('cursor', 'pointer');

  //$('.close-popup-button').css('width', '1px');
  $('.close-popup-button').css('height', '25.20px');
  $('.close-popup-button').css('right', '0');
  $('.close-popup-button').css('margin-top', '2px');
  $('.close-popup-button').css('font-family', 'Futura Md BT');
  $('.close-popup-button').css('font-style', 'normal');
  $('.close-popup-button').css('font-weight', '900');
  $('.close-popup-button').css('font-size', '18px');
  $('.close-popup-button').css('line-height', '24px');
  $('.close-popup-button').css('text-transform', 'uppercase');
  $('.close-popup-button').css('color', '#000000');
  $('.close-popup-button').css('padding-left', '10px');
  $('.close-popup-button').css('padding', '-10px');
  $('.close-popup-button').css('overflow', 'visible');
  $('.close-popup-button').css('justify-content', 'left');
  $('.close-popup-button').css('min-width', '10px');
  $('.close-popup-button').css('webkit-box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');
  $('.close-popup-button').css('box-shadow', '0px 0px 0px 0px rgba(0, 0, 0, 0)');


  // ---------------------------footer----------------
  $('.xpath-popup-footer').css('display', 'flex');
  $('.xpath-popup-footer').css('bottom', '0');
  $('.xpath-popup-footer').css('height', '50px');
  $('.xpath-popup-footer').css('width', '460px');
  $('.xpath-popup-footer').css('margin-top', '5px');
  $('.xpath-popup-footer').css('background-color', '#f0f0f0');
  $('.xpath-popup-footer').css('border-bottom', '1px solid #ccc');
  $('.xpath-popup-footer').css('border-radius', '0 0 5px 5px');
  $('.xpath-popup-footer').css('text-align', 'center');
  $('.xpath-popup-footer').css('width', '100%');
  $('.xpath-popup-footer').css('box-sizing', 'border-box');
  $('.xpath-popup-footer').css('letter-spacing', '0px');
  // $('.xpath-popup-footer').css('padding-left','5px');
  // $('.xpath-popup-footer').css('padding-right','5px');
  // $('.xpath-popup-footer').css('padding-top','5px');
  // $('.xpath-popup-footer').css('padding-bottom','5px');

  // $('.powered-by-lable').css('display', 'inline-block');
  // $('.powered-by-lable').css('position', 'relative');
  // $('.powered-by-lable').css('height', '15px');
  // $('.powered-by-lable').css('left', '130px ');
  // $('.powered-by-lable').css('font-family', 'Futura Md BT');
  // $('.powered-by-lable').css('font-style', 'normal');
  // $('.powered-by-lable').css('font-weight', '400');
  // $('.powered-by-lable').css('font-size', '11px');
  // $('.powered-by-lable').css('line-height', '24px');
  // $('.powered-by-lable').css('color', '#000000');
  // $('.powered-by-lable').css('justify-content', 'center');
  // $('.powered-by-lable').css('align-items', 'center');

  // $('.website-lable').css('display', 'inline-block');
  // $('.website-lable').css('position', 'relative');
  // $('.website-lable').css('top', '6px');
  // $('.website-lable').css('height', '15px ');
  // $('.website-lable').css('right', '10px');//--------------
  // $('.website-lable').css('font-family', 'Futura Md BT');
  // $('.website-lable').css('font-style', 'normal');
  // $('.website-lable').css('font-weight', '400');
  // $('.website-lable').css('font-size', '11px');
  // $('.website-lable').css('line-height', '24px');
  // $('.website-lable').css('color', '#000000');
  // $('.website-lable').css('justify-content', 'center');
  // $('.website-lable').css('align-items', 'center');
  // $('.website-lable').css('text-decoration', 'underline');

  // $('.tnc-lable').css('display', 'inline-block');
  // $('.tnc-lable').css('position', 'relative');
  // $('.tnc-lable').css('top', '27px');
  // $('.tnc-lable').css('height', '15px ');
  // $('.tnc-lable').css('right', '300px');
  // $('.tnc-lable').css('font-family', 'Futura Md BT');
  // $('.tnc-lable').css('font-style', 'normal');
  // $('.tnc-lable').css('font-weight', '400');
  // $('.tnc-lable').css('font-size', '9px');//--------8
  // $('.tnc-lable').css('line-height', '24px');
  // $('.tnc-lable').css('color', '#000000');
  // $('.tnc-lable').css('justify-content', 'center');
  // $('.tnc-lable').css('align-items', 'center');

  // $('.copyright-lable').css('display', 'inline-block');
  // $('.copyright-lable').css('position', 'relative');
  // $('.copyright-lable').css('top', '27px');
  // $('.copyright-lable').css('height', '15px ');
  // $('.copyright-lable').css('right', '140px');
  // $('.copyright-lable').css('font-family', 'Futura Md BT');
  // $('.copyright-lable').css('font-style', 'normal');
  // $('.copyright-lable').css('font-weight', '400');
  // $('.copyright-lable').css('font-size', '9px');//------8
  // $('.copyright-lable').css('line-height', '24px');
  // $('.copyright-lable').css('color', '#000000');
  // $('.copyright-lable').css('justify-content', 'center');
  // $('.copyright-lable').css('align-items', 'center');

  // $('.version-lable').css('display', 'inline-block');
  // $('.version-lable').css('position', 'relative');
  // $('.version-lable').css('top', '27px');
  // $('.version-lable').css('height', '15px ');
  // $('.version-lable').css('left', '8px');
  // $('.version-lable').css('font-family', 'Futura Md BT');
  // $('.version-lable').css('font-style', 'normal');
  // $('.version-lable').css('font-weight', '400');
  // $('.version-lable').css('font-size', '9px');//-------9
  // $('.version-lable').css('line-height', '24px');
  // $('.version-lable').css('color', '#000000');
  // $('.version-lable').css('justify-content', 'center');
  // $('.version-lable').css('align-items', 'center');

  // $('.xpath-popup').css('left', posLeft);
  // $('.xpath-popup').css('top', posTop);
}

// Make the div draggable
function makeDraggable(element) {
  let offsetX, offsetY;
  let isDragging = false;

  element.addEventListener('mousedown', function (event) {
    isDragging = true;
    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', function (event) {
    if (isDragging) {
      let x = event.clientX - offsetX;
      let y = event.clientY - offsetY;
      element.style.left = x + 'px';
      element.style.top = y + 'px';
    }
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

}

// Finding maximux z-index of the document
function getMaxZIndex() {
  return Math.max(
    ...Array.from(document.querySelectorAll('body *'), el =>
      parseFloat(window.getComputedStyle(el).zIndex),
    ).filter(zIndex => !Number.isNaN(zIndex)),
    0,
  );
}

//create popup on first click
document.addEventListener('click', function () {
  
  createPopup();

  var x = document.getElementById("stop-button");
  x.style.display = "none";

  var z = document.getElementById("generate-button");
  z.style.display ="none";

  if(start){
    var y = document.getElementById("stop-button");
    y.style.display = "block";
  }

  if(stop){
    var z = document.getElementById("generate-button");
    z.style.display ="block";
  }

});

///////////////////////////////////
/////extension////////////////////
let eventData;
let typingTimer;
let start = false;
let stop = false;
let elementRecorded = [];

// Function to handle clicks on the top-level document
function clickEventHandler(event) {
  let target = event.target;
  if (event.type !== 'input') {
    // eventData = 'click on ' + target.tagName.toLowerCase() + "  " + (target.id ? target.id : target.name ? target.name : target.textContent.trim().substring(0, 20));
    eventData = 'Click' + ' "' + (target.textContent ? target.textContent : target.id ? target.id : target.name) + '"';
  }

  if (eventData !== '')
    elementRecorded.push(eventData);
  console.log(eventData);
}

// Function to handle input events
function inputEventHandler(event) {
  let target = event.target;
  let eventData = ''; // Initialize eventData here

  clearTimeout(typingTimer); // Clear the previous timer

  typingTimer = setTimeout(function () {
    if (event.type === 'input') {
      eventData = "'" + target.value + "' into " + (target.name ? target.name : 'input field');
      elementRecorded.push(eventData); // Push eventData here
      console.log(eventData);
    }
  }, 3000);
}

// Function to handle clicks on the startButton
function startButtonClickHandler() {
  if (!start) {
    // Add event listener for clicks on the top-level document
    document.addEventListener('click', clickEventHandler);

    // Add event listener for input events
    document.addEventListener('input', inputEventHandler, true);

    // Add event listener for the stopButton to remove event listeners
    document.getElementById('stop-button').addEventListener('click', stopButtonClickHandler);

    console.log("Event listeners added.");

    var x = document.getElementById("start-button");
    x.style.display = "none";

    var y = document.getElementById("stop-button");
    y.style.display = "block";

    // var z = document.getElementById("generate-button");
    // z.style.display ="block"

    start = true;
  }
}

// Function to handle clicks on the stopButton
function stopButtonClickHandler() {
  if (start) {
    // Remove event listeners for clicks and input events on the top-level document
    document.removeEventListener('click', clickEventHandler);
    document.removeEventListener('input', inputEventHandler);
    console.log("Event listeners removed.");

    console.log("steps are :------------------------- ");
    for(let x of elementRecorded){
        console.log(x);
    }

    // Send eventData to the API
    // sendDataToAPI(eventData);
    sendDataToAPI(elementRecorded);
    elementRecorded = [];

    var x = document.getElementById("start-button");
    x.style.display = "block";

    var y = document.getElementById("stop-button");
    y.style.display = "none";

    // var z = document.getElementById("generate-button");
    // z.style.display ="block"


    start = false;
  }
}

// Function to send data to API via proxy server
function sendDataToAPI(elementInfo) {
  // Data to send to the API
  const data = {
    message: elementInfo.toString()
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
  // const proxyUrl = 'https://65cdf35ac715428e8b3f9016.mockapi.io/todo';
  const proxyUrl = 'http://localhost:5000';

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