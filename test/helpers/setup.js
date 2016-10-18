require('babel-register') ({
  presets: ["react", "es2015"]
});
require('babel-polyfill')
require('jquery')

global.document = require('jsdom').jsdom(
  "<head> <meta charset='utf-8'> <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'></script><title>Weatherly</title> </head> <body> <div id='react-root'></div> </body><script src = 'main.bundle.js'" ) // the virtual dom this is where our application is rendered.
global.window = document.defaultView // if we have to go to the window (Event bubbling, referencing the window)
global.navigator = window.navigator // if something is paginated this allows us to go from page to page
if (!global.window.localStorage) {
  localStorage = {
    getItem() {return '{}'; },}
  }

  if (typeof(exports) !== "undefined"){
    var $ = require('jquery');
}
//global is the window in node
// using globals are pretty bad and thats why you typically don't see this used.
