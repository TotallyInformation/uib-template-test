# uib-template-test

This is a test external template for node-red-contrib-uibuilder.

## Installation

1. Add a suitable uibuilder node to your Node-RED flow and set the `url` then deploy.
2. Open the uibuilder node in the Editor and choose "Load an external template using Degit" from the Template dropdown.
3. Paste the following URL into the text box: `TotallyInformation/uib-template-test`
4. Click the "Load" button.

The template will be downloaded and installed into the node's instance folder and is then ready to use. You can examine the files in the Files tab or open the instance folder in your code editor.

## Updates

Once loaded into your uibuilder instance, no updattes will be made to the template files by uibuilder.

If you want to update the template, you can do so by re-doing the installation. Of course, this will overwrite all files of the same name so if you want to retain anything you have done, make a copy first.

## Content

The main content of the template will be found in the `src` folder. This is where you will find the HTML, CSS and JavaScript files that make up the template and defines the user interface for uibuilder.

A uibuilder node will use the `src` folder by default. However, you can use a different folder if you prefer. If you add a build step for more complex processing, you would typically build the output into the `dist` folder and then set the uibuilder node to use that folder instead.

If you need any development npm libraries, you can add them as normal to the `package.json` file. The libraries will not be installed by default, you need to run `npm install` in the template folder to install them.

You should not include any runtime libraries in `package.json` as they will be ignored by uibuilder. Instead, use the "Libraries" tab in the uibuilder node to add any runtime libraries that you need.

## Folder Structure

* The root folder contains the `package.json`, `README.md`, and LICENSE files. It can contain other files as needed.
* `src` - The main source folder. This is where you will find the HTML, CSS and JavaScript files that make up the template. It is the default folder used by uibuilder.
* `dist` - The distribution folder. This is where you would build your output files if you are using a build step.
* `api` - Optional API folder. This is where you would put any server-side code that you need to run.
* `routes` - Optional routes folder. This is where you would put any server-side ExpressJS route functions. These could include server-side templates as well as dynamic routing URLs.
* `node_modules` - This is where the Node.js libraries are installed if you have any. You would not need to modify this folder. You would also not normally include this folder in your version control system (e.g. git) as it can be re-created from the `package.json` file using `npm install`.

Other folders can be added as needed for your own code.

Only a single folder is used by uibuilder as the resources folder. `src` by defult. Sub-folder are also served and can be used as desired.

## URL endpoints

When specifying links in your HTML, CSS and JavaScript files, you should use relative URLs. e.g. `./index.mjs` will load that file from the `src` folder or wherever else you have told uibuilder to use.

When using uibuilder's server-side resources, you will generally use `../uibuilder/....`, for example `../uibuilder/uib-brand.min.css` as seen in the default `index.css` file. When accessing a front-end library being served by uibuilder, you can use the form `../uibuilder/vendor/....`. Use the "Full details" button in the uibuilder node to see all of the possible endpoints you may want to use.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

This template may be used however you like. It is provided as a test template for uibuilder and is not intended to be a full template. You are free to use it as a starting point for your own template or to use it as-is if you find it useful.

