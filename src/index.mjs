// @ts-nocheck
/** Simple example of using uibuilder with modern JS Modules
 * Version: 2025-05-16
 * @license MIT
 * @author Totally Information (Julian Knight)
 * 
 * Note that this module loads asynchronously as defined in the HTML.
 * This may have the impact of you needing to wait for everything to be loaded
 * before you can manipulate the HTML DOM.
 */

// See import map in index.html for import shortcuts
import { uibuilder } from 'uibuilder'

// Listen for incoming messages from Node-RED and action
uibuilder.onChange('msg', (msg) => {
    console.log('Incoming msg: ', msg)
    // do stuff with the incoming msg
})
