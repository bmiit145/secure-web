// here we will implement the function to prevent user to take screenshot of the web page
function noScreenshot() {
    // Disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());
    // Disable keyboard shortcuts
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 's') || (event.metaKey && (event.key === 'c' || event.key === 'u' || event.key === 'i' || event.key === 'j' || event.key === 'k' || event.key === 's'))) {
            event.preventDefault();
        }
    });
    // Disable inspect element
    document.addEventListener('keydown', event => {
        if ((event.ctrlKey && event.shiftKey && event.key === 'i') || (event.metaKey && event.shiftKey && event.key === 'i')) {
            event.preventDefault();
        }
    });
    // Disable print screen
    document.addEventListener('keydown', event => {
        if ((event.key === 'PrintScreen')) {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if ((event.ctrlKey && event.shiftKey && event.key === 's') || (event.ctrlKey && event.key === 's') || (event.metaKey && event.shiftKey && event.key === 's') || (event.metaKey && event.key === 's')) {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if ((event.ctrlKey && event.key === 's') || (event.metaKey && event.key === 's')) {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.metaKey && event.shiftKey && event.key === 's') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.metaKey && event.key === 's') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.shiftKey && event.key === 'i') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.metaKey && event.shiftKey && event.key === 'i') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key === 'i') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if (event.metaKey && event.key === 'i') {
            event.preventDefault();
        }
    });
    // Disable screenshot
    document.addEventListener('keydown', event => {
        if ((event.ctrlKey && event.shiftKey && event.key === 'j') || (event.ctrlKey && event.key === 'j') || (event.metaKey && event.shiftKey && event.key === 'j') || (event.metaKey && event.key === 'j') || (event.ctrlKey && event.shiftKey && event.key === 'k') || (event.ctrlKey && event.key === 'k') || (event.metaKey && event.shiftKey && event.key === 'k') || (event.metaKey && event.key === 'k')) {
            event.preventDefault();
        }
    });

    // disable screenshot for mac users
    document.addEventListener('keydown', event => {
        if ((event.metaKey && event.shiftKey && event.key === 'j') || (event.metaKey && event.shiftKey && event.key === '4')) {
            event.preventDefault();
            alert('Screenshot is disabled');
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
    // disable all function key
    document.addEventListener('keydown', event => {
        if (event.key === 'F1' || event.key === 'F2' || event.key === 'F3' || event.key === 'F5' || event.key === 'F6' || event.key === 'F7' || event.key === 'F8' || event.key === 'F9' || event.key === 'F10' || event.key === 'F11' || event.key === 'F12') {
            event.preventDefault();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.ctrlKey && event.key === 'F4') {
            event.preventDefault();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.ctrlKey || event.metaKey) {
            overlayScreen();
        }
    });
}

function overlayScreen() {
    const overlay = document.createElement('div');
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
    
    // Disable pointer events on body while the overlay is active
    document.body.style.pointerEvents = 'none';
    
    document.addEventListener('keydown', escListener);
    
    function escListener(event) {
        if (event.key === 'Escape') {
            document.body.removeChild(overlay);
            document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
            document.removeEventListener('keydown', escListener);
        }
    }
}
module.exports = noScreenshot;