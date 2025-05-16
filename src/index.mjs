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
import { uibuilder } from '../uibuilder/uibuilder.esm.min.js'

// Use uibuilder's $ shortcut fn to get the counter DOM element
const counter = $('#counter')
if (!counter) {
    console.error('Counter element not found in DOM')
    // Updates the HTML element with id 'more' to show that the counter element was not found
    $('#more').innerText = 'Counter element not found in DOM'
}

/** Click handler for decreaseBtn and increaseBtn that decreases/increases the value of the counter and sends the new value to Node-RED
 * Debounces inputs from the +/- buttons to prevent rapid clicks from sending too many messages back to Node-RED unnecessarily.
 * @param {Event} event - The click DOM event - a magic property of the event handler callback
 */
function updCounter(event) {
    if (event.target.id === 'increaseBtn') {
        counter.value = parseInt(counter.value) + 1
    } else {
        counter.value = parseInt(counter.value) - 1
    }

    // Clear any existing timer to debounce rapid clicks
    clearTimeout(updCounter.timer)
    // Set new timer that will only send the final value after 1/2 second
    updCounter.timer = setTimeout(() => {
        uibuilder.send({ topic: 'counter', payload: counter.value })
    }, 500) // 500ms = 1/2 second
    // NB: Adds the "timer" property to the function itself
    // This is a trick to allow a function to have its own properties
}
$('#decreaseBtn').addEventListener('click', updCounter)
$('#increaseBtn').addEventListener('click', updCounter)

// Listen for incoming messages from Node-RED and action
uibuilder.onChange('msg', (msg) => {
    console.log('Incoming msg: ', msg)
    // do stuff with the incoming msg
    $('#more').innerText = msg.payload
})
