# secure-web

secure-web is an npm package that prevents users from taking screenshots of your web page by securing it against various methods of screenshot capture.

## Installation

Install the package via npm:

```
npm install secure-web
```

## Usage

Simply import the `noScreenshot` function from the `secure-web` package and call it in your JavaScript code:

```javascript
const noScreenshot = require('secure-web');

noScreenshot();
```

This function will disable right-click, keyboard shortcuts, inspect element, print screen, and various other methods commonly used for taking screenshots. Additionally, it will overlay a message on the screen indicating that screenshots are disabled.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Web Page</title>
    <script src="node_modules/secure-web/dist/secure-web.js"></script>
<!--    live link of package -->
    <script src="https://cdn.jsdelivr.net/npm/secure-web/dist/secure-web.js"></script>
</head>
<body>
    <script>
        window.onload = function() {
            noScreenshot();
        };
    </script>
</body>
</html>
```

## Example

```javascript
const noScreenshot = require('secure-web');

window.onload = function() {
    noScreenshot();
};
```

## API

### noScreenshot()

The `noScreenshot` function disables various methods of taking screenshots and overlays a message on the screen indicating that screenshots are disabled.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Make sure to replace `"path/to/secure-web.js"` in the example HTML with the actual path to your `secure-web.js` file. Also, customize the installation, usage, example, and API sections as necessary for your package.