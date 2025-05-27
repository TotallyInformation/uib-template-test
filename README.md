# uib-template-test

This is a test external template for node-red-contrib-uibuilder.

## Installation

1. Add a suitable uibuilder node to your Node-RED flow and set the `url` then deploy.
2. Open the uibuilder node in the Editor and choose "Simple ES Module Template (external)" from the Template dropdown.
3. Click the "Load" button.

The template will be downloaded and installed into the node's instance folder and is then ready to use. You can examine the files in the Files tab or open the instance folder in your code editor.

## Updates

Once loaded into your uibuilder instance, no updattes will be made to the template files by uibuilder.

If you want to update the template, you can do so by re-doing the installation. Of course, this will overwrite all files of the same name so if you want to retain anything you have done, make a copy first.

## Content

The main content of the template will be found in the `src` folder. This is where you will find the HTML, CSS and JavaScript files that make up the template and defines the user interface for uibuilder.

A uibuilder node will use the `src` folder by default. However, you can use a different folder if you prefer. If you add a build step for more complex processing, you would typically build the output into the `dist` folder and then set the uibuilder node to use that folder instead.

If you need any development npm libraries, you can add them as normal to the `package.json` file. The libraries will not be installed by default, you need to run `npm install` in the template folder to install them.

You should not include any runtime libraries in `package.json` as they will be ignored by uibuilder. Instead, use the "Libraries" tab in the uibuilder node to add any runtime libraries that you need.

## UI

The HTML shows up a title and sub-title. Then there are 3 "cards" using the semantic `article` element.

* Card 1 - A simple card with a title and text.
* Card 2 - A card with +/- buttons and an output element. This is a simple counter. The updated counter value is also sent back to Node-RED (see `index.mjs`). Rapid clicks update the value but only the last value is sent back to Node-RED.
* Card 3 - A card with a text input and a button. The text is sent back to Node-RED when the button is clicked. This uses an HTML form so all data in the form is automatically sent back to Node-RED when the buttton is clicked. Make sure to set a debug node in your flow to show the whole message object to see all the data.

You can send a message to the uibuilder node in Node-RED. The `msg.payload` text will be shown beneath the cards.

There is also an empty `<div>` element with the id `more`. This is included in all uibuilder templates. It is used by the uibuilder example flows that output dynamic UI elements. You may find it convenient to use for your own purposes. You can add your own elements to it in the HTML or JavaScript code. The uibuilder example flows will add their own elements to it when they are run.

In addition, the `more` div uses uibuilder's `uib-topic` special attribute which allows it to be used as a target for messages sent from Node-RED. This is a useful feature that allows you to easily update the content of the page without having to write any JavaScript code. Send a message containing `{ topic: 'more', payload: 'Hello World' }` to the `uibuilder` node and the content of the `more` div will be updated with "Hello World". Note that the payload can contain HTML. As an example, use an inject node with `msg.payload` set to use a JSONata expression like `"<b style='background-color:var(--error)'>Hello!</b> This is a message from Node-RED at " & $moment()`. Don't forget to set `msg.topic` to `more` so that the uibuilder client library knows where to send the message.

> **WARNING**: Using the "more" topic completely overwrites the contents of the `more` div.

## Folder Structure

* The root folder contains the `package.json`, `README.md`, and LICENSE files. It can contain other files as needed.
* `src` - The main source folder. This is where you will find the HTML, CSS and JavaScript files that make up the template. It is the default folder used by uibuilder. Note `*.mjs` is used for JavaScript files since ES Modules are used. You don't have to do that but it makes it easier to remember which files are loaded as JS Modules.
* `dist` - The distribution folder. This is where you would build your output files if you are using a build step. By default, this template has no build step.
* `api` - Optional API folder. This is where you would put any server-side code that you need to run.
* `routes` - Optional routes folder. This is where you would put any server-side ExpressJS route functions. These could include server-side templates as well as dynamic routing URLs.
* `types` - Contains typescript definition files (`*.d.ts`) for the uibuilder client library. This is not used by uibuilder but can be used by your IDE to provide type checking and auto-completion for the uibuilder client library. This is useful if you are using TypeScript or JavaScript with type checking enabled. Remember to update these for new uibuilder versions.

Other folders can be added as needed for your own code.

Only a single folder is used by uibuilder as the resources folder. `src` by defult. Sub-folder are also served and can be used as desired.

## Multiple HTML pages

uibuilder will happily serve up any number of web pages from a single instance. It will also make use of sub-folders. However, each folder should have an `index.html` file so that a URL that ends with the folder name will still work without error.

Note that each html file is a separate page and requires its own JavaScript and uibuilder library reference. When moving between pages, remember that every page is stand-alone, a new environment. You can share one `index.js` file between multiple pages if you prefer but each page will run a separate instance.

If multiple pages are connected to the same uibuilder instance, they will all get the same broadcast messages from Node-RED. So if you want to handle different messages on different pages, remember to filter them in your front-end JavaScript in `uibuilder.onChange('msg', ....)` function. Turn on the advanced flag for including a `msg._uib` property in output if you need to differentiate between pages and/or clients in Node-RED.

## URL endpoints

When specifying links in your HTML, CSS and JavaScript files, you should use relative URLs. e.g. `./index.mjs` will load that file from the `src` folder or wherever else you have told uibuilder to use.

When using uibuilder's server-side resources, you will generally use `../uibuilder/....`, for example `../uibuilder/uib-brand.min.css` as seen in the default `index.css` file. When accessing a front-end library being served by uibuilder, you can use the form `../uibuilder/vendor/....`. Use the "Full details" button in the uibuilder node to see all of the possible endpoints you may want to use.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

This template may be used however you like. It is provided as a test template for uibuilder and is not intended to be a full template. You are free to use it as a starting point for your own template or to use it as-is if you find it useful.
