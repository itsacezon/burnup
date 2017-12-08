'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}

// Chrome mobile in iOS errors when autofill is off
// - https://bugs.chromium.org/p/chromium/issues/detail?id=590375
// - http://lealog.hateblo.jp/entry/2015/02/24/131643
const dummy = () => {}
window.__gCrWeb = window.__gCrWeb || {}
window.__gCrWeb.autofill = window.__gCrWeb.autofill || {}
window.__gCrWeb.autofill.extractForms = window.__gCrWeb.autofill.extractForms || dummy
window.__gCrWeb.innerSizeAsString = window.__gCrWeb.innerSizeAsString || dummy
window.__gCrWeb.getElementFromPoint = window.__gCrWeb.getElementFromPoint || dummy
