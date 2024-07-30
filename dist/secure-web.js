const isNode = typeof document === 'undefined' && typeof window === 'undefined';

function noScreenshot(options, overlayId) {
    if (isNode) {
        console.warn('noScreenshot: DOM functions and screenshot prevention not supported in Node.js');
        return;
    }
    options = options || {};

    const {
        disableRightClick = true,
        disableKeyboardShortcuts = true,
        disableInspectElement = true,
        disablePrintScreen = true,
        disableScreenshot = true,
        disableFunctionKeys = true,
        disableCtrlF4 = true,
        mouseLeave = true,
        mouseEnterAutoHide = false,
        ctrlOverlay = true,
        altOverlay = false,
        shiftOverlay = false,
        // new at 1.2.2
        clearConsole = true,
        clearSensitiveContent = [
            'body'
        ],
    } = options;

    if (disableRightClick) {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    if (disableKeyboardShortcuts) {
        document.addEventListener('keydown', event => {
            // Disable keyboard shortcuts
            if ((event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 's')) || (event.metaKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 's'))) {
                event.preventDefault();
            }
        });

        document.addEventListener('keydown', event => {
            if ((event.ctrlKey && event.shiftKey && event.key === 's') || (event.ctrlKey && event.key === 's') || (event.metaKey && event.shiftKey && event.key === 's') || (event.metaKey && event.key === 's')) {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if ((event.ctrlKey && event.key === 's') || (event.metaKey && event.key === 's')) {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.metaKey && event.shiftKey && event.key === 's') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.metaKey && event.key === 's') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.ctrlKey && event.shiftKey && event.key === 'i') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.metaKey && event.shiftKey && event.key === 'i') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.ctrlKey && event.key === 'i') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.metaKey && event.key === 'i') {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if ((event.ctrlKey && event.shiftKey && event.key === 'j') || (event.ctrlKey && event.key === 'j') || (event.metaKey && event.shiftKey && event.key === 'j') || (event.metaKey && event.key === 'j') || (event.ctrlKey && event.shiftKey && event.key === 'k') || (event.ctrlKey && event.key === 'k') || (event.metaKey && event.shiftKey && event.key === 'k') || (event.metaKey && event.key === 'k')) {
                event.preventDefault();
            }
        });
        document.addEventListener('keydown', event => {
            if ((event.metaKey && event.shiftKey && event.key === 'j') || (event.metaKey && event.shiftKey && event.key === '4')) {
                event.preventDefault();
            }

            if (event.metaKey && event.key === '$') {
                event.preventDefault(); // Prevent the default action
            }

        });
        document.addEventListener('keydown', event => {
            if (event.metaKey && event.shiftKey && event.key === 'k') {
                event.preventDefault();
            }
        });
    }

    if (disableInspectElement) {

        // Prevent certain keyboard shortcuts
        document.addEventListener('keydown', event => {
            if ((event.ctrlKey && event.shiftKey && event.key === 'I') ||
                (event.metaKey && event.shiftKey && event.key === 'I') ||
                (event.ctrlKey && event.shiftKey && event.key === 'C') ||
                (event.metaKey && event.shiftKey && event.key === 'C') ||
                event.key === 'F12') {
                event.preventDefault();
            }
        });

        document.addEventListener('contextmenu', event => event.preventDefault());

        // clear console every secound
        if(clearConsole) {
            clearConsoleArea();
        }
        // detect if inspect element open
        detectInspectElement(clearSensitiveContent , overlayId);
    }

    if (disablePrintScreen) {
        document.addEventListener('keydown', event => {
            if ((event.key === 'PrintScreen')) {
                event.preventDefault();
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.key === 'PrintScreen') {
                navigator.clipboard.writeText('')
                overlayScreen()
            }
        })

    }

    if (disableFunctionKeys) {
        document.addEventListener('keydown', event => {
            if (event.key === 'F1' || event.key === 'F2' || event.key === 'F3' || event.key === 'F5' || event.key === 'F6' || event.key === 'F7' || event.key === 'F8' || event.key === 'F9' || event.key === 'F10' || event.key === 'F11' || event.key === 'F12') {
                event.preventDefault();
            }
        });
    }

    if (disableCtrlF4) {
        document.addEventListener('keydown', event => {
            if (event.ctrlKey && event.key === 'F4') {
                event.preventDefault();
            }
        });
    }

    if (mouseLeave) {
        document.addEventListener('mouseleave', () => {
            overlayScreen(overlayId);
        });
    }

    if (mouseEnterAutoHide) {
        document.addEventListener('mouseenter', () => {
            HideOverlayScreen(overlayId);
        });
    }

    if (ctrlOverlay) {
        document.addEventListener('keydown', event => {
            if (event.ctrlKey || event.metaKey) {
                overlayScreen(overlayId);
            }
        });
    }

    if (altOverlay) {
        document.addEventListener('keydown', event => {
            if (event.altKey || event.optionsKey) {
                overlayScreen(overlayId);
            }
        });
    }

    if (shiftOverlay) {
        document.addEventListener('keydown', event => {
            if (event.shiftKey) {
                overlayScreen(overlayId);
            }
        });
    }

    if(clearConsole){
        clearConsoleArea();
    }

    // Disable pointer events on body while the overlay is active
    // document.body.style.pointerEvents = 'none';
    document.body.style.pointerEvents = 'auto';
    document.addEventListener('keydown', escListener);


    // mobile screenshot prevention
    window.addEventListener('touchstart', handleTouchStart);

    function escListener(event) {
        if (event.key === 'Escape') {
            HideOverlayScreen(overlayId , clearSensitiveContent);
            // document.body.removeChild(overlay);
            // document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
            //document.removeEventListener('keydown', escListener);
        }
    }

}

function overlayScreen(overlayId) {
    if (overlayId) {
        const customOverlay = document.getElementById(overlayId);
        if (customOverlay) {
            customOverlay.style.position = 'fixed';
            customOverlay.style.top = '0';
            customOverlay.style.left = '0';
            customOverlay.style.width = '100%';
            customOverlay.style.height = '100%';
            customOverlay.style.zIndex = '9999';
            customOverlay.style.display = 'block';
            customOverlay.style.alignItems = 'center';
            customOverlay.style.justifyContent = 'center';

            // Disable pointer events on body while the overlay is active
            document.body.style.pointerEvents = 'none';

            document.addEventListener('keydown', escListener);

            function escListener(event) {
                if (event.key === 'Escape') {
                    customOverlay.style.display = 'none'; // Hide the custom overlay
                    document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
                    document.removeEventListener('keydown', escListener);
                }
            }

            return;
        }
    }

    if (document.getElementById('no-screenshot-overlay')) {
        document.getElementById('no-screenshot-overlay').style.display = 'flex';
        return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'no-screenshot-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(255, 255, 255, 1)'; // semi-transparent white background
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';

    const message = document.createElement('div');
    message.textContent = 'Press Esc to close. Screenshots are disabled.';
    message.style.fontSize = '24px';
    message.style.color = 'black'; // You can adjust the color as needed
    message.style.padding = '20px'; // Add padding to the message
    message.style.background = 'rgba(255, 255, 255, 0.9)'; // semi-transparent white background for message
    message.style.borderRadius = '10px'; // Rounded corners for the message box
    message.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)'; // Drop shadow for the message box

    overlay.appendChild(message);
    document.body.appendChild(overlay);
    document.body.style.pointerEvents = 'none';
}


function HideOverlayScreen(overlayId , clearSensitiveContent = false) {
    if (overlayId) {
        const customOverlay = document.getElementById(overlayId);
        if (customOverlay) {
            customOverlay.style.display = 'none'; // Hide the custom overlay
            document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
            if(clearSensitiveContent) {
                location.reload();
            }
            return;
        }
    }
    if(clearSensitiveContent) {
        location.reload();
    }
    var overlay = document.getElementById('no-screenshot-overlay');
    document.body.removeChild(overlay);
    document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
    //document.removeEventListener('keydown', escListener);
}


function clearConsoleArea(){
    var checkStatus;
    var element = document.createElement('any');
    element.__defineGetter__('id', function() {
        checkStatus = 'on';
    });

    setInterval(function() {
        checkStatus = 'off';
        console.log(element);
        console.clear();
    }, 1000);
}


function clearSensitiveData(selector) {
    if (selector) {
        if (Array.isArray(selector)) {
            selector.forEach(sel => {
                const elements = document.querySelectorAll(sel);
                elements.forEach(el => el.innerHTML = '');
            });
        } else if (typeof selector === 'string') {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = '';
            }
        }else{
            const element = document.querySelector('body');
            element.innerHTML = '';
        }
    }
}


// function detectInspectElement(clearSensitiveContent , overlayId){
//     let threshold = 160;
//     // let threshold = Math.max(window.outerWidth - window.innerWidth, window.outerHeight - window.innerHeight) + 10;
//
//     // Initial adjustment of the threshold
//     window.addEventListener('resize', () => {
//         threshold = Math.max(window.outerWidth - window.innerWidth, window.outerHeight - window.innerHeight) - 10;
//         console.log('Resize threshold', threshold);
//     });
//
//     // trigger resize event
//     (function () {
//         // threshold = Math.max(window.outerWidth - window.innerWidth, window.outerHeight - window.innerHeight) + 10;
//         let devtoolsOpen = false;
//         const detectDevTools = () => {
//             console.log('threshold', threshold);
//             const isDevToolsOpen = () => {
//                 // Detect if the developer tools are open by checking dimensions
//                 const widthDiff =  Math.abs( window.outerWidth - window.innerWidth);
//                 const heightDiff =  Math.abs( window.outerHeight - window.innerHeight);
//                 console.log('widthDiff', widthDiff);
//                 console.log('heightDiff', heightDiff);
//                 return widthDiff > threshold || heightDiff > threshold;
//             };
//
//             if (isDevToolsOpen()) {
//                 if (!devtoolsOpen) {
//                     devtoolsOpen = true;
//                     alert('Developer tools are open!');
//                     console.warn('Developer tools are open!');
//                     clearSensitiveData(clearSensitiveContent);
//                     overlayScreen(overlayId);
//                 }
//             } else {
//                 if (devtoolsOpen) {
//                     devtoolsOpen = false;
//                     HideOverlayScreen(overlayId , clearSensitiveContent);
//                 }
//             }
//         };
//
//         // Run the check every second
//         setInterval(detectDevTools, 1000);
//     })();
// }


function detectInspectElement(clearSensitiveContent, overlayId) {
    let threshold = Math.max(window.outerWidth - window.innerWidth, window.outerHeight - window.innerHeight) + 10;
    let devtoolsOpen = false;

    // Function to check if DevTools is open
    const isDevToolsOpen = () => {
        const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
        const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
        console.log('widthDiff', widthDiff);
        console.log('heightDiff', heightDiff);

        // Check for width or height differences above threshold
        return widthDiff > threshold || heightDiff > threshold;
    };

    // Function to check for debugger
    const detectDebugger = () => {
        const start = Date.now();
        debugger; // This will pause if DevTools is open
        const end = Date.now();
        return end - start > 100; // If more than 100ms passed, DevTools is likely open
    };

    // Function to detect DevTools and take action
    const detectDevTools = () => {
        if (isDevToolsOpen() || detectDebugger()) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                alert('Developer tools are open!');
                console.warn('Developer tools are open!');
                clearSensitiveData(clearSensitiveContent);
                overlayScreen(overlayId);
            }
        } else {
            if (devtoolsOpen) {
                devtoolsOpen = false;
                HideOverlayScreen(overlayId, clearSensitiveContent);
            }
        }
    };

    // Initial check and setInterval to keep checking
    detectDevTools();
    setInterval(detectDevTools, 1000);
}


function handleTouchStart(event) {
    const now = new Date().getTime();
    const timeSinceLastTouch = now - lastTouchTime;
    lastTouchTime = now;

    // Check if it's a three-finger touch and the time interval between touches is short
    if (event.touches.length === 3 && timeSinceLastTouch < 250) {
        event.preventDefault();

        alert('Three-finger screenshot prevented');
    }
}

if (isNode) {
    module.exports = noScreenshot;
}else{
    window.noScreenshot = noScreenshot;
}
