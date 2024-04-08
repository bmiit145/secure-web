
# secure-web

secure-web is an npm package that prevents users from taking screenshots of your web page by securing it against various methods of screenshot capture. It provides customizable options to tailor the security measures according to your needs.


## Installation

Install the package via npm:

```bash
npm install secure-web
```

## Usage

Simply import the `noScreenshot` function from the `secure-web` package and call it in your JavaScript code:

```javascript
const noScreenshot = require('secure-web');

noScreenshot({
    disableRightClick: true,
    disableKeyboardShortcuts: true,
    disableInspectElement: true,
    disablePrintScreen: true,
    disableScreenshot: true,
    disableFunctionKeys: true,
    disableCtrlF4: true,
    mouseLeave: true, // required for overlay with mouse leave a browser window
    mouseEnterAutoHide: false, // required for auto hide overlay with mouse enter a browser window
    ctrlOverlay: true, 
    altOverlay: false, // must be pass true for overlay with Alt or Options key press
    shiftOverlay: false, // must be pass true for overlay with Shift key press
} , 'custom-overlay-id');
```

This function will disable right-click, keyboard shortcuts, inspect element, print screen, and various other methods commonly used for taking screenshots. Additionally, it will overlay a message on the screen indicating that screenshots are disabled.

Make sure to replace "custom-overlay-id" with the ID of the custom overlay you want to use, or omit it to use the default overlay.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Web Page</title>
    <style link="stylesheet" href="path/to/secure-web.css"></style>
    <script src="node_modules/secure-web/dist/secure-web.js"></script>
<!--    live link of package -->
    <script src="https://cdn.jsdelivr.net/npm/secure-web/dist/secure-web.js"></script>
</head>
<body>
    <script>
        window.onload = function() {
            noScreenshot({
                altOverlay: true,
                shiftOverlay: true,
            });
        };
    </script>
</body>
</html>
```

Make sure to replace `"path/to/secure-web.js"` in the example HTML with the actual path to your `secure-web.js` file. Also, customize the installation, usage, example, and API sections as necessary for your package.

## Options

The `noScreenshot` function accepts the following options:

- `disableRightClick`: Disables right-clicking on the web page.
- `disableKeyboardShortcuts`: Disables keyboard shortcuts such as Ctrl+C, Ctrl+U, etc.
- `disableInspectElement`: Disables the inspect element functionality.
- `disablePrintScreen`: Disables the print screen functionality.
- `disableScreenshot`: Disables taking screenshots using various methods.
- `disableFunctionKeys`: Disables function keys (F1-F12).
- `disableCtrlF4`: Disables the Ctrl+F4 key combination.
- `mouseLeave`: Activates overlay when cursor leaves the window.
- `mouseEnterAutoHide`: Activates overlay when cursor enters the window.
- `ctrlOverlay`: Activates overlay when Ctrl or Command key is pressed.
- `altOverlay`: Activates overlay when Alt or Options key is pressed.
- `shiftOverlay`: Activates overlay when Shift key is pressed.

## Example

```javascript
const noScreenshot = require('secure-web');

window.onload = function() {
    noScreenshot({
        disableRightClick: true,
        disableKeyboardShortcuts: true,
        disableInspectElement: true,
        disablePrintScreen: true,
        disableScreenshot: true,
        disableFunctionKeys: true,
        disableCtrlF4: true,
        mouseLeave: true,
        mouseEnterAutoHide: false,
        ctrlOverlay: true,
        altOverlay: true,
        shiftOverlay: true,
    } , 'custom-overlay-id');
};
```

## API

### noScreenshot(options)

The `noScreenshot` function disables various methods of taking screenshots and overlays a message on the screen indicating that screenshots are disabled. It accepts an `options` object with the following properties:

- `disableRightClick`
- `disableKeyboardShortcuts`
- `disableInspectElement`
- `disablePrintScreen`
- `disableScreenshot`
- `disableFunctionKeys`
- `disableCtrlF4`
- `mouseLeave`
- `mouseEnterAutoHide`
- `ctrlOverlay`
- `altOverlay`
- `shiftOverlay`
- `overlayId`: Optional parameter to specify the ID of a custom overlay to use instead of the default one.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This README now includes a section detailing the available options for the `noScreenshot` function, providing users with a clear understanding of how they can customize the behavior of the package.