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
        document.addEventListener('keydown', event => {
            if ((event.ctrlKey && event.shiftKey && event.key === 'i') || (event.metaKey && event.shiftKey && event.key === 'i')) {
                event.preventDefault();
            }
            if ((event.ctrlKey && event.shiftKey && event.key === 'c') || (event.metaKey && event.shiftKey && event.key === 'c')) {
                event.preventDefault();
            }
        });
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

    // Disable pointer events on body while the overlay is active
    // document.body.style.pointerEvents = 'none';
    document.body.style.pointerEvents = 'auto';

    document.addEventListener('keydown', escListener);

    function escListener(event) {
        if (event.key === 'Escape') {
            HideOverlayScreen(overlayId);
            // document.body.removeChild(overlay);
            // document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
            // document.removeEventListener('keydown', escListener);
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


function HideOverlayScreen(overlayId) {
    if (overlayId) {
        const customOverlay = document.getElementById(overlayId);
        if (customOverlay) {
            customOverlay.style.display = 'none'; // Hide the custom overlay
            document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
            return;
        }
    }
    var overlay = document.getElementById('no-screenshot-overlay');
    document.body.removeChild(overlay);
    document.body.style.pointerEvents = 'auto'; // Re-enable pointer events on body
    //document.removeEventListener('keydown', escListener);
}

if (isNode) {
    module.exports = noScreenshot;
}else{
    window.noScreenshot = noScreenshot;
}

