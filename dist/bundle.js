/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n\n  background-color: #353945;\n}\n\n#header {\n  width: 500px;\n  margin: 15px auto 20px auto;\n  padding: 5px 0;\n\n  text-align: center;\n  font-size: 36px;\n  color: white;\n\n  background-color: black;\n}\n\n/* Main block */\n#block-main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 20px;\n}\n\n#message-placing {\n  position: absolute;\n  top: -65px;\n  left: -20px;\n\n  width: 280px;\n  padding: 5px;\n\n  background-color: #faf9f9;\n\n  border: 1px transparent;\n  border-radius: 5px;\n}\n\n/* Ships block */\n#block-ships {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  margin: 50px 20px 0 0;\n  padding: 10px;\n\n  background-color: #555B6E;\n  border: 1px transparent;\n  border-radius: 5px;\n}\n.ship {\n  display: flex;\n  flex-direction: row;\n\n  margin: 5px;\n}\n.ship-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 38px;\n  height: 38px;\n\n  background-color: #89B0AE;\n}\n#container-ship1 {\n  display: flex;\n  flex-wrap: wrap;\n}\n.input-position {\n  width: 30px;\n  height: 30px;\n\n  text-align: center;\n  font-size: 18px;\n\n  border: none;\n}\n.input-invalid {\n  color: red\n}\n\n/* Grid blocks */\n.block-grid {\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n.name {\n  margin: 10px 0;\n  padding: 3px 5px;\n\n  font-size: 24px;\n  color: white;\n\n  background-color: black;\n}\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n\n  width: 420px;\n  height: 370px;\n  margin: 0;\n\n  background-color: #89B0AE;\n}\n.grid-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 42px;\n\n  outline: 1px solid;\n\n  cursor: pointer;\n}\n\n.placed {\n  background-color: white;\n  outline: none;\n  border-top: 1px transparent;\n  border-bottom: 1px transparent;\n  border-radius: 5px;\n}\n\n.hidden-item {\n  position: absolute;\n}\n\n.cover {\n  position: absolute;\n  width: 420px;\n  height: 370px;\n\n  background-color: black;\n  opacity: .3;\n}\n\n/* Center block */\n#block-center {\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n\n  width: 250px;\n  height: 280px;\n  margin: 0 60px;\n  padding: 15px 0;\n\n  background-color: #555B6E;\n  border: 1px transparent;\n  border-radius: 10px;\n}\n\n/* Buttons block */\n#block-buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.btn {\n  width: 150px;\n  height: 30px;\n  margin: 2px 0;\n\n  font-size: 16px;\n  color: white;\n  font-weight: bold;\n\n  background-color: #89B0AE;\n  border: 1px transparent;\n  border-radius: 3px;\n}\n.btn:hover {\n  background-color: #BEE3DB;\n}\n#button-horizontal-placing {\n  margin-bottom: 20px;\n}\n#button-random {\n  width: 200px;\n}\n\n/* Start Game block */\n#block-start-game {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 25px;\n}\n#btn-start-game {\n  height: 30px;\n\n  border: 3px solid #BEE3DB;\n}\n#btn-play-again {\n  border: 3px solid #BEE3DB;\n}\n.error {\n  margin: 8px;\n  padding: 3px;\n  width: 200px;\n\n  text-align: center;\n  font-size: 17px;\n\n  background-color: #FAF9F9;\n  border: 1px transparent;\n  border-radius: 5px;\n}\n#container-score {\n  display: flex;\n  flex-direction: column;\n\n  margin: 0 60px;\n  padding: 5px 15px;\n\n  text-align: center;\n  color: white;\n\n  background-color: #89B0AE;\n  border: 1px transparent;\n  border-radius: 3px;\n}\n#score-title {\n  font-size: 20px;\n}\n#score-body {\n  display: flex;\n  justify-content: center;\n  padding: 3px;\n\n  font-size: 24px;\n  font-weight: bold;\n}\n#btn-abort-game {\n  width: 125px;\n  height: 25px;\n  margin-top: 165px;\n\n  font-weight: normal;\n}\n#message-endgame {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin: 20px;\n  padding: 5px 10px;\n\n  text-align: center;\n  color: white;\n  font-size: 18px;\n\n  background-color: black;\n}\n#message-endgame-title {\n  margin-bottom: 15px;\n\n  font-size: 23px;\n}\n\n.hidden {\n  display: none;\n}\n\n.confirm {\n  background-color: #CE5374;\n}\n.confirm:hover {\n  background-color: #D7708B;\n}\n", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0;\n\n  background-color: #353945;\n}\n\n#header {\n  width: 500px;\n  margin: 15px auto 20px auto;\n  padding: 5px 0;\n\n  text-align: center;\n  font-size: 36px;\n  color: white;\n\n  background-color: black;\n}\n\n/* Main block */\n#block-main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 20px;\n}\n\n#message-placing {\n  position: absolute;\n  top: -65px;\n  left: -20px;\n\n  width: 280px;\n  padding: 5px;\n\n  background-color: #faf9f9;\n\n  border: 1px transparent;\n  border-radius: 5px;\n}\n\n/* Ships block */\n#block-ships {\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  margin: 50px 20px 0 0;\n  padding: 10px;\n\n  background-color: #555B6E;\n  border: 1px transparent;\n  border-radius: 5px;\n}\n.ship {\n  display: flex;\n  flex-direction: row;\n\n  margin: 5px;\n}\n.ship-part {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 38px;\n  height: 38px;\n\n  background-color: #89B0AE;\n}\n#container-ship1 {\n  display: flex;\n  flex-wrap: wrap;\n}\n.input-position {\n  width: 30px;\n  height: 30px;\n\n  text-align: center;\n  font-size: 18px;\n\n  border: none;\n}\n.input-invalid {\n  color: red\n}\n\n/* Grid blocks */\n.block-grid {\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n  align-items: center;\n}\n.name {\n  margin: 10px 0;\n  padding: 3px 5px;\n\n  font-size: 24px;\n  color: white;\n\n  background-color: black;\n}\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n\n  width: 420px;\n  height: 370px;\n  margin: 0;\n\n  background-color: #89B0AE;\n}\n.grid-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 42px;\n\n  outline: 1px solid;\n\n  cursor: pointer;\n}\n\n.placed {\n  background-color: white;\n  outline: none;\n  border-top: 1px transparent;\n  border-bottom: 1px transparent;\n  border-radius: 5px;\n}\n\n.hidden-item {\n  position: absolute;\n}\n\n.cover {\n  position: absolute;\n  width: 420px;\n  height: 370px;\n\n  background-color: black;\n  opacity: .3;\n}\n\n/* Center block */\n#block-center {\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n\n  width: 250px;\n  height: 280px;\n  margin: 0 60px;\n  padding: 15px 0;\n\n  background-color: #555B6E;\n  border: 1px transparent;\n  border-radius: 10px;\n}\n\n/* Buttons block */\n#block-buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.btn {\n  width: 150px;\n  height: 30px;\n  margin: 2px 0;\n\n  font-size: 16px;\n  color: white;\n  font-weight: bold;\n\n  background-color: #89B0AE;\n  border: 1px transparent;\n  border-radius: 3px;\n}\n.btn:hover {\n  background-color: #BEE3DB;\n}\n#button-horizontal-placing {\n  margin-bottom: 20px;\n}\n#button-random {\n  width: 200px;\n}\n\n/* Start Game block */\n#block-start-game {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-top: 25px;\n}\n#btn-start-game {\n  height: 30px;\n\n  border: 3px solid #BEE3DB;\n}\n#btn-play-again {\n  border: 3px solid #BEE3DB;\n}\n.error {\n  margin: 8px;\n  padding: 3px;\n  width: 200px;\n\n  text-align: center;\n  font-size: 17px;\n\n  background-color: #FAF9F9;\n  border: 1px transparent;\n  border-radius: 5px;\n}\n#container-score {\n  display: flex;\n  flex-direction: column;\n\n  margin: 0 60px;\n  padding: 5px 15px;\n\n  text-align: center;\n  color: white;\n\n  background-color: #89B0AE;\n  border: 1px transparent;\n  border-radius: 3px;\n}\n#score-title {\n  font-size: 20px;\n}\n#score-body {\n  display: flex;\n  justify-content: center;\n  padding: 3px;\n\n  font-size: 24px;\n  font-weight: bold;\n}\n#btn-abort-game {\n  width: 125px;\n  height: 25px;\n  margin-top: 165px;\n\n  font-weight: normal;\n}\n#message-endgame {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin: 20px;\n  padding: 5px 10px;\n\n  text-align: center;\n  color: white;\n  font-size: 18px;\n\n  background-color: black;\n}\n#message-endgame-title {\n  margin-bottom: 15px;\n\n  font-size: 23px;\n}\n\n.hidden {\n  display: none;\n}\n\n.confirm {\n  background-color: #CE5374;\n}\n.confirm:hover {\n  background-color: #D7708B;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */
(function (root, factory) {
  'use strict';

  var PubSub = {};
  root.PubSub = PubSub;
  var define = root.define;
  factory(PubSub); // AMD support

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return PubSub;
    }); // CommonJS and Node.js module support
  } else if (true) {
    if (module !== undefined && module.exports) {
      exports = module.exports = PubSub; // Node.js specific `module.exports`
    }

    exports.PubSub = PubSub; // CommonJS module 1.1.1 spec

    module.exports = exports = PubSub; // CommonJS
  }
})(typeof window === 'object' && window || this, function (PubSub) {
  'use strict';

  var messages = {},
      lastUid = -1,
      ALL_SUBSCRIBING_MSG = '*';

  function hasKeys(obj) {
    var key;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }

    return false;
  }
  /**
   * Returns a function that throws the passed exception, for use as argument for setTimeout
   * @alias throwException
   * @function
   * @param { Object } ex An Error object
   */


  function throwException(ex) {
    return function reThrowException() {
      throw ex;
    };
  }

  function callSubscriberWithDelayedExceptions(subscriber, message, data) {
    try {
      subscriber(message, data);
    } catch (ex) {
      setTimeout(throwException(ex), 0);
    }
  }

  function callSubscriberWithImmediateExceptions(subscriber, message, data) {
    subscriber(message, data);
  }

  function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
    var subscribers = messages[matchedMessage],
        callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
        s;

    if (!messages.hasOwnProperty(matchedMessage)) {
      return;
    }

    for (s in subscribers) {
      if (subscribers.hasOwnProperty(s)) {
        callSubscriber(subscribers[s], originalMessage, data);
      }
    }
  }

  function createDeliveryFunction(message, data, immediateExceptions) {
    return function deliverNamespaced() {
      var topic = String(message),
          position = topic.lastIndexOf('.'); // deliver the message as it is now

      deliverMessage(message, message, data, immediateExceptions); // trim the hierarchy and deliver message to each level

      while (position !== -1) {
        topic = topic.substr(0, position);
        position = topic.lastIndexOf('.');
        deliverMessage(message, topic, data, immediateExceptions);
      }

      deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
    };
  }

  function hasDirectSubscribersFor(message) {
    var topic = String(message),
        found = Boolean(messages.hasOwnProperty(topic) && hasKeys(messages[topic]));
    return found;
  }

  function messageHasSubscribers(message) {
    var topic = String(message),
        found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
        position = topic.lastIndexOf('.');

    while (!found && position !== -1) {
      topic = topic.substr(0, position);
      position = topic.lastIndexOf('.');
      found = hasDirectSubscribersFor(topic);
    }

    return found;
  }

  function publish(message, data, sync, immediateExceptions) {
    message = typeof message === 'symbol' ? message.toString() : message;
    var deliver = createDeliveryFunction(message, data, immediateExceptions),
        hasSubscribers = messageHasSubscribers(message);

    if (!hasSubscribers) {
      return false;
    }

    if (sync === true) {
      deliver();
    } else {
      setTimeout(deliver, 0);
    }

    return true;
  }
  /**
   * Publishes the message, passing the data to it's subscribers
   * @function
   * @alias publish
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */


  PubSub.publish = function (message, data) {
    return publish(message, data, false, PubSub.immediateExceptions);
  };
  /**
   * Publishes the message synchronously, passing the data to it's subscribers
   * @function
   * @alias publishSync
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */


  PubSub.publishSync = function (message, data) {
    return publish(message, data, true, PubSub.immediateExceptions);
  };
  /**
   * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
   * @function
   * @alias subscribe
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { String }
   */


  PubSub.subscribe = function (message, func) {
    if (typeof func !== 'function') {
      return false;
    }

    message = typeof message === 'symbol' ? message.toString() : message; // message is not registered yet

    if (!messages.hasOwnProperty(message)) {
      messages[message] = {};
    } // forcing token as String, to allow for future expansions without breaking usage
    // and allow for easy use as key names for the 'messages' object


    var token = 'uid_' + String(++lastUid);
    messages[message][token] = func; // return token for unsubscribing

    return token;
  };

  PubSub.subscribeAll = function (func) {
    return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
  };
  /**
   * Subscribes the passed function to the passed message once
   * @function
   * @alias subscribeOnce
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { PubSub }
   */


  PubSub.subscribeOnce = function (message, func) {
    var token = PubSub.subscribe(message, function () {
      // before func apply, unsubscribe message
      PubSub.unsubscribe(token);
      func.apply(this, arguments);
    });
    return PubSub;
  };
  /**
   * Clears all subscriptions
   * @function
   * @public
   * @alias clearAllSubscriptions
   */


  PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
    messages = {};
  };
  /**
   * Clear subscriptions by the topic
   * @function
   * @public
   * @alias clearAllSubscriptions
   * @return { int }
   */


  PubSub.clearSubscriptions = function clearSubscriptions(topic) {
    var m;

    for (m in messages) {
      if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
        delete messages[m];
      }
    }
  };
  /** 
     Count subscriptions by the topic
   * @function
   * @public
   * @alias countSubscriptions
   * @return { Array }
  */


  PubSub.countSubscriptions = function countSubscriptions(topic) {
    var m;
    var count = 0;

    for (m in messages) {
      if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
        count++;
      }
    }

    return count;
  };
  /** 
     Gets subscriptions by the topic
   * @function
   * @public
   * @alias getSubscriptions
  */


  PubSub.getSubscriptions = function getSubscriptions(topic) {
    var m;
    var list = [];

    for (m in messages) {
      if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
        list.push(m);
      }
    }

    return list;
  };
  /**
   * Removes subscriptions
   *
   * - When passed a token, removes a specific subscription.
   *
  * - When passed a function, removes all subscriptions for that function
   *
  * - When passed a topic, removes all subscriptions for that topic (hierarchy)
   * @function
   * @public
   * @alias subscribeOnce
   * @param { String | Function } value A token, function or topic to unsubscribe from
   * @example // Unsubscribing with a token
   * var token = PubSub.subscribe('mytopic', myFunc);
   * PubSub.unsubscribe(token);
   * @example // Unsubscribing with a function
   * PubSub.unsubscribe(myFunc);
   * @example // Unsubscribing from a topic
   * PubSub.unsubscribe('mytopic');
   */


  PubSub.unsubscribe = function (value) {
    var descendantTopicExists = function (topic) {
      var m;

      for (m in messages) {
        if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
          // a descendant of the topic exists:
          return true;
        }
      }

      return false;
    },
        isTopic = typeof value === 'string' && (messages.hasOwnProperty(value) || descendantTopicExists(value)),
        isToken = !isTopic && typeof value === 'string',
        isFunction = typeof value === 'function',
        result = false,
        m,
        message,
        t;

    if (isTopic) {
      PubSub.clearSubscriptions(value);
      return;
    }

    for (m in messages) {
      if (messages.hasOwnProperty(m)) {
        message = messages[m];

        if (isToken && message[value]) {
          delete message[value];
          result = value; // tokens are unique, so we can just stop here

          break;
        }

        if (isFunction) {
          for (t in message) {
            if (message.hasOwnProperty(t) && message[t] === value) {
              delete message[t];
              result = true;
            }
          }
        }
      }
    }

    return result;
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/components/Gameboard.js":
/*!*************************************!*\
  !*** ./src/components/Gameboard.js ***!
  \*************************************/
/*! exports provided: Gameboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gameboard", function() { return Gameboard; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

class Gameboard {
  constructor(player) {
    this.aliveShips = [];
    this.missedHitsCoordinates = [];
    this.player = player;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('ship_is_sunk', () => {
      /* Removing the sunk ship from aliveShips array and checking for
      whether there are any ships on player's gameboard */
      const index = this.aliveShips.findIndex(ship => {
        if (ship.isSunk === true) {
          return ship;
        }
      });

      if (index !== -1) {
        this.aliveShips.splice(index, 1);
        this.areShipsAlive();
      }
    });
  }

  createShip(ship) {
    if (ship.direction === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push('' + ship.x + (ship.y + i));
      }
    } else if (ship.direction === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        ship.body.push('' + (ship.x + i) + ship.y);
      }
    }

    return ship;
  }

  createShipOnGameboard(ship) {
    this.aliveShips.push(this.createShip(ship));
  }

  deleteShipFromGameboard(shipId) {
    this.aliveShips = this.aliveShips.filter(ship => shipId !== ship.shipId);
  }

  receiveAttack(coordinates, player) {
    const isHit = this.aliveShips.some(ship => {
      return ship.body.some(position => {
        return position === coordinates;
      });
    });

    if (isHit) {
      this.aliveShips.forEach(ship => {
        ship.hit(coordinates);
      });

      if (this.player === 'player1') {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('ai_successful_hit', coordinates);
      }
    } else {
      this.missedHitsCoordinates.push(coordinates);
    }

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('attack_is_executed', {
      coordinates: coordinates,
      missedHits: this.missedHitsCoordinates,
      player: player
    });
  }

  areShipsAlive() {
    if (this.aliveShips.length <= 0) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('no_alive_ships', this.player);
    }

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('ships_are_alive', {
      amount: this.aliveShips.length,
      player: this.player
    });
  }

}

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

class Player {
  constructor(gameboard, versusAi = false, isAi = false) {
    this.gameboard = gameboard;
    this.previousCoordinates = [];
    this.versusAi = versusAi;
    this.isAi = isAi;
    this.aiSuccessfulHits = [];
    /* In case there is an unexpected error when clicking on the grid */

    this.recursionCounter = 0;
    /* 'ship_is_sunk' event fires earlier that 'ai_successful_hit',
      which is not desired */

    this.isSunk = false;
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('ai_successful_hit', (msg, coordinates) => {
      this.aiSuccessfulHits.push(coordinates);

      if (this.isSunk) {
        this.aiSuccessfulHits = [];
      }

      this.isSunk = false;
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('ship_is_sunk', () => {
      this.isSunk = true;
    });
  }

  receiveDamage(coordinates, player) {
    /* Checking if the received coordinates have been passed in before */
    const wasHit = this.previousCoordinates.some(prevCoordinates => prevCoordinates === coordinates);
    /* If the player clicks on the same spot multiple times */

    if (wasHit && this.isAi) {
      return;
      /* If AI clicks on the same spot multiple times */
    } else if (wasHit && !this.isAi) {
      this.recursionCounter++;
      this.makeTurnAi();
    } else {
      this.gameboard.receiveAttack(coordinates, player);
      this.previousCoordinates.push(coordinates);
      this.recursionCounter = 0;
      /* AI player makes a turn */

      if (this.isAi && this.versusAi) {
        this.makeTurnAi();
      }
    }

    if (this.recursionCounter > 500) {
      return undefined;
    }
  }

  makeTurnAi() {
    let coordinates = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const numRandom1 = Math.floor(Math.random() * 3);
    const numRandom2 = Math.floor(Math.random() * 3);
    const numRandom3 = Math.floor(Math.random() * this.aiSuccessfulHits.length);
    const oneOrTen = numRandom1 > 1 ? 10 : 1;
    /* Having AI try adjacent coordinates */

    if (this.aiSuccessfulHits.length >= 1) {
      if (numRandom2 > 1) {
        coordinates = parseInt(this.aiSuccessfulHits[numRandom3]) + oneOrTen + '';
      } else {
        coordinates = parseInt(this.aiSuccessfulHits[numRandom3]) - oneOrTen + '';
      }
    }
    /* Checking if AI makes a turn outside of the grid */


    if (parseInt(coordinates) < 0) {
      coordinates = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    } // Add 0 to coordinates when there is one-digit number


    if (coordinates.length < 2) {
      coordinates = 0 + coordinates;
    }

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('make_turn_ai', coordinates);
  }

}

/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*\
  !*** ./src/components/Ship.js ***!
  \********************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ship", function() { return Ship; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);

class Ship {
  constructor(length, x, y, direction = 'vertical', shipId = '') {
    this.length = length;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.body = [];
    this.isSunk = false;
    this.shipId = shipId;
  }

  hit(coordinates) {
    this.body.forEach((position, i, arr) => {
      if (position === coordinates) {
        arr[i] = 'x';
      }
    });
    this.hasBeenSunk();
  }

  hasBeenSunk() {
    if (this.body.every(position => position === 'x')) {
      this.isSunk = true;
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publishSync('ship_is_sunk'); // SYNC!
    } else {
      this.isSunk = false;
    }
  }

}

/***/ }),

/***/ "./src/components/View.js":
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ViewMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewMenu */ "./src/components/ViewMenu.js");
/* harmony import */ var _ViewShips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewShips */ "./src/components/ViewShips.js");
/* harmony import */ var _ViewGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewGrid */ "./src/components/ViewGrid.js");




class View {
  static init(player1, player2) {
    _ViewMenu__WEBPACK_IMPORTED_MODULE_1__["Menu"].init(player1, player2);
    _ViewShips__WEBPACK_IMPORTED_MODULE_2__["ShipsDOM"].init(player1, player2);
    _ViewGrid__WEBPACK_IMPORTED_MODULE_3__["Grid"].init();
    /* Resetting input fields */

    _ViewShips__WEBPACK_IMPORTED_MODULE_2__["ShipsDOM"].resetInputFieldsPosition();
  }

  static resetShipPlacement(player) {
    const inputFields = document.querySelectorAll('.input-position');
    const gridPlayer1 = document.getElementById(`grid-${player.gameboard.player}`);
    inputFields.forEach(field => {
      field.value = '';
    });

    for (const child of gridPlayer1.children) {
      if (child.classList.contains('cover')) continue;
      child.removeAttribute('id');
      child.classList.remove('placed');
      child.classList.remove('created');
      child.classList.remove('horizontal');
      child.classList.remove('vertical'); // Delete it

      child.style.cssText = '';
    }

    player.gameboard.aliveShips = [];
  }

  static getShipFromDOM(player, direction) {
    const ship = [];
    let shipId = '';
    const gridPlayer1 = document.getElementById('grid-player1');

    for (const child of gridPlayer1.children) {
      if (child.classList.contains('placed') && !child.classList.contains('created')) {
        shipId = child.id;
        child.classList.add('created');
        ship.push(child.textContent);
      }
    }

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('got_ship_from_DOM', {
      coordinates: ship[0],
      length: ship.length,
      shipId,
      player,
      direction
    });
  }

  static placeShips(player) {
    const shipsPlayer = player.gameboard.aliveShips;
    const gridPlayer = document.getElementById(`grid-${player.gameboard.player}`);
    shipsPlayer.forEach(ship => {
      ship.body.forEach(position => {
        for (let item = 0; item < 110; item++) {
          gridPlayer.childNodes[item].style.outline = 'none';

          if (position === gridPlayer.childNodes[item].textContent) {
            if (player.gameboard.player === 'player1') {
              gridPlayer.childNodes[item].style.backgroundColor = '#555b6e';
            } else {
              gridPlayer.childNodes[item].style.backgroundColor = '#89b0ae';
              gridPlayer.childNodes[item].style.border = 'none';
              gridPlayer.childNodes[item].style.borderRadius = '0';
            }
          }
        }
      });
    });
  }

  static resetGameDOM(player1, player2) {
    const gridPlayer2 = document.getElementById('grid-player2');
    gridPlayer2.removeEventListener('click', _ViewGrid__WEBPACK_IMPORTED_MODULE_3__["Grid"].enableClickingGridOpponent);
    this.displayElementsDOM('before-start');
    this.resetShipPlacement(player1);
    this.resetShipPlacement(player2);
  }

  static displayElementsDOM(stage) {
    const blockButtons = document.getElementById('block-buttons');
    const blockShips = document.getElementById('block-ships');
    const buttonStart = document.getElementById('btn-start-game');
    const containerScore = document.getElementById('container-score');
    const gridPlayer2 = document.getElementById('grid-player2');
    const namePlayer2 = document.getElementById('block-name2');
    const buttonAbortGame = document.getElementById('btn-abort-game');
    const buttonPlayAgain = document.getElementById('btn-play-again');
    const messageEndgame = document.getElementById('message-endgame');
    const coverPlayer1 = document.getElementById('cover-player1');
    const coverPlayer2 = document.getElementById('cover-player2');

    if (stage === 'before-start') {
      // Hiding
      messageEndgame.style.display = 'none';
      coverPlayer1.style.display = 'none';
      gridPlayer2.style.display = 'none';
      namePlayer2.style.display = 'none';
      buttonPlayAgain.style.display = 'none';
      containerScore.style.display = 'none'; // Showing

      blockButtons.style.display = '';
      blockShips.style.display = '';
      buttonStart.style.display = '';
    } else if (stage === 'start') {
      // Hiding
      blockButtons.style.display = 'none';
      blockShips.style.display = 'none';
      buttonStart.style.display = 'none';
      coverPlayer2.style.display = 'none'; // Showing

      containerScore.style.display = '';
      gridPlayer2.style.display = '';
      namePlayer2.style.display = '';
      buttonAbortGame.style.display = '';
      coverPlayer1.style.display = '';
    } else if (stage === 'over') {
      // Hiding
      buttonAbortGame.style.display = 'none'; // Showing

      messageEndgame.style.display = '';
      buttonPlayAgain.style.display = '';
      coverPlayer2.style.display = '';
    }
  }

}

/***/ }),

/***/ "./src/components/ViewGrid.js":
/*!************************************!*\
  !*** ./src/components/ViewGrid.js ***!
  \************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/helperFunctions */ "./src/components/helpers/helperFunctions.js");



class Grid {
  static init() {
    const blockGridPlayer1 = document.getElementById('block-grid1');
    const blockGridPlayer2 = document.getElementById('block-grid2');
    /* Players' names */

    const namePlayer1 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('p', 'name', 'block-name1', blockGridPlayer1);
    namePlayer1.textContent = 'Player';
    const namePlayer2 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('p', 'name', 'block-name2', blockGridPlayer2);
    namePlayer2.textContent = 'Computer';
    /* Grid */

    const gridPlayer1 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'grid', 'grid-player1', blockGridPlayer1);
    const gridPlayer2 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'grid', 'grid-player2', blockGridPlayer2); // Hiding AI grid and the name before starting the game

    gridPlayer2.style.display = 'none';
    namePlayer2.style.display = 'none';
    /* Grid items of the first player */

    for (let item = 0; item < 100; item++) {
      /* Adding a hidden element to check for
      incorrect horizontal positioning */
      if (item !== 0 && item % 10 === 0) {
        Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'hidden-item', null, gridPlayer1);
      }

      const gridItem = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'grid-item', null, gridPlayer1); // Adding hidden elements to the end of the grid to check against

      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'hidden-item', null, gridPlayer1);
        }
      }
      /* Adjusting numbers in divs and casting numbers to strings */


      if (item >= 10) {
        gridItem.textContent = item.toString().split('').reverse().join('');
      } else {
        gridItem.textContent = '' + item + 0;
      }
    }
    /* Grid items of the second player */


    for (let item = 0; item < 100; item++) {
      /* Adding a hidden element to check for
      incorrect horizontal positioning */
      if (item !== 0 && item % 10 === 0) {
        Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'hidden-item', null, gridPlayer2);
      }

      const gridItem = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'grid-item', null, gridPlayer2); // Adding hidden elements to the end of the grid to check against

      if (item >= 99) {
        for (let i = 0; i < 10; i++) {
          Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'hidden-item', null, gridPlayer1);
        }
      }
      /* Adjusting numbers in divs and casting numbers to strings */


      if (item >= 10) {
        gridItem.textContent = item.toString().split('').reverse().join('');
      } else {
        gridItem.textContent = '' + item + 0;
      }
    }
    /* Event listeners */


    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('clicked_btn_start_game', () => {
      gridPlayer2.addEventListener('click', this.enableClickingGridOpponent);
    }); // Hiding the error message when starting the game

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('clicked_btn_start_game', () => {
      const errorStart = document.getElementById('error-start');
      errorStart.classList.add('hidden');
    });
    /* Update grids after a player has made their turn */

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('attack_is_executed', (msg, data) => {
      this.updateGridPlayer(data.coordinates, data.missedHits, data.player);
    });
    /* Div that doesn't let a player make a turn before
    the other player do so */

    const coverPlayer1 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'cover', 'cover-player1', gridPlayer1);
    const coverPlayer2 = Object(_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', 'cover', 'cover-player2', gridPlayer2);
    coverPlayer1.style.display = 'none';
    coverPlayer2.style.display = 'none';
    gridPlayer1.append(coverPlayer1);
    gridPlayer2.append(coverPlayer2);
  }

  static updateGridPlayer(coordinates, missedHits, player) {
    const gridPlayer = document.getElementById(`grid-${player}`);
    const isMissed = missedHits.some(hit => coordinates === hit);

    for (let item = 0; item < 110; item++) {
      if (gridPlayer.childNodes[item].textContent === coordinates) {
        if (isMissed) {
          gridPlayer.childNodes[item].style.backgroundColor = '#DAE7E6';
        } else {
          gridPlayer.childNodes[item].style.backgroundColor = '#F5F749';
        }
      }
    }
  }

  static enableClickingGridOpponent(e) {
    if (e.target.textContent) {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('clicked_player2_grid', e.target.textContent);
    }
  }

  static changeShipPositionOnGrid(shipInput, player, shipClasses) {
    const gridPlayer1 = document.getElementById('grid-player1');
    const shipLength = shipInput.parentElement.parentElement.children.length;
    const shipId = shipInput.parentElement.parentElement.id;

    for (const item of gridPlayer1.children) {
      /* Checking if there are elements with the input id.
        Deleting them if it's the case */
      if (shipId === item.id) {
        this.styleItemsDynamically(item, shipLength, ['created', 'placed'], shipId, 'remove', shipClasses[0]);
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('ship_deleted_from_DOM', shipId);
      }
    }

    if (shipInput.value !== '') {
      /* Placing ships on the grid */
      for (const item of gridPlayer1.children) {
        if (shipInput.value === item.textContent) {
          this.styleItemsDynamically(item, shipLength, ['placed'], shipId, 'add', shipClasses[0]);
          _View__WEBPACK_IMPORTED_MODULE_1__["View"].getShipFromDOM(player, shipClasses[0]);
        }
      }
    }
  }

  static styleItemsDynamically(element, amount, classesArray, itemId, addOrRemove, direction) {
    if (!element) return;

    if (addOrRemove === 'add') {
      classesArray.forEach(className => {
        element.classList.add(className);
        element.classList.add(direction);
      });
      element.id = itemId;
    } else if (addOrRemove === 'remove') {
      for (const className of element.classList) {
        if (className === 'horizontal' || className === 'vertical') {
          direction = className;
        }
      }

      classesArray.forEach(className => {
        element.classList.remove(className);
        element.classList.remove('horizontal');
        element.classList.remove('vertical');
      });
      element.removeAttribute('id', itemId);
    }

    if (amount === 1) return;

    if (direction === 'horizontal') {
      return this.styleItemsDynamically(element.nextElementSibling, amount - 1, classesArray, itemId, addOrRemove, direction);
    } else if (direction === 'vertical') {
      let elementBelow;
      const elementCoordinatesBelow = element.textContent[0] + (parseInt(element.textContent[1]) + 1);
      /* Finding the element with the coordinates */

      for (const child of element.parentElement.children) {
        if (child.textContent === elementCoordinatesBelow + '') {
          elementBelow = child;
        }
      }

      return this.styleItemsDynamically(elementBelow, amount - 1, classesArray, itemId, addOrRemove, direction);
    }
  }

  static placeShipsOnGridRandomly(player) {
    const gridPlayer = document.getElementById(`grid-${player.gameboard.player}`);
    const oldCoordinates = [];

    for (let i = 10; i >= 1; i--) {
      let coordinates = 0;
      let length = 0;

      if (i <= 4) {
        length = 1;
      } else if (i <= 7) {
        length = 2;
      } else if (i <= 9) {
        length = 3;
      } else if (i === 10) {
        length = 4;
      }
      /* Deciding whether the ship will be placed horizontally or vertically */


      const numRandom = Math.floor(Math.random() * 3);
      const verticalOrHorizontal = numRandom > 1 ? 'horizontal' : 'vertical';
      coordinates = this.getRandomNumber(length, oldCoordinates);
      /* Adding new coordinates into an array of used coordinates */

      for (let increment = 0; increment < length; increment++) {
        if (verticalOrHorizontal === 'horizontal') {
          oldCoordinates.push(coordinates + increment * 10);
        } else if (verticalOrHorizontal === 'vertical') {
          oldCoordinates.push(coordinates + increment);
        } else {
          throw new Error('The direction of the ship is undefined');
        }
      }
      /* The counting numbers of the ships placed randomly differs from those
      placed manually. It might be a source of bugs in the future */


      const shipId = `ship${length}-${i}`;
      /* Casting to a string to search for in the DOM */

      if (coordinates < 10) {
        coordinates = 0 + (coordinates + '');
      } else {
        coordinates += '';
      }
      /* Positioning ships on the grid  */


      for (const child of gridPlayer.children) {
        if (child.textContent === coordinates) {
          this.styleItemsDynamically(child, length, ['placed'], shipId, 'add', verticalOrHorizontal);
        }
      }
      /* Adding the ships on the grid into aliveShips array */


      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('got_ship_from_DOM', {
        coordinates,
        length,
        shipId,
        player,
        direction: verticalOrHorizontal
      });
    }
  }

  static getRandomNumber(length, oldCoordinates, iteration = 0) {
    /* Stopping the function after 99th iteration If there is an error */
    if (iteration > 100) {
      throw new Error('Too much recursion');
    }

    iteration++;
    let numberRandom = Math.floor(Math.random() * 100);
    /* Checking if there is the random number in the array of used coordinates
    and also checking for future values */

    let isOccupied;

    for (let i = 1; i <= length; i++) {
      if (oldCoordinates.includes(numberRandom + (i * 10 - 10)) || oldCoordinates.includes(numberRandom + (i - 1))) {
        isOccupied = true;
        numberRandom = this.getRandomNumber(length, oldCoordinates, iteration);
        break;
      } else {
        isOccupied = false;
      }
    }
    /* Checking if the value can NOT be placed onto the grid */


    if (parseInt((numberRandom + '')[1]) + length - 1 >= 10 || // vertically
    numberRandom < 10 && numberRandom + length - 1 >= 10 || // vertically
    numberRandom + (length * 10 - 10) >= 100 && length !== 1) {
      // horizontally
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration);
      return numberRandom;
    } else if (isOccupied === true) {
      numberRandom = this.getRandomNumber(length, oldCoordinates, iteration);
      return numberRandom;
    } else {
      return numberRandom;
    }
  }

}

/***/ }),

/***/ "./src/components/ViewMenu.js":
/*!************************************!*\
  !*** ./src/components/ViewMenu.js ***!
  \************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
/* harmony import */ var _ViewGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewGrid */ "./src/components/ViewGrid.js");
/* harmony import */ var _ViewShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewShips */ "./src/components/ViewShips.js");
/* harmony import */ var _helpers_Validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/Validation */ "./src/components/helpers/Validation.js");





class Menu {
  static init(player1, player2) {
    /* Placement buttons */
    const buttonRandom = document.getElementById('button-random');
    buttonRandom.addEventListener('click', () => {
      _View__WEBPACK_IMPORTED_MODULE_1__["View"].resetShipPlacement(player1);
      _ViewGrid__WEBPACK_IMPORTED_MODULE_2__["Grid"].placeShipsOnGridRandomly(player1);
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('clicked_btn_start_game');
    });
    const buttonResetPlacement = document.getElementById('button-reset-placement');
    buttonResetPlacement.addEventListener('click', () => {
      _View__WEBPACK_IMPORTED_MODULE_1__["View"].resetShipPlacement(player1);
    });
    const buttonPlaceHorizontally = document.getElementById('button-horizontal-placing');
    buttonPlaceHorizontally.addEventListener('click', () => {
      if (buttonPlaceHorizontally.textContent === 'Horizontal') {
        buttonPlaceHorizontally.textContent = 'Vertical';
      } else {
        buttonPlaceHorizontally.textContent = 'Horizontal';
      }

      _ViewShips__WEBPACK_IMPORTED_MODULE_3__["ShipsDOM"].changeDisplayShipsInDOM();
    });
    /* A button that starts the game */

    const buttonStartGame = document.getElementById('btn-start-game');
    buttonStartGame.addEventListener('click', () => {
      if (Object(_helpers_Validation__WEBPACK_IMPORTED_MODULE_4__["Validation"])().checkShipsNotPlacedOnStartGame() === true && Object(_helpers_Validation__WEBPACK_IMPORTED_MODULE_4__["Validation"])().checkInvalidPositionOnStartGame() === true) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('clicked_btn_start_game');
      }
    });
    /* A button that aborts the game */

    const buttonAbortGame = document.getElementById('btn-abort-game');
    buttonAbortGame.style.display = 'none';
    buttonAbortGame.addEventListener('click', () => {
      if (buttonAbortGame.classList.contains('confirm')) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('game_aborted');
        buttonAbortGame.textContent = 'Abort Game';
        buttonAbortGame.classList.remove('confirm');
      } else {
        buttonAbortGame.textContent = 'Are you sure?';
        buttonAbortGame.classList.add('confirm');
        setTimeout(() => {
          buttonAbortGame.classList.remove('confirm');
          buttonAbortGame.textContent = 'Abort Game';
        }, 4000);
      }
    });
    /* Play again button */

    const buttonPlayAgain = document.getElementById('btn-play-again');
    buttonPlayAgain.style.display = 'none';
    buttonPlayAgain.addEventListener('click', () => {
      pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.publish('game_reset');
    });
    /* A container for displaying the score of the game */

    const containerScore = document.getElementById('container-score');
    containerScore.style.display = 'none';
    const scoreTextPlayer1 = document.getElementById('score-text-player1');
    const scoreTextPlayer2 = document.getElementById('score-text-player2'); // Populating score container every time a ship gets sunk

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('ships_are_alive', (msg, {
      amount,
      player
    }) => {
      if (player === 'player1') {
        scoreTextPlayer1.textContent = amount + ':';
      } else if (player === 'player2') {
        scoreTextPlayer2.textContent = amount;
      }
    }); // Populating the score element with initial values

    pubsub_js__WEBPACK_IMPORTED_MODULE_0___default.a.subscribe('clicked_btn_start_game', () => {
      scoreTextPlayer1.textContent = 10 + ':';
      scoreTextPlayer2.textContent = 10;
    });
    /* Endgame message */

    const messageEndgame = document.getElementById('message-endgame');
    messageEndgame.style.display = 'none';
  }

}

/***/ }),

/***/ "./src/components/ViewShips.js":
/*!*************************************!*\
  !*** ./src/components/ViewShips.js ***!
  \*************************************/
/*! exports provided: ShipsDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsDOM", function() { return ShipsDOM; });
/* harmony import */ var _helpers_Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Validation */ "./src/components/helpers/Validation.js");
/* harmony import */ var _ViewGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewGrid */ "./src/components/ViewGrid.js");


class ShipsDOM {
  static init(player1, player2) {
    /* Ships */
    const shipsInput = document.querySelectorAll('.input-position');
    shipsInput.forEach(shipInput => {
      shipInput.addEventListener('input', () => {
        const shipLength = shipInput.parentElement.parentElement.id.match(/[0-9]/)[0];
        const elementClasses = document.getElementById('block-ships').classList;

        if (!Object(_helpers_Validation__WEBPACK_IMPORTED_MODULE_0__["Validation"])().isPlacedIncorrectly(shipInput, shipLength, elementClasses)) {
          _ViewGrid__WEBPACK_IMPORTED_MODULE_1__["Grid"].changeShipPositionOnGrid(shipInput, player1, elementClasses);
          shipInput.classList.remove('input-invalid');
        } else {
          shipInput.classList.add('input-invalid');
        }
      });
    });
  }

  static changeDisplayShipsInDOM() {
    const blockShips = document.getElementById('block-ships');
    const shipElements = document.querySelectorAll('.ship');

    if (blockShips.style.flexDirection === 'row') {
      blockShips.style.flexDirection = 'column';
      blockShips.classList.remove('vertical');
      blockShips.classList.add('horizontal');
      shipElements.forEach(element => {
        element.style.flexDirection = 'row';
      });
    } else {
      blockShips.style.flexDirection = 'row';
      blockShips.classList.remove('horizontal');
      blockShips.classList.add('vertical');
      shipElements.forEach(element => {
        element.style.flexDirection = 'column';
      });
    }
  }

  static resetInputFieldsPosition() {
    const inputFields = document.querySelectorAll('.input-position');

    for (const field of inputFields) {
      field.value = '';
    }
  }

}

/***/ }),

/***/ "./src/components/helpers/Validation.js":
/*!**********************************************!*\
  !*** ./src/components/helpers/Validation.js ***!
  \**********************************************/
/*! exports provided: Validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return Validation; });
function Validation() {
  function isPlacedIncorrectly(shipInput, shipLength, elementClasses) {
    const direction = elementClasses[0];
    const gridPlayer1 = document.getElementById('grid-player1');
    const futureCoordinates = getFutureCoordinates(shipInput.value, shipLength, direction);
    /* Checking if a part of the ship is outside of the grid */

    const isIncorrectPosition = futureCoordinates.some(coordinate => {
      return coordinate.length > 2;
    });

    if (isIncorrectPosition && shipInput.value.length > 1) {
      return true;
    }
    /* Checking if the ship is placed onto another ship */


    return futureCoordinates.some(coordinate => {
      for (const child of gridPlayer1.children) {
        if (coordinate === child.textContent && child.classList.contains('placed')) {
          return true;
        }
      }
    });
  }

  function getFutureCoordinates(currentCoordinates, shipLength, direction) {
    const futureCoordinates = [];
    let nextCoordinates;

    for (let i = 0; i < shipLength; i++) {
      if (direction === 'horizontal') {
        nextCoordinates = parseInt(currentCoordinates[0]) + i + currentCoordinates[1];
      } else if (direction === 'vertical') {
        nextCoordinates = currentCoordinates[0] + (parseInt(currentCoordinates[1]) + i);
      } else {
        throw new Error('The direction of future coordinates is not defined');
      }

      futureCoordinates.push(nextCoordinates);
    }

    return futureCoordinates;
  }

  function checkShipsNotPlacedOnStartGame() {
    const shipInputFields = document.querySelectorAll('.input-position');
    const containerError = document.querySelector('#error-start');

    for (const field of shipInputFields) {
      if (field.value.length < 2) {
        containerError.textContent = 'Please place all ships onto the grid.';
        containerError.classList.remove('hidden');
        return false;
      }
    }

    containerError.classList.add('hidden');
    return true;
  }

  function checkInvalidPositionOnStartGame() {
    const containerError = document.querySelector('#error-start');
    const inputsInvalid = document.querySelectorAll('.input-invalid');

    if (inputsInvalid.length < 1) {
      containerError.classList.add('hidden');
      return true;
    } else {
      containerError.textContent = 'You can\'t start the game when there are ships positioned incorrectly';
      containerError.classList.remove('hidden');
      return false;
    }
  }

  return {
    isPlacedIncorrectly,
    checkShipsNotPlacedOnStartGame,
    checkInvalidPositionOnStartGame
  };
}

/***/ }),

/***/ "./src/components/helpers/helperFunctions.js":
/*!***************************************************!*\
  !*** ./src/components/helpers/helperFunctions.js ***!
  \***************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function createElement(tag, className, elementId, appendTo) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (elementId) element.id = elementId;
  if (appendTo) appendTo.append(element);
  return element;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Player */ "./src/components/Player.js");
/* harmony import */ var _components_Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Gameboard */ "./src/components/Gameboard.js");
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/View */ "./src/components/View.js");
/* harmony import */ var _components_Ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Ship */ "./src/components/Ship.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ViewGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ViewGrid */ "./src/components/ViewGrid.js");








class Game {
  static init() {
    const player1 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__["Player"](new _components_Gameboard__WEBPACK_IMPORTED_MODULE_2__["Gameboard"]('player1'), true, false);
    const player2 = new _components_Player__WEBPACK_IMPORTED_MODULE_1__["Player"](new _components_Gameboard__WEBPACK_IMPORTED_MODULE_2__["Gameboard"]('player2'), true, true); // Ai player

    _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].init(player1, player2);
    /* When a player places a ship onto the grid */

    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('got_ship_from_DOM', (msg, data) => {
      const x = parseInt(data.coordinates[0]);
      const y = parseInt(data.coordinates[1]);
      data.player.gameboard.createShipOnGameboard(new _components_Ship__WEBPACK_IMPORTED_MODULE_4__["Ship"](data.length, x, y, data.direction, data.shipId));
    });
    /* Placing the function below after 'got_ship_from_DOM' event since it relies on this event */

    _components_ViewGrid__WEBPACK_IMPORTED_MODULE_6__["Grid"].placeShipsOnGridRandomly(player2);
    /* When the first player removes a ship from the grid */

    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('ship_deleted_from_DOM', (msg, shipId) => {
      player1.gameboard.deleteShipFromGameboard(shipId);
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('clicked_btn_start_game', () => {
      this.initGame(player1, player2);
      _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].displayElementsDOM('start');
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('clicked_player2_grid', (msg, coordinates) => {
      player2.receiveDamage(coordinates, 'player2');
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('clicked_player1_grid', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1');
    });
    /* This is triggered when the second player is AI */

    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('make_turn_ai', (msg, coordinates) => {
      player1.receiveDamage(coordinates, 'player1');
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('no_alive_ships', (msg, player) => {
      this.gameOver(player);
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('game_aborted', () => {
      this.gameOver();
    });
    pubsub_js__WEBPACK_IMPORTED_MODULE_5___default.a.subscribe('game_reset', () => {
      this.resetGameData(player1);
      this.resetGameData(player2);
      _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].resetGameDOM(player1, player2);
      _components_ViewGrid__WEBPACK_IMPORTED_MODULE_6__["Grid"].placeShipsOnGridRandomly(player2);
    });
  }

  static initGame(player1, player2) {
    _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].placeShips(player1);
    _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].placeShips(player2);
  }

  static gameOver(player) {
    const messageEndgameTitle = document.getElementById('message-endgame-title');
    const messageEndgameBody = document.getElementById('message-endgame-body');

    if (player === 'player1') {
      messageEndgameTitle.textContent = 'I\'m afraid';
      messageEndgameBody.textContent = 'You\'ve lost.';
    } else if (player === 'player2') {
      messageEndgameTitle.textContent = 'Congratulations!';
      messageEndgameBody.textContent = 'You\'ve won!';
    } else {
      messageEndgameTitle.textContent = 'Aborted';
      messageEndgameBody.textContent = 'The game has been aborted.';
    }

    _components_View__WEBPACK_IMPORTED_MODULE_3__["View"].displayElementsDOM('over');
  }

  static resetGameData(player) {
    player.gameboard.aliveShips = [];
    player.gameboard.missedHitsCoordinates = [];
    player.previousCoordinates = [];
    player.isSunk = false;
  }

}

Game.init();

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3R3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WaWV3U2hpcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy9WYWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwicm9vdCIsImZhY3RvcnkiLCJQdWJTdWIiLCJkZWZpbmUiLCJhbWQiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJtZXNzYWdlcyIsImxhc3RVaWQiLCJBTExfU1VCU0NSSUJJTkdfTVNHIiwiaGFzS2V5cyIsIm9iaiIsImtleSIsImhhc093blByb3BlcnR5IiwidGhyb3dFeGNlcHRpb24iLCJleCIsInJlVGhyb3dFeGNlcHRpb24iLCJjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyIsInN1YnNjcmliZXIiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMiLCJkZWxpdmVyTWVzc2FnZSIsIm9yaWdpbmFsTWVzc2FnZSIsIm1hdGNoZWRNZXNzYWdlIiwiaW1tZWRpYXRlRXhjZXB0aW9ucyIsInN1YnNjcmliZXJzIiwiY2FsbFN1YnNjcmliZXIiLCJzIiwiY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiIsImRlbGl2ZXJOYW1lc3BhY2VkIiwidG9waWMiLCJTdHJpbmciLCJwb3NpdGlvbiIsImxhc3RJbmRleE9mIiwic3Vic3RyIiwiaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IiLCJmb3VuZCIsIkJvb2xlYW4iLCJtZXNzYWdlSGFzU3Vic2NyaWJlcnMiLCJwdWJsaXNoIiwic3luYyIsImRlbGl2ZXIiLCJoYXNTdWJzY3JpYmVycyIsInB1Ymxpc2hTeW5jIiwic3Vic2NyaWJlIiwiZnVuYyIsInRva2VuIiwic3Vic2NyaWJlQWxsIiwic3Vic2NyaWJlT25jZSIsInVuc3Vic2NyaWJlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjbGVhckFsbFN1YnNjcmlwdGlvbnMiLCJjbGVhclN1YnNjcmlwdGlvbnMiLCJtIiwiaW5kZXhPZiIsImNvdW50U3Vic2NyaXB0aW9ucyIsImNvdW50IiwiZ2V0U3Vic2NyaXB0aW9ucyIsInZhbHVlIiwiZGVzY2VuZGFudFRvcGljRXhpc3RzIiwiaXNUb3BpYyIsImlzVG9rZW4iLCJpc0Z1bmN0aW9uIiwicmVzdWx0IiwidCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJsIiwiR2FtZWJvYXJkIiwiY29uc3RydWN0b3IiLCJwbGF5ZXIiLCJhbGl2ZVNoaXBzIiwibWlzc2VkSGl0c0Nvb3JkaW5hdGVzIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzaGlwIiwiaXNTdW5rIiwic3BsaWNlIiwiYXJlU2hpcHNBbGl2ZSIsImNyZWF0ZVNoaXAiLCJkaXJlY3Rpb24iLCJib2R5IiwieCIsInkiLCJjcmVhdGVTaGlwT25HYW1lYm9hcmQiLCJkZWxldGVTaGlwRnJvbUdhbWVib2FyZCIsInNoaXBJZCIsImZpbHRlciIsInJlY2VpdmVBdHRhY2siLCJjb29yZGluYXRlcyIsImlzSGl0Iiwic29tZSIsImZvckVhY2giLCJoaXQiLCJtaXNzZWRIaXRzIiwiYW1vdW50IiwiUGxheWVyIiwiZ2FtZWJvYXJkIiwidmVyc3VzQWkiLCJpc0FpIiwicHJldmlvdXNDb29yZGluYXRlcyIsImFpU3VjY2Vzc2Z1bEhpdHMiLCJyZWN1cnNpb25Db3VudGVyIiwibXNnIiwicmVjZWl2ZURhbWFnZSIsIndhc0hpdCIsInByZXZDb29yZGluYXRlcyIsIm1ha2VUdXJuQWkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJudW1SYW5kb20xIiwibnVtUmFuZG9tMiIsIm51bVJhbmRvbTMiLCJvbmVPclRlbiIsInBhcnNlSW50IiwiU2hpcCIsImFyciIsImhhc0JlZW5TdW5rIiwiZXZlcnkiLCJWaWV3IiwiaW5pdCIsInBsYXllcjEiLCJwbGF5ZXIyIiwiTWVudSIsIlNoaXBzRE9NIiwiR3JpZCIsInJlc2V0SW5wdXRGaWVsZHNQb3NpdGlvbiIsInJlc2V0U2hpcFBsYWNlbWVudCIsImlucHV0RmllbGRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JpZFBsYXllcjEiLCJnZXRFbGVtZW50QnlJZCIsImZpZWxkIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZUF0dHJpYnV0ZSIsInJlbW92ZSIsInN0eWxlIiwiY3NzVGV4dCIsImdldFNoaXBGcm9tRE9NIiwiYWRkIiwidGV4dENvbnRlbnQiLCJwbGFjZVNoaXBzIiwic2hpcHNQbGF5ZXIiLCJncmlkUGxheWVyIiwiY2hpbGROb2RlcyIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJyZXNldEdhbWVET00iLCJncmlkUGxheWVyMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbmFibGVDbGlja2luZ0dyaWRPcHBvbmVudCIsImRpc3BsYXlFbGVtZW50c0RPTSIsInN0YWdlIiwiYmxvY2tCdXR0b25zIiwiYmxvY2tTaGlwcyIsImJ1dHRvblN0YXJ0IiwiY29udGFpbmVyU2NvcmUiLCJuYW1lUGxheWVyMiIsImJ1dHRvbkFib3J0R2FtZSIsImJ1dHRvblBsYXlBZ2FpbiIsIm1lc3NhZ2VFbmRnYW1lIiwiY292ZXJQbGF5ZXIxIiwiY292ZXJQbGF5ZXIyIiwiZGlzcGxheSIsImJsb2NrR3JpZFBsYXllcjEiLCJibG9ja0dyaWRQbGF5ZXIyIiwibmFtZVBsYXllcjEiLCJjcmVhdGVFbGVtZW50IiwiZ3JpZEl0ZW0iLCJzcGxpdCIsInJldmVyc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXJyb3JTdGFydCIsInVwZGF0ZUdyaWRQbGF5ZXIiLCJhcHBlbmQiLCJpc01pc3NlZCIsImUiLCJ0YXJnZXQiLCJjaGFuZ2VTaGlwUG9zaXRpb25PbkdyaWQiLCJzaGlwSW5wdXQiLCJzaGlwQ2xhc3NlcyIsInNoaXBMZW5ndGgiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGVJdGVtc0R5bmFtaWNhbGx5IiwiZWxlbWVudCIsImNsYXNzZXNBcnJheSIsIml0ZW1JZCIsImFkZE9yUmVtb3ZlIiwiY2xhc3NOYW1lIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZWxlbWVudEJlbG93IiwiZWxlbWVudENvb3JkaW5hdGVzQmVsb3ciLCJwbGFjZVNoaXBzT25HcmlkUmFuZG9tbHkiLCJvbGRDb29yZGluYXRlcyIsIm51bVJhbmRvbSIsInZlcnRpY2FsT3JIb3Jpem9udGFsIiwiZ2V0UmFuZG9tTnVtYmVyIiwiaW5jcmVtZW50IiwiRXJyb3IiLCJpdGVyYXRpb24iLCJudW1iZXJSYW5kb20iLCJpc09jY3VwaWVkIiwiaW5jbHVkZXMiLCJidXR0b25SYW5kb20iLCJidXR0b25SZXNldFBsYWNlbWVudCIsImJ1dHRvblBsYWNlSG9yaXpvbnRhbGx5IiwiY2hhbmdlRGlzcGxheVNoaXBzSW5ET00iLCJidXR0b25TdGFydEdhbWUiLCJWYWxpZGF0aW9uIiwiY2hlY2tTaGlwc05vdFBsYWNlZE9uU3RhcnRHYW1lIiwiY2hlY2tJbnZhbGlkUG9zaXRpb25PblN0YXJ0R2FtZSIsInNjb3JlVGV4dFBsYXllcjEiLCJzY29yZVRleHRQbGF5ZXIyIiwic2hpcHNJbnB1dCIsIm1hdGNoIiwiZWxlbWVudENsYXNzZXMiLCJpc1BsYWNlZEluY29ycmVjdGx5Iiwic2hpcEVsZW1lbnRzIiwiZmxleERpcmVjdGlvbiIsImZ1dHVyZUNvb3JkaW5hdGVzIiwiZ2V0RnV0dXJlQ29vcmRpbmF0ZXMiLCJpc0luY29ycmVjdFBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImN1cnJlbnRDb29yZGluYXRlcyIsIm5leHRDb29yZGluYXRlcyIsInNoaXBJbnB1dEZpZWxkcyIsImNvbnRhaW5lckVycm9yIiwicXVlcnlTZWxlY3RvciIsImlucHV0c0ludmFsaWQiLCJ0YWciLCJlbGVtZW50SWQiLCJhcHBlbmRUbyIsIkdhbWUiLCJpbml0R2FtZSIsImdhbWVPdmVyIiwicmVzZXRHYW1lRGF0YSIsIm1lc3NhZ2VFbmRnYW1lVGl0bGUiLCJtZXNzYWdlRW5kZ2FtZUJvZHkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFNBQVMsY0FBYyxnQ0FBZ0MsR0FBRyxhQUFhLGlCQUFpQixnQ0FBZ0MsbUJBQW1CLHlCQUF5QixvQkFBb0IsaUJBQWlCLDhCQUE4QixHQUFHLG1DQUFtQyxrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsR0FBRyxzQkFBc0IsdUJBQXVCLGVBQWUsZ0JBQWdCLG1CQUFtQixpQkFBaUIsZ0NBQWdDLDhCQUE4Qix1QkFB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LEdBQWlDLGVBQWpDO0FBQ0QsS0FIRCxNQUdPLElBQUkxRSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUMvQjRLLHlCQUFtQixDQUFDbEcsV0FBcEIsR0FBa0Msa0JBQWxDO0FBQ0FtRyx3QkFBa0IsQ0FBQ25HLFdBQW5CLEdBQWlDLGNBQWpDO0FBQ0QsS0FITSxNQUdBO0FBQ0xrRyx5QkFBbUIsQ0FBQ2xHLFdBQXBCLEdBQWtDLFNBQWxDO0FBQ0FtRyx3QkFBa0IsQ0FBQ25HLFdBQW5CLEdBQWlDLDRCQUFqQztBQUNEOztBQUVEeEIseURBQUksQ0FBQ3FDLGtCQUFMLENBQXdCLE1BQXhCO0FBQ0Q7O0FBRUQsU0FBT29GLGFBQVAsQ0FBc0IzSyxNQUF0QixFQUE4QjtBQUM1QkEsVUFBTSxDQUFDMkIsU0FBUCxDQUFpQjFCLFVBQWpCLEdBQThCLEVBQTlCO0FBQ0FELFVBQU0sQ0FBQzJCLFNBQVAsQ0FBaUJ6QixxQkFBakIsR0FBeUMsRUFBekM7QUFDQUYsVUFBTSxDQUFDOEIsbUJBQVAsR0FBNkIsRUFBN0I7QUFDQTlCLFVBQU0sQ0FBQ00sTUFBUCxHQUFnQixLQUFoQjtBQUNEOztBQXhGUTs7QUEwRlhrSyxJQUFJLENBQUNySCxJQUFMLEc7Ozs7Ozs7Ozs7O0FDbEdBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0XCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzOTQ1O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMTVweCBhdXRvIDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIE1haW4gYmxvY2sgKi9cXG4jYmxvY2stbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI21lc3NhZ2UtcGxhY2luZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02NXB4O1xcbiAgbGVmdDogLTIwcHg7XFxuXFxuICB3aWR0aDogMjgwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOWY5O1xcblxcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFNoaXBzIGJsb2NrICovXFxuI2Jsb2NrLXNoaXBzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWFyZ2luOiA1MHB4IDIwcHggMCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTVCNkU7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBtYXJnaW46IDVweDtcXG59XFxuLnNoaXAtcGFydCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgd2lkdGg6IDM4cHg7XFxuICBoZWlnaHQ6IDM4cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCMEFFO1xcbn1cXG4jY29udGFpbmVyLXNoaXAxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5pbnB1dC1wb3NpdGlvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmlucHV0LWludmFsaWQge1xcbiAgY29sb3I6IHJlZFxcbn1cXG5cXG4vKiBHcmlkIGJsb2NrcyAqL1xcbi5ibG9jay1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubmFtZSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDNweCA1cHg7XFxuXFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG5cXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzcwcHg7XFxuICBtYXJnaW46IDA7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCMEFFO1xcbn1cXG4uZ3JpZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB3aWR0aDogNDJweDtcXG5cXG4gIG91dGxpbmU6IDFweCBzb2xpZDtcXG5cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5oaWRkZW4taXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDM3MHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAuMztcXG59XFxuXFxuLyogQ2VudGVyIGJsb2NrICovXFxuI2Jsb2NrLWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG5cXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjgwcHg7XFxuICBtYXJnaW46IDAgNjBweDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTVCNkU7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEJ1dHRvbnMgYmxvY2sgKi9cXG4jYmxvY2stYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5idG4ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiAycHggMDtcXG5cXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5QjBBRTtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCRUUzREI7XFxufVxcbiNidXR0b24taG9yaXpvbnRhbC1wbGFjaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbiNidXR0b24tcmFuZG9tIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLyogU3RhcnQgR2FtZSBibG9jayAqL1xcbiNibG9jay1zdGFydC1nYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuI2J0bi1zdGFydC1nYW1lIHtcXG4gIGhlaWdodDogMzBweDtcXG5cXG4gIGJvcmRlcjogM3B4IHNvbGlkICNCRUUzREI7XFxufVxcbiNidG4tcGxheS1hZ2FpbiB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQkVFM0RCO1xcbn1cXG4uZXJyb3Ige1xcbiAgbWFyZ2luOiA4cHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGOUY5O1xcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiNjb250YWluZXItc2NvcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXJnaW46IDAgNjBweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5QjBBRTtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4jc2NvcmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jc2NvcmUtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuXFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2J0bi1hYm9ydC1nYW1lIHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDE2NXB4O1xcblxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuI21lc3NhZ2UtZW5kZ2FtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4jbWVzc2FnZS1lbmRnYW1lLXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFxuICBmb250LXNpemU6IDIzcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbmZpcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NFNTM3NDtcXG59XFxuLmNvbmZpcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q3NzA4QjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTOztFQUVULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsY0FBYzs7RUFFZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7O0VBRVosdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7O0VBRVgsWUFBWTtFQUNaLFlBQVk7O0VBRVoseUJBQXlCOztFQUV6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIscUJBQXFCO0VBQ3JCLGFBQWE7O0VBRWIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtF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QUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM5NDU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMjBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogTWFpbiBibG9jayAqL1xcbiNibG9jay1tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jbWVzc2FnZS1wbGFjaW5nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTY1cHg7XFxuICBsZWZ0OiAtMjBweDtcXG5cXG4gIHdpZHRoOiAyODBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjk7XFxuXFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogU2hpcHMgYmxvY2sgKi9cXG4jYmxvY2stc2hpcHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXJnaW46IDUwcHggMjBweCAwIDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NUI2RTtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gIG1hcmdpbjogNXB4O1xcbn1cXG4uc2hpcC1wYXJ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICB3aWR0aDogMzhweDtcXG4gIGhlaWdodDogMzhweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OUIwQUU7XFxufVxcbiNjb250YWluZXItc2hpcDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmlucHV0LXBvc2l0aW9uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uaW5wdXQtaW52YWxpZCB7XFxuICBjb2xvcjogcmVkXFxufVxcblxcbi8qIEdyaWQgYmxvY2tzICovXFxuLmJsb2NrLWdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5uYW1lIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG5cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgd2lkdGg6IDQyMHB4O1xcbiAgaGVpZ2h0OiAzNzBweDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OUIwQUU7XFxufVxcbi5ncmlkLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIHdpZHRoOiA0MnB4O1xcblxcbiAgb3V0bGluZTogMXB4IHNvbGlkO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmhpZGRlbi1pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMzcwcHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IC4zO1xcbn1cXG5cXG4vKiBDZW50ZXIgYmxvY2sgKi9cXG4jYmxvY2stY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcblxcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIG1hcmdpbjogMCA2MHB4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NUI2RTtcXG4gIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogQnV0dG9ucyBibG9jayAqL1xcbiNibG9jay1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmJ0biB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDJweCAwO1xcblxcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCMEFFO1xcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JFRTNEQjtcXG59XFxuI2J1dHRvbi1ob3Jpem9udGFsLXBsYWNpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuI2J1dHRvbi1yYW5kb20ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4vKiBTdGFydCBHYW1lIGJsb2NrICovXFxuI2Jsb2NrLXN0YXJ0LWdhbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG4jYnRuLXN0YXJ0LWdhbWUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcblxcbiAgYm9yZGVyOiAzcHggc29saWQgI0JFRTNEQjtcXG59XFxuI2J0bi1wbGF5LWFnYWluIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNCRUUzREI7XFxufVxcbi5lcnJvciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIHdpZHRoOiAyMDBweDtcXG5cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUY5Rjk7XFxuICBib3JkZXI6IDFweCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI2NvbnRhaW5lci1zY29yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1hcmdpbjogMCA2MHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODlCMEFFO1xcbiAgYm9yZGVyOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbiNzY29yZS10aXRsZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNzY29yZS1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG5cXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jYnRuLWFib3J0LWdhbWUge1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luLXRvcDogMTY1cHg7XFxuXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4jbWVzc2FnZS1lbmRnYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbiNtZXNzYWdlLWVuZGdhbWUtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG5cXG4gIGZvbnQtc2l6ZTogMjNweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29uZmlybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0U1Mzc0O1xcbn1cXG4uY29uZmlybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDc3MDhCO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG4gKiBMaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcblxuICAgIHZhciBkZWZpbmUgPSByb290LmRlZmluZTtcblxuICAgIGZhY3RvcnkoUHViU3ViKTtcblxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG5cbiAgICAgICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGlmIChtb2R1bGUgIT09IHVuZGVmaW5lZCAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gUHViU3ViOyAvLyBOb2RlLmpzIHNwZWNpZmljIGBtb2R1bGUuZXhwb3J0c2BcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLlB1YlN1YiA9IFB1YlN1YjsgLy8gQ29tbW9uSlMgbW9kdWxlIDEuMS4xIHNwZWNcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gUHViU3ViOyAvLyBDb21tb25KU1xuICAgIH1cblxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBtZXNzYWdlcyA9IHt9LFxuICAgICAgICBsYXN0VWlkID0gLTEsXG4gICAgICAgIEFMTF9TVUJTQ1JJQklOR19NU0cgPSAnKic7XG5cbiAgICBmdW5jdGlvbiBoYXNLZXlzKG9iail7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgIGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcbiAgICAgICAgICAgICAgICBjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcbiAgICAgICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgICAgICAvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcbiAgICAgICAgICAgIHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgICAgICB0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIEFMTF9TVUJTQ1JJQklOR19NU0csIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKCBtZXNzYWdlICkge1xuICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgIGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKSB8fCBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvcihBTExfU1VCU0NSSUJJTkdfTVNHKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcbiAgICAgICAgXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiggZnVuYyApe1xuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZShBTExfU1VCU0NSSUJJTkdfTVNHLCBmdW5jKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgaW50IH1cbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBcbiAgICAgICBDb3VudCBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY291bnRTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IEFycmF5IH1cbiAgICAqL1xuICAgIFB1YlN1Yi5jb3VudFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjb3VudFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG4gICAgXG4gICAgLyoqIFxuICAgICAgIEdldHMgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGdldFN1YnNjcmlwdGlvbnNcbiAgICAqL1xuICAgIFB1YlN1Yi5nZXRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGRlc2NlbmRhbnQgb2YgdGhlIHRvcGljIGV4aXN0czpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgUHViU3ViIGZyb20gJ3B1YnN1Yi1qcydcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yIChwbGF5ZXIpIHtcbiAgICB0aGlzLmFsaXZlU2hpcHMgPSBbXVxuICAgIHRoaXMubWlzc2VkSGl0c0Nvb3JkaW5hdGVzID0gW11cbiAgICB0aGlzLnBsYXllciA9IHBsYXllclxuXG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2hpcF9pc19zdW5rJywgKCkgPT4ge1xuICAgICAgLyogUmVtb3ZpbmcgdGhlIHN1bmsgc2hpcCBmcm9tIGFsaXZlU2hpcHMgYXJyYXkgYW5kIGNoZWNraW5nIGZvclxuICAgICAgd2hldGhlciB0aGVyZSBhcmUgYW55IHNoaXBzIG9uIHBsYXllcidzIGdhbWVib2FyZCAqL1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmFsaXZlU2hpcHMuZmluZEluZGV4KHNoaXAgPT4ge1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gc2hpcFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmFsaXZlU2hpcHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB0aGlzLmFyZVNoaXBzQWxpdmUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVTaGlwIChzaGlwKSB7XG4gICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcC5ib2R5LnB1c2goJycgKyBzaGlwLnggKyAoc2hpcC55ICsgaSkpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcC5ib2R5LnB1c2goJycgKyAoc2hpcC54ICsgaSkgKyBzaGlwLnkpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwXG4gIH1cblxuICBjcmVhdGVTaGlwT25HYW1lYm9hcmQgKHNoaXApIHtcbiAgICB0aGlzLmFsaXZlU2hpcHMucHVzaCh0aGlzLmNyZWF0ZVNoaXAoc2hpcCkpXG4gIH1cblxuICBkZWxldGVTaGlwRnJvbUdhbWVib2FyZCAoc2hpcElkKSB7XG4gICAgdGhpcy5hbGl2ZVNoaXBzID0gdGhpcy5hbGl2ZVNoaXBzLmZpbHRlcihzaGlwID0+IHNoaXBJZCAhPT0gc2hpcC5zaGlwSWQpXG4gIH1cblxuICByZWNlaXZlQXR0YWNrIChjb29yZGluYXRlcywgcGxheWVyKSB7XG4gICAgY29uc3QgaXNIaXQgPSB0aGlzLmFsaXZlU2hpcHMuc29tZShzaGlwID0+IHtcbiAgICAgIHJldHVybiBzaGlwLmJvZHkuc29tZShwb3NpdGlvbiA9PiB7XG4gICAgICAgIHJldHVybiBwb3NpdGlvbiA9PT0gY29vcmRpbmF0ZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChpc0hpdCkge1xuICAgICAgdGhpcy5hbGl2ZVNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgIHNoaXAuaGl0KGNvb3JkaW5hdGVzKVxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLnBsYXllciA9PT0gJ3BsYXllcjEnKSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKCdhaV9zdWNjZXNzZnVsX2hpdCcsIGNvb3JkaW5hdGVzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pc3NlZEhpdHNDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgIH1cblxuICAgIFB1YlN1Yi5wdWJsaXNoKCdhdHRhY2tfaXNfZXhlY3V0ZWQnLCB7XG4gICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgICBtaXNzZWRIaXRzOiB0aGlzLm1pc3NlZEhpdHNDb29yZGluYXRlcyxcbiAgICAgIHBsYXllcjogcGxheWVyXG4gICAgfSlcbiAgfVxuXG4gIGFyZVNoaXBzQWxpdmUgKCkge1xuICAgIGlmICh0aGlzLmFsaXZlU2hpcHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdub19hbGl2ZV9zaGlwcycsIHRoaXMucGxheWVyKVxuICAgIH1cblxuICAgIFB1YlN1Yi5wdWJsaXNoKCdzaGlwc19hcmVfYWxpdmUnLCB7XG4gICAgICBhbW91bnQ6IHRoaXMuYWxpdmVTaGlwcy5sZW5ndGgsXG4gICAgICBwbGF5ZXI6IHRoaXMucGxheWVyXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAoZ2FtZWJvYXJkLCB2ZXJzdXNBaSA9IGZhbHNlLCBpc0FpID0gZmFsc2UpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZFxuICAgIHRoaXMucHJldmlvdXNDb29yZGluYXRlcyA9IFtdXG4gICAgdGhpcy52ZXJzdXNBaSA9IHZlcnN1c0FpXG4gICAgdGhpcy5pc0FpID0gaXNBaVxuICAgIHRoaXMuYWlTdWNjZXNzZnVsSGl0cyA9IFtdXG5cbiAgICAvKiBJbiBjYXNlIHRoZXJlIGlzIGFuIHVuZXhwZWN0ZWQgZXJyb3Igd2hlbiBjbGlja2luZyBvbiB0aGUgZ3JpZCAqL1xuICAgIHRoaXMucmVjdXJzaW9uQ291bnRlciA9IDBcblxuICAgIC8qICdzaGlwX2lzX3N1bmsnIGV2ZW50IGZpcmVzIGVhcmxpZXIgdGhhdCAnYWlfc3VjY2Vzc2Z1bF9oaXQnLFxuICAgICAgd2hpY2ggaXMgbm90IGRlc2lyZWQgKi9cbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlXG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdhaV9zdWNjZXNzZnVsX2hpdCcsIChtc2csIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICB0aGlzLmFpU3VjY2Vzc2Z1bEhpdHMucHVzaChjb29yZGluYXRlcylcblxuICAgICAgaWYgKHRoaXMuaXNTdW5rKSB7XG4gICAgICAgIHRoaXMuYWlTdWNjZXNzZnVsSGl0cyA9IFtdXG4gICAgICB9XG4gICAgICB0aGlzLmlzU3VuayA9IGZhbHNlXG4gICAgfSlcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NoaXBfaXNfc3VuaycsICgpID0+IHtcbiAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZWNlaXZlRGFtYWdlIChjb29yZGluYXRlcywgcGxheWVyKSB7XG4gICAgLyogQ2hlY2tpbmcgaWYgdGhlIHJlY2VpdmVkIGNvb3JkaW5hdGVzIGhhdmUgYmVlbiBwYXNzZWQgaW4gYmVmb3JlICovXG4gICAgY29uc3Qgd2FzSGl0ID0gdGhpcy5wcmV2aW91c0Nvb3JkaW5hdGVzLnNvbWUocHJldkNvb3JkaW5hdGVzID0+XG4gICAgICBwcmV2Q29vcmRpbmF0ZXMgPT09IGNvb3JkaW5hdGVzKVxuXG4gICAgLyogSWYgdGhlIHBsYXllciBjbGlja3Mgb24gdGhlIHNhbWUgc3BvdCBtdWx0aXBsZSB0aW1lcyAqL1xuICAgIGlmICh3YXNIaXQgJiYgdGhpcy5pc0FpKSB7XG4gICAgICByZXR1cm5cbiAgICAvKiBJZiBBSSBjbGlja3Mgb24gdGhlIHNhbWUgc3BvdCBtdWx0aXBsZSB0aW1lcyAqL1xuICAgIH0gZWxzZSBpZiAod2FzSGl0ICYmICF0aGlzLmlzQWkpIHtcbiAgICAgIHRoaXMucmVjdXJzaW9uQ291bnRlcisrXG4gICAgICB0aGlzLm1ha2VUdXJuQWkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBwbGF5ZXIpXG4gICAgICB0aGlzLnByZXZpb3VzQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlcylcbiAgICAgIHRoaXMucmVjdXJzaW9uQ291bnRlciA9IDBcblxuICAgICAgLyogQUkgcGxheWVyIG1ha2VzIGEgdHVybiAqL1xuICAgICAgaWYgKHRoaXMuaXNBaSAmJiB0aGlzLnZlcnN1c0FpKSB7XG4gICAgICAgIHRoaXMubWFrZVR1cm5BaSgpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3Vyc2lvbkNvdW50ZXIgPiA1MDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBtYWtlVHVybkFpICgpIHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPVxuICAgICAgICAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG4gICAgY29uc3QgbnVtUmFuZG9tMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gICAgY29uc3QgbnVtUmFuZG9tMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpXG4gICAgY29uc3QgbnVtUmFuZG9tMyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYWlTdWNjZXNzZnVsSGl0cy5sZW5ndGgpXG4gICAgY29uc3Qgb25lT3JUZW4gPSBudW1SYW5kb20xID4gMSA/IDEwIDogMVxuXG4gICAgLyogSGF2aW5nIEFJIHRyeSBhZGphY2VudCBjb29yZGluYXRlcyAqL1xuICAgIGlmICh0aGlzLmFpU3VjY2Vzc2Z1bEhpdHMubGVuZ3RoID49IDEpIHtcbiAgICAgIGlmIChudW1SYW5kb20yID4gMSkge1xuICAgICAgICBjb29yZGluYXRlcyA9IHBhcnNlSW50KHRoaXMuYWlTdWNjZXNzZnVsSGl0c1tudW1SYW5kb20zXSkgKyBvbmVPclRlbiArICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29yZGluYXRlcyA9IHBhcnNlSW50KHRoaXMuYWlTdWNjZXNzZnVsSGl0c1tudW1SYW5kb20zXSkgLSBvbmVPclRlbiArICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogQ2hlY2tpbmcgaWYgQUkgbWFrZXMgYSB0dXJuIG91dHNpZGUgb2YgdGhlIGdyaWQgKi9cbiAgICBpZiAocGFyc2VJbnQoY29vcmRpbmF0ZXMpIDwgMCkge1xuICAgICAgY29vcmRpbmF0ZXMgPVxuICAgICAgICAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgIH1cblxuICAgIC8vIEFkZCAwIHRvIGNvb3JkaW5hdGVzIHdoZW4gdGhlcmUgaXMgb25lLWRpZ2l0IG51bWJlclxuICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPCAyKSB7XG4gICAgICBjb29yZGluYXRlcyA9IDAgKyBjb29yZGluYXRlc1xuICAgIH1cblxuICAgIFB1YlN1Yi5wdWJsaXNoKCdtYWtlX3R1cm5fYWknLCBjb29yZGluYXRlcylcbiAgfVxufVxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnXG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IgKGxlbmd0aCwgeCwgeSwgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJywgc2hpcElkID0gJycpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cbiAgICB0aGlzLmJvZHkgPSBbXVxuICAgIHRoaXMuaXNTdW5rID0gZmFsc2VcbiAgICB0aGlzLnNoaXBJZCA9IHNoaXBJZFxuICB9XG5cbiAgaGl0IChjb29yZGluYXRlcykge1xuICAgIHRoaXMuYm9keS5mb3JFYWNoKChwb3NpdGlvbiwgaSwgYXJyKSA9PiB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGFycltpXSA9ICd4J1xuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5oYXNCZWVuU3VuaygpXG4gIH1cblxuICBoYXNCZWVuU3VuayAoKSB7XG4gICAgaWYgKHRoaXMuYm9keS5ldmVyeShwb3NpdGlvbiA9PiBwb3NpdGlvbiA9PT0gJ3gnKSkge1xuICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlXG5cbiAgICAgIFB1YlN1Yi5wdWJsaXNoU3luYygnc2hpcF9pc19zdW5rJykgLy8gU1lOQyFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9WaWV3TWVudSdcbmltcG9ydCB7IFNoaXBzRE9NIH0gZnJvbSAnLi9WaWV3U2hpcHMnXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9WaWV3R3JpZCdcblxuZXhwb3J0IGNsYXNzIFZpZXcge1xuICBzdGF0aWMgaW5pdCAocGxheWVyMSwgcGxheWVyMikge1xuICAgIE1lbnUuaW5pdChwbGF5ZXIxLCBwbGF5ZXIyKVxuICAgIFNoaXBzRE9NLmluaXQocGxheWVyMSwgcGxheWVyMilcbiAgICBHcmlkLmluaXQoKVxuXG4gICAgLyogUmVzZXR0aW5nIGlucHV0IGZpZWxkcyAqL1xuICAgIFNoaXBzRE9NLnJlc2V0SW5wdXRGaWVsZHNQb3NpdGlvbigpXG4gIH1cblxuICBzdGF0aWMgcmVzZXRTaGlwUGxhY2VtZW50IChwbGF5ZXIpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1wb3NpdGlvbicpXG4gICAgY29uc3QgZ3JpZFBsYXllcjEgPVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGdyaWQtJHtwbGF5ZXIuZ2FtZWJvYXJkLnBsYXllcn1gKVxuXG4gICAgaW5wdXRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBmaWVsZC52YWx1ZSA9ICcnXG4gICAgfSlcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZ3JpZFBsYXllcjEuY2hpbGRyZW4pIHtcbiAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvdmVyJykpIGNvbnRpbnVlXG4gICAgICBjaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpXG4gICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjcmVhdGVkJylcbiAgICAgIGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKVxuICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKVxuXG4gICAgICAvLyBEZWxldGUgaXRcbiAgICAgIGNoaWxkLnN0eWxlLmNzc1RleHQgPSAnJ1xuICAgIH1cblxuICAgIHBsYXllci5nYW1lYm9hcmQuYWxpdmVTaGlwcyA9IFtdXG4gIH1cblxuICBzdGF0aWMgZ2V0U2hpcEZyb21ET00gKHBsYXllciwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3Qgc2hpcCA9IFtdXG4gICAgbGV0IHNoaXBJZCA9ICcnXG4gICAgY29uc3QgZ3JpZFBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZC1wbGF5ZXIxJylcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGdyaWRQbGF5ZXIxLmNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSAmJlxuICAgICAgICAhY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcmVhdGVkJykpIHtcbiAgICAgICAgc2hpcElkID0gY2hpbGQuaWRcbiAgICAgICAgY2hpbGQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlZCcpXG4gICAgICAgIHNoaXAucHVzaChjaGlsZC50ZXh0Q29udGVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBQdWJTdWIucHVibGlzaCgnZ290X3NoaXBfZnJvbV9ET00nLCB7XG4gICAgICBjb29yZGluYXRlczogc2hpcFswXSxcbiAgICAgIGxlbmd0aDogc2hpcC5sZW5ndGgsXG4gICAgICBzaGlwSWQsXG4gICAgICBwbGF5ZXIsXG4gICAgICBkaXJlY3Rpb25cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHBsYWNlU2hpcHMgKHBsYXllcikge1xuICAgIGNvbnN0IHNoaXBzUGxheWVyID0gcGxheWVyLmdhbWVib2FyZC5hbGl2ZVNoaXBzXG4gICAgY29uc3QgZ3JpZFBsYXllciA9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JpZC0ke3BsYXllci5nYW1lYm9hcmQucGxheWVyfWApXG5cbiAgICBzaGlwc1BsYXllci5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgc2hpcC5ib2R5LmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IDExMDsgaXRlbSsrKSB7XG4gICAgICAgICAgZ3JpZFBsYXllci5jaGlsZE5vZGVzW2l0ZW1dLnN0eWxlLm91dGxpbmUgPSAnbm9uZSdcblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gZ3JpZFBsYXllci5jaGlsZE5vZGVzW2l0ZW1dLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5wbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xuICAgICAgICAgICAgICBncmlkUGxheWVyLmNoaWxkTm9kZXNbaXRlbV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM1NTViNmUnXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBncmlkUGxheWVyLmNoaWxkTm9kZXNbaXRlbV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4OWIwYWUnXG4gICAgICAgICAgICAgIGdyaWRQbGF5ZXIuY2hpbGROb2Rlc1tpdGVtXS5zdHlsZS5ib3JkZXIgPSAnbm9uZSdcbiAgICAgICAgICAgICAgZ3JpZFBsYXllci5jaGlsZE5vZGVzW2l0ZW1dLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcwJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlc2V0R2FtZURPTSAocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IGdyaWRQbGF5ZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQtcGxheWVyMicpXG4gICAgZ3JpZFBsYXllcjIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHcmlkLmVuYWJsZUNsaWNraW5nR3JpZE9wcG9uZW50KVxuXG4gICAgdGhpcy5kaXNwbGF5RWxlbWVudHNET00oJ2JlZm9yZS1zdGFydCcpXG5cbiAgICB0aGlzLnJlc2V0U2hpcFBsYWNlbWVudChwbGF5ZXIxKVxuICAgIHRoaXMucmVzZXRTaGlwUGxhY2VtZW50KHBsYXllcjIpXG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUVsZW1lbnRzRE9NIChzdGFnZSkge1xuICAgIGNvbnN0IGJsb2NrQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jay1idXR0b25zJylcbiAgICBjb25zdCBibG9ja1NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLXNoaXBzJylcbiAgICBjb25zdCBidXR0b25TdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc3RhcnQtZ2FtZScpXG4gICAgY29uc3QgY29udGFpbmVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXNjb3JlJylcbiAgICBjb25zdCBncmlkUGxheWVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkLXBsYXllcjInKVxuICAgIGNvbnN0IG5hbWVQbGF5ZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLW5hbWUyJylcbiAgICBjb25zdCBidXR0b25BYm9ydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWFib3J0LWdhbWUnKVxuICAgIGNvbnN0IGJ1dHRvblBsYXlBZ2FpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGxheS1hZ2FpbicpXG4gICAgY29uc3QgbWVzc2FnZUVuZGdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1lbmRnYW1lJylcbiAgICBjb25zdCBjb3ZlclBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY292ZXItcGxheWVyMScpXG4gICAgY29uc3QgY292ZXJQbGF5ZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdmVyLXBsYXllcjInKVxuXG4gICAgaWYgKHN0YWdlID09PSAnYmVmb3JlLXN0YXJ0Jykge1xuICAgICAgLy8gSGlkaW5nXG4gICAgICBtZXNzYWdlRW5kZ2FtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBjb3ZlclBsYXllcjEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgZ3JpZFBsYXllcjIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgbmFtZVBsYXllcjIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgYnV0dG9uUGxheUFnYWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGNvbnRhaW5lclNjb3JlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgLy8gU2hvd2luZ1xuICAgICAgYmxvY2tCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgYmxvY2tTaGlwcy5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgIGJ1dHRvblN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09ICdzdGFydCcpIHtcbiAgICAgIC8vIEhpZGluZ1xuICAgICAgYmxvY2tCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGJsb2NrU2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgYnV0dG9uU3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgY292ZXJQbGF5ZXIyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgICAgLy8gU2hvd2luZ1xuICAgICAgY29udGFpbmVyU2NvcmUuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICBncmlkUGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgIG5hbWVQbGF5ZXIyLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgYnV0dG9uQWJvcnRHYW1lLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgY292ZXJQbGF5ZXIxLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgIH0gZWxzZSBpZiAoc3RhZ2UgPT09ICdvdmVyJykge1xuICAgICAgLy8gSGlkaW5nXG4gICAgICBidXR0b25BYm9ydEdhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgICAvLyBTaG93aW5nXG4gICAgICBtZXNzYWdlRW5kZ2FtZS5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgIGJ1dHRvblBsYXlBZ2Fpbi5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgIGNvdmVyUGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJ1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vVmlldydcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMvaGVscGVyRnVuY3Rpb25zJ1xuXG5leHBvcnQgY2xhc3MgR3JpZCB7XG4gIHN0YXRpYyBpbml0ICgpIHtcbiAgICBjb25zdCBibG9ja0dyaWRQbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLWdyaWQxJylcblxuICAgIGNvbnN0IGJsb2NrR3JpZFBsYXllcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvY2stZ3JpZDInKVxuXG4gICAgLyogUGxheWVycycgbmFtZXMgKi9cbiAgICBjb25zdCBuYW1lUGxheWVyMSA9XG4gICAgICBjcmVhdGVFbGVtZW50KCdwJywgJ25hbWUnLCAnYmxvY2stbmFtZTEnLCBibG9ja0dyaWRQbGF5ZXIxKVxuICAgIG5hbWVQbGF5ZXIxLnRleHRDb250ZW50ID0gJ1BsYXllcidcblxuICAgIGNvbnN0IG5hbWVQbGF5ZXIyID1cbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCAnbmFtZScsICdibG9jay1uYW1lMicsIGJsb2NrR3JpZFBsYXllcjIpXG4gICAgbmFtZVBsYXllcjIudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXInXG5cbiAgICAvKiBHcmlkICovXG4gICAgY29uc3QgZ3JpZFBsYXllcjEgPVxuICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dyaWQnLCAnZ3JpZC1wbGF5ZXIxJywgYmxvY2tHcmlkUGxheWVyMSlcbiAgICBjb25zdCBncmlkUGxheWVyMiA9XG4gICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCAnZ3JpZCcsICdncmlkLXBsYXllcjInLCBibG9ja0dyaWRQbGF5ZXIyKVxuXG4gICAgLy8gSGlkaW5nIEFJIGdyaWQgYW5kIHRoZSBuYW1lIGJlZm9yZSBzdGFydGluZyB0aGUgZ2FtZVxuICAgIGdyaWRQbGF5ZXIyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBuYW1lUGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAvKiBHcmlkIGl0ZW1zIG9mIHRoZSBmaXJzdCBwbGF5ZXIgKi9cbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IDEwMDsgaXRlbSsrKSB7XG4gICAgICAvKiBBZGRpbmcgYSBoaWRkZW4gZWxlbWVudCB0byBjaGVjayBmb3JcbiAgICAgIGluY29ycmVjdCBob3Jpem9udGFsIHBvc2l0aW9uaW5nICovXG4gICAgICBpZiAoaXRlbSAhPT0gMCAmJiBpdGVtICUgMTAgPT09IDApIHtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hpZGRlbi1pdGVtJywgbnVsbCwgZ3JpZFBsYXllcjEpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdyaWRJdGVtID1cbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dyaWQtaXRlbScsIG51bGwsIGdyaWRQbGF5ZXIxKVxuXG4gICAgICAvLyBBZGRpbmcgaGlkZGVuIGVsZW1lbnRzIHRvIHRoZSBlbmQgb2YgdGhlIGdyaWQgdG8gY2hlY2sgYWdhaW5zdFxuICAgICAgaWYgKGl0ZW0gPj0gOTkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hpZGRlbi1pdGVtJywgbnVsbCwgZ3JpZFBsYXllcjEpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogQWRqdXN0aW5nIG51bWJlcnMgaW4gZGl2cyBhbmQgY2FzdGluZyBudW1iZXJzIHRvIHN0cmluZ3MgKi9cbiAgICAgIGlmIChpdGVtID49IDEwKSB7XG4gICAgICAgIGdyaWRJdGVtLnRleHRDb250ZW50ID0gaXRlbS50b1N0cmluZygpLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRJdGVtLnRleHRDb250ZW50ID0gJycgKyBpdGVtICsgMFxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEdyaWQgaXRlbXMgb2YgdGhlIHNlY29uZCBwbGF5ZXIgKi9cbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IDEwMDsgaXRlbSsrKSB7XG4gICAgICAvKiBBZGRpbmcgYSBoaWRkZW4gZWxlbWVudCB0byBjaGVjayBmb3JcbiAgICAgIGluY29ycmVjdCBob3Jpem9udGFsIHBvc2l0aW9uaW5nICovXG4gICAgICBpZiAoaXRlbSAhPT0gMCAmJiBpdGVtICUgMTAgPT09IDApIHtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hpZGRlbi1pdGVtJywgbnVsbCwgZ3JpZFBsYXllcjIpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdyaWRJdGVtID1cbiAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2dyaWQtaXRlbScsIG51bGwsIGdyaWRQbGF5ZXIyKVxuXG4gICAgICAvLyBBZGRpbmcgaGlkZGVuIGVsZW1lbnRzIHRvIHRoZSBlbmQgb2YgdGhlIGdyaWQgdG8gY2hlY2sgYWdhaW5zdFxuICAgICAgaWYgKGl0ZW0gPj0gOTkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgJ2hpZGRlbi1pdGVtJywgbnVsbCwgZ3JpZFBsYXllcjEpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogQWRqdXN0aW5nIG51bWJlcnMgaW4gZGl2cyBhbmQgY2FzdGluZyBudW1iZXJzIHRvIHN0cmluZ3MgKi9cbiAgICAgIGlmIChpdGVtID49IDEwKSB7XG4gICAgICAgIGdyaWRJdGVtLnRleHRDb250ZW50ID0gaXRlbS50b1N0cmluZygpLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRJdGVtLnRleHRDb250ZW50ID0gJycgKyBpdGVtICsgMFxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEV2ZW50IGxpc3RlbmVycyAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NsaWNrZWRfYnRuX3N0YXJ0X2dhbWUnLCAoKSA9PiB7XG4gICAgICBncmlkUGxheWVyMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZW5hYmxlQ2xpY2tpbmdHcmlkT3Bwb25lbnQpXG4gICAgfSlcblxuICAgIC8vIEhpZGluZyB0aGUgZXJyb3IgbWVzc2FnZSB3aGVuIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgUHViU3ViLnN1YnNjcmliZSgnY2xpY2tlZF9idG5fc3RhcnRfZ2FtZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yU3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3Itc3RhcnQnKVxuICAgICAgZXJyb3JTdGFydC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIH0pXG5cbiAgICAvKiBVcGRhdGUgZ3JpZHMgYWZ0ZXIgYSBwbGF5ZXIgaGFzIG1hZGUgdGhlaXIgdHVybiAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2F0dGFja19pc19leGVjdXRlZCcsIChtc2csIGRhdGEpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlR3JpZFBsYXllcihkYXRhLmNvb3JkaW5hdGVzLCBkYXRhLm1pc3NlZEhpdHMsIGRhdGEucGxheWVyKVxuICAgIH0pXG5cbiAgICAvKiBEaXYgdGhhdCBkb2Vzbid0IGxldCBhIHBsYXllciBtYWtlIGEgdHVybiBiZWZvcmVcbiAgICB0aGUgb3RoZXIgcGxheWVyIGRvIHNvICovXG4gICAgY29uc3QgY292ZXJQbGF5ZXIxID1cbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3ZlcicsICdjb3Zlci1wbGF5ZXIxJywgZ3JpZFBsYXllcjEpXG4gICAgY29uc3QgY292ZXJQbGF5ZXIyID1cbiAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3ZlcicsICdjb3Zlci1wbGF5ZXIyJywgZ3JpZFBsYXllcjIpXG5cbiAgICBjb3ZlclBsYXllcjEuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNvdmVyUGxheWVyMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBncmlkUGxheWVyMS5hcHBlbmQoY292ZXJQbGF5ZXIxKVxuICAgIGdyaWRQbGF5ZXIyLmFwcGVuZChjb3ZlclBsYXllcjIpXG4gIH1cblxuICBzdGF0aWMgdXBkYXRlR3JpZFBsYXllciAoY29vcmRpbmF0ZXMsIG1pc3NlZEhpdHMsIHBsYXllcikge1xuICAgIGNvbnN0IGdyaWRQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ3JpZC0ke3BsYXllcn1gKVxuICAgIGNvbnN0IGlzTWlzc2VkID0gbWlzc2VkSGl0cy5zb21lKGhpdCA9PiBjb29yZGluYXRlcyA9PT0gaGl0KVxuXG4gICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCAxMTA7IGl0ZW0rKykge1xuICAgICAgaWYgKGdyaWRQbGF5ZXIuY2hpbGROb2Rlc1tpdGVtXS50ZXh0Q29udGVudCA9PT0gY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgaWYgKGlzTWlzc2VkKSB7XG4gICAgICAgICAgZ3JpZFBsYXllci5jaGlsZE5vZGVzW2l0ZW1dLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREFFN0U2J1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyaWRQbGF5ZXIuY2hpbGROb2Rlc1tpdGVtXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0Y1Rjc0OSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbmFibGVDbGlja2luZ0dyaWRPcHBvbmVudCAoZSkge1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2NsaWNrZWRfcGxheWVyMl9ncmlkJywgZS50YXJnZXQudGV4dENvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNoYW5nZVNoaXBQb3NpdGlvbk9uR3JpZCAoc2hpcElucHV0LCBwbGF5ZXIsIHNoaXBDbGFzc2VzKSB7XG4gICAgY29uc3QgZ3JpZFBsYXllcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZC1wbGF5ZXIxJylcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcElucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGhcbiAgICBjb25zdCBzaGlwSWQgPSBzaGlwSW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkXG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZ3JpZFBsYXllcjEuY2hpbGRyZW4pIHtcbiAgICAgIC8qIENoZWNraW5nIGlmIHRoZXJlIGFyZSBlbGVtZW50cyB3aXRoIHRoZSBpbnB1dCBpZC5cbiAgICAgICAgRGVsZXRpbmcgdGhlbSBpZiBpdCdzIHRoZSBjYXNlICovXG4gICAgICBpZiAoc2hpcElkID09PSBpdGVtLmlkKSB7XG4gICAgICAgIHRoaXMuc3R5bGVJdGVtc0R5bmFtaWNhbGx5KFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgc2hpcExlbmd0aCxcbiAgICAgICAgICBbJ2NyZWF0ZWQnLCAncGxhY2VkJ10sXG4gICAgICAgICAgc2hpcElkLFxuICAgICAgICAgICdyZW1vdmUnLFxuICAgICAgICAgIHNoaXBDbGFzc2VzWzBdXG4gICAgICAgIClcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ3NoaXBfZGVsZXRlZF9mcm9tX0RPTScsIHNoaXBJZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hpcElucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgLyogUGxhY2luZyBzaGlwcyBvbiB0aGUgZ3JpZCAqL1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGdyaWRQbGF5ZXIxLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChzaGlwSW5wdXQudmFsdWUgPT09IGl0ZW0udGV4dENvbnRlbnQpIHtcbiAgICAgICAgICB0aGlzLnN0eWxlSXRlbXNEeW5hbWljYWxseShcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgWydwbGFjZWQnXSxcbiAgICAgICAgICAgIHNoaXBJZCxcbiAgICAgICAgICAgICdhZGQnLFxuICAgICAgICAgICAgc2hpcENsYXNzZXNbMF1cbiAgICAgICAgICApXG4gICAgICAgICAgVmlldy5nZXRTaGlwRnJvbURPTShwbGF5ZXIsIHNoaXBDbGFzc2VzWzBdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHN0eWxlSXRlbXNEeW5hbWljYWxseSAoXG4gICAgZWxlbWVudCxcbiAgICBhbW91bnQsXG4gICAgY2xhc3Nlc0FycmF5LFxuICAgIGl0ZW1JZCxcbiAgICBhZGRPclJlbW92ZSxcbiAgICBkaXJlY3Rpb25cbiAgKSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm5cblxuICAgIGlmIChhZGRPclJlbW92ZSA9PT0gJ2FkZCcpIHtcbiAgICAgIGNsYXNzZXNBcnJheS5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChkaXJlY3Rpb24pXG4gICAgICB9KVxuICAgICAgZWxlbWVudC5pZCA9IGl0ZW1JZFxuICAgIH0gZWxzZSBpZiAoYWRkT3JSZW1vdmUgPT09ICdyZW1vdmUnKSB7XG4gICAgICBmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSAnaG9yaXpvbnRhbCcgfHwgY2xhc3NOYW1lID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gY2xhc3NOYW1lXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2xhc3Nlc0FycmF5LmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJylcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpXG4gICAgICB9KVxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgaXRlbUlkKVxuICAgIH1cblxuICAgIGlmIChhbW91bnQgPT09IDEpIHJldHVyblxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZUl0ZW1zRHluYW1pY2FsbHkoXG4gICAgICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICBhbW91bnQgLSAxLFxuICAgICAgICBjbGFzc2VzQXJyYXksXG4gICAgICAgIGl0ZW1JZCxcbiAgICAgICAgYWRkT3JSZW1vdmUsXG4gICAgICAgIGRpcmVjdGlvblxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBsZXQgZWxlbWVudEJlbG93XG5cbiAgICAgIGNvbnN0IGVsZW1lbnRDb29yZGluYXRlc0JlbG93ID1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudFswXSArICgocGFyc2VJbnQoZWxlbWVudC50ZXh0Q29udGVudFsxXSkgKyAxKSlcblxuICAgICAgLyogRmluZGluZyB0aGUgZWxlbWVudCB3aXRoIHRoZSBjb29yZGluYXRlcyAqL1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSBlbGVtZW50Q29vcmRpbmF0ZXNCZWxvdyArICcnKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93ID0gY2hpbGRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zdHlsZUl0ZW1zRHluYW1pY2FsbHkoXG4gICAgICAgIGVsZW1lbnRCZWxvdyxcbiAgICAgICAgYW1vdW50IC0gMSxcbiAgICAgICAgY2xhc3Nlc0FycmF5LFxuICAgICAgICBpdGVtSWQsXG4gICAgICAgIGFkZE9yUmVtb3ZlLFxuICAgICAgICBkaXJlY3Rpb25cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcGxhY2VTaGlwc09uR3JpZFJhbmRvbWx5IChwbGF5ZXIpIHtcbiAgICBjb25zdCBncmlkUGxheWVyID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBncmlkLSR7cGxheWVyLmdhbWVib2FyZC5wbGF5ZXJ9YClcbiAgICBjb25zdCBvbGRDb29yZGluYXRlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMTA7IGkgPj0gMTsgaS0tKSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSAwXG4gICAgICBsZXQgbGVuZ3RoID0gMFxuXG4gICAgICBpZiAoaSA8PSA0KSB7XG4gICAgICAgIGxlbmd0aCA9IDFcbiAgICAgIH0gZWxzZSBpZiAoaSA8PSA3KSB7XG4gICAgICAgIGxlbmd0aCA9IDJcbiAgICAgIH0gZWxzZSBpZiAoaSA8PSA5KSB7XG4gICAgICAgIGxlbmd0aCA9IDNcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMTApIHtcbiAgICAgICAgbGVuZ3RoID0gNFxuICAgICAgfVxuXG4gICAgICAvKiBEZWNpZGluZyB3aGV0aGVyIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5ICovXG4gICAgICBjb25zdCBudW1SYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKVxuICAgICAgY29uc3QgdmVydGljYWxPckhvcml6b250YWwgPSBudW1SYW5kb20gPiAxID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuXG4gICAgICBjb29yZGluYXRlcyA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGxlbmd0aCwgb2xkQ29vcmRpbmF0ZXMpXG5cbiAgICAgIC8qIEFkZGluZyBuZXcgY29vcmRpbmF0ZXMgaW50byBhbiBhcnJheSBvZiB1c2VkIGNvb3JkaW5hdGVzICovXG4gICAgICBmb3IgKGxldCBpbmNyZW1lbnQgPSAwOyBpbmNyZW1lbnQgPCBsZW5ndGg7IGluY3JlbWVudCsrKSB7XG4gICAgICAgIGlmICh2ZXJ0aWNhbE9ySG9yaXpvbnRhbCA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgb2xkQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlcyArIChpbmNyZW1lbnQgKiAxMCkpXG4gICAgICAgIH0gZWxzZSBpZiAodmVydGljYWxPckhvcml6b250YWwgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICBvbGRDb29yZGluYXRlcy5wdXNoKGNvb3JkaW5hdGVzICsgaW5jcmVtZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRpcmVjdGlvbiBvZiB0aGUgc2hpcCBpcyB1bmRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFRoZSBjb3VudGluZyBudW1iZXJzIG9mIHRoZSBzaGlwcyBwbGFjZWQgcmFuZG9tbHkgZGlmZmVycyBmcm9tIHRob3NlXG4gICAgICBwbGFjZWQgbWFudWFsbHkuIEl0IG1pZ2h0IGJlIGEgc291cmNlIG9mIGJ1Z3MgaW4gdGhlIGZ1dHVyZSAqL1xuICAgICAgY29uc3Qgc2hpcElkID0gYHNoaXAke2xlbmd0aH0tJHtpfWBcblxuICAgICAgLyogQ2FzdGluZyB0byBhIHN0cmluZyB0byBzZWFyY2ggZm9yIGluIHRoZSBET00gKi9cbiAgICAgIGlmIChjb29yZGluYXRlcyA8IDEwKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzID0gMCArIChjb29yZGluYXRlcyArICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmRpbmF0ZXMgKz0gJydcbiAgICAgIH1cblxuICAgICAgLyogUG9zaXRpb25pbmcgc2hpcHMgb24gdGhlIGdyaWQgICovXG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGdyaWRQbGF5ZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50ID09PSBjb29yZGluYXRlcykge1xuICAgICAgICAgIHRoaXMuc3R5bGVJdGVtc0R5bmFtaWNhbGx5KFxuICAgICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBbJ3BsYWNlZCddLFxuICAgICAgICAgICAgc2hpcElkLFxuICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9ySG9yaXpvbnRhbFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBBZGRpbmcgdGhlIHNoaXBzIG9uIHRoZSBncmlkIGludG8gYWxpdmVTaGlwcyBhcnJheSAqL1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dvdF9zaGlwX2Zyb21fRE9NJywge1xuICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBzaGlwSWQsXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgZGlyZWN0aW9uOiB2ZXJ0aWNhbE9ySG9yaXpvbnRhbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0UmFuZG9tTnVtYmVyIChsZW5ndGgsIG9sZENvb3JkaW5hdGVzLCBpdGVyYXRpb24gPSAwKSB7XG4gICAgLyogU3RvcHBpbmcgdGhlIGZ1bmN0aW9uIGFmdGVyIDk5dGggaXRlcmF0aW9uIElmIHRoZXJlIGlzIGFuIGVycm9yICovXG4gICAgaWYgKGl0ZXJhdGlvbiA+IDEwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gbXVjaCByZWN1cnNpb24nKVxuICAgIH1cbiAgICBpdGVyYXRpb24rK1xuXG4gICAgbGV0IG51bWJlclJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcblxuICAgIC8qIENoZWNraW5nIGlmIHRoZXJlIGlzIHRoZSByYW5kb20gbnVtYmVyIGluIHRoZSBhcnJheSBvZiB1c2VkIGNvb3JkaW5hdGVzXG4gICAgYW5kIGFsc28gY2hlY2tpbmcgZm9yIGZ1dHVyZSB2YWx1ZXMgKi9cbiAgICBsZXQgaXNPY2N1cGllZFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2xkQ29vcmRpbmF0ZXMuaW5jbHVkZXMobnVtYmVyUmFuZG9tICsgKGkgKiAxMCAtIDEwKSkgfHxcbiAgICAgICAgICBvbGRDb29yZGluYXRlcy5pbmNsdWRlcyhudW1iZXJSYW5kb20gKyAoaSAtIDEpKSkge1xuICAgICAgICBpc09jY3VwaWVkID0gdHJ1ZVxuICAgICAgICBudW1iZXJSYW5kb20gPSB0aGlzLmdldFJhbmRvbU51bWJlcihsZW5ndGgsIG9sZENvb3JkaW5hdGVzLCBpdGVyYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc09jY3VwaWVkID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgLyogQ2hlY2tpbmcgaWYgdGhlIHZhbHVlIGNhbiBOT1QgYmUgcGxhY2VkIG9udG8gdGhlIGdyaWQgKi9cbiAgICBpZiAocGFyc2VJbnQoKG51bWJlclJhbmRvbSArICcnKVsxXSkgKyBsZW5ndGggLSAxID49IDEwIHx8IC8vIHZlcnRpY2FsbHlcbiAgICAgICAgKG51bWJlclJhbmRvbSA8IDEwICYmIG51bWJlclJhbmRvbSArIGxlbmd0aCAtIDEgPj0gMTApIHx8IC8vIHZlcnRpY2FsbHlcbiAgICAgICAgKG51bWJlclJhbmRvbSArIChsZW5ndGggKiAxMCAtIDEwKSA+PSAxMDAgJiYgbGVuZ3RoICE9PSAxKSkgeyAvLyBob3Jpem9udGFsbHlcbiAgICAgIG51bWJlclJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGxlbmd0aCwgb2xkQ29vcmRpbmF0ZXMsIGl0ZXJhdGlvbilcbiAgICAgIHJldHVybiBudW1iZXJSYW5kb21cbiAgICB9IGVsc2UgaWYgKGlzT2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgIG51bWJlclJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tTnVtYmVyKGxlbmd0aCwgb2xkQ29vcmRpbmF0ZXMsIGl0ZXJhdGlvbilcbiAgICAgIHJldHVybiBudW1iZXJSYW5kb21cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bWJlclJhbmRvbVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFB1YlN1YiBmcm9tICdwdWJzdWItanMnXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9WaWV3J1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vVmlld0dyaWQnXG5pbXBvcnQgeyBTaGlwc0RPTSB9IGZyb20gJy4vVmlld1NoaXBzJ1xuaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gJy4vaGVscGVycy9WYWxpZGF0aW9uJ1xuXG5leHBvcnQgY2xhc3MgTWVudSB7XG4gIHN0YXRpYyBpbml0IChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgLyogUGxhY2VtZW50IGJ1dHRvbnMgKi9cbiAgICBjb25zdCBidXR0b25SYW5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXJhbmRvbScpXG4gICAgYnV0dG9uUmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgVmlldy5yZXNldFNoaXBQbGFjZW1lbnQocGxheWVyMSlcbiAgICAgIEdyaWQucGxhY2VTaGlwc09uR3JpZFJhbmRvbWx5KHBsYXllcjEpXG4gICAgICBQdWJTdWIucHVibGlzaCgnY2xpY2tlZF9idG5fc3RhcnRfZ2FtZScpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvblJlc2V0UGxhY2VtZW50ID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tcmVzZXQtcGxhY2VtZW50JylcbiAgICBidXR0b25SZXNldFBsYWNlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFZpZXcucmVzZXRTaGlwUGxhY2VtZW50KHBsYXllcjEpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvblBsYWNlSG9yaXpvbnRhbGx5ID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24taG9yaXpvbnRhbC1wbGFjaW5nJylcbiAgICBidXR0b25QbGFjZUhvcml6b250YWxseS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChidXR0b25QbGFjZUhvcml6b250YWxseS50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKSB7XG4gICAgICAgIGJ1dHRvblBsYWNlSG9yaXpvbnRhbGx5LnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uUGxhY2VIb3Jpem9udGFsbHkudGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCdcbiAgICAgIH1cblxuICAgICAgU2hpcHNET00uY2hhbmdlRGlzcGxheVNoaXBzSW5ET00oKVxuICAgIH0pXG5cbiAgICAvKiBBIGJ1dHRvbiB0aGF0IHN0YXJ0cyB0aGUgZ2FtZSAqL1xuICAgIGNvbnN0IGJ1dHRvblN0YXJ0R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc3RhcnQtZ2FtZScpXG5cbiAgICBidXR0b25TdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoVmFsaWRhdGlvbigpLmNoZWNrU2hpcHNOb3RQbGFjZWRPblN0YXJ0R2FtZSgpID09PSB0cnVlICYmXG4gICAgICAgICAgVmFsaWRhdGlvbigpLmNoZWNrSW52YWxpZFBvc2l0aW9uT25TdGFydEdhbWUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICBQdWJTdWIucHVibGlzaCgnY2xpY2tlZF9idG5fc3RhcnRfZ2FtZScpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8qIEEgYnV0dG9uIHRoYXQgYWJvcnRzIHRoZSBnYW1lICovXG4gICAgY29uc3QgYnV0dG9uQWJvcnRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1hYm9ydC1nYW1lJylcbiAgICBidXR0b25BYm9ydEdhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgYnV0dG9uQWJvcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJ1dHRvbkFib3J0R2FtZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbmZpcm0nKSkge1xuICAgICAgICBQdWJTdWIucHVibGlzaCgnZ2FtZV9hYm9ydGVkJylcbiAgICAgICAgYnV0dG9uQWJvcnRHYW1lLnRleHRDb250ZW50ID0gJ0Fib3J0IEdhbWUnXG4gICAgICAgIGJ1dHRvbkFib3J0R2FtZS5jbGFzc0xpc3QucmVtb3ZlKCdjb25maXJtJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbkFib3J0R2FtZS50ZXh0Q29udGVudCA9ICdBcmUgeW91IHN1cmU/J1xuICAgICAgICBidXR0b25BYm9ydEdhbWUuY2xhc3NMaXN0LmFkZCgnY29uZmlybScpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYnV0dG9uQWJvcnRHYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbmZpcm0nKVxuICAgICAgICAgIGJ1dHRvbkFib3J0R2FtZS50ZXh0Q29udGVudCA9ICdBYm9ydCBHYW1lJ1xuICAgICAgICB9LCA0MDAwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvKiBQbGF5IGFnYWluIGJ1dHRvbiAqL1xuICAgIGNvbnN0IGJ1dHRvblBsYXlBZ2FpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tcGxheS1hZ2FpbicpXG4gICAgYnV0dG9uUGxheUFnYWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGJ1dHRvblBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdnYW1lX3Jlc2V0JylcbiAgICB9KVxuXG4gICAgLyogQSBjb250YWluZXIgZm9yIGRpc3BsYXlpbmcgdGhlIHNjb3JlIG9mIHRoZSBnYW1lICovXG4gICAgY29uc3QgY29udGFpbmVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyLXNjb3JlJylcbiAgICBjb250YWluZXJTY29yZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICBjb25zdCBzY29yZVRleHRQbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLXRleHQtcGxheWVyMScpXG4gICAgY29uc3Qgc2NvcmVUZXh0UGxheWVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS10ZXh0LXBsYXllcjInKVxuXG4gICAgLy8gUG9wdWxhdGluZyBzY29yZSBjb250YWluZXIgZXZlcnkgdGltZSBhIHNoaXAgZ2V0cyBzdW5rXG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2hpcHNfYXJlX2FsaXZlJywgKG1zZywgeyBhbW91bnQsIHBsYXllciB9KSA9PiB7XG4gICAgICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcbiAgICAgICAgc2NvcmVUZXh0UGxheWVyMS50ZXh0Q29udGVudCA9IGFtb3VudCArICc6J1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXIyJykge1xuICAgICAgICBzY29yZVRleHRQbGF5ZXIyLnRleHRDb250ZW50ID0gYW1vdW50XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFBvcHVsYXRpbmcgdGhlIHNjb3JlIGVsZW1lbnQgd2l0aCBpbml0aWFsIHZhbHVlc1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NsaWNrZWRfYnRuX3N0YXJ0X2dhbWUnLCAoKSA9PiB7XG4gICAgICBzY29yZVRleHRQbGF5ZXIxLnRleHRDb250ZW50ID0gMTAgKyAnOidcbiAgICAgIHNjb3JlVGV4dFBsYXllcjIudGV4dENvbnRlbnQgPSAxMFxuICAgIH0pXG5cbiAgICAvKiBFbmRnYW1lIG1lc3NhZ2UgKi9cbiAgICBjb25zdCBtZXNzYWdlRW5kZ2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWVuZGdhbWUnKVxuICAgIG1lc3NhZ2VFbmRnYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gJy4vaGVscGVycy9WYWxpZGF0aW9uJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vVmlld0dyaWQnXG5cbmV4cG9ydCBjbGFzcyBTaGlwc0RPTSB7XG4gIHN0YXRpYyBpbml0IChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgLyogU2hpcHMgKi9cbiAgICBjb25zdCBzaGlwc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LXBvc2l0aW9uJylcbiAgICBzaGlwc0lucHV0LmZvckVhY2goc2hpcElucHV0ID0+IHtcbiAgICAgIHNoaXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9XG4gICAgICAgICAgc2hpcElucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZC5tYXRjaCgvWzAtOV0vKVswXVxuICAgICAgICBjb25zdCBlbGVtZW50Q2xhc3NlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jay1zaGlwcycpLmNsYXNzTGlzdFxuXG4gICAgICAgIGlmICghVmFsaWRhdGlvbigpLmlzUGxhY2VkSW5jb3JyZWN0bHkoXG4gICAgICAgICAgc2hpcElucHV0LFxuICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICAgZWxlbWVudENsYXNzZXNcbiAgICAgICAgKSkge1xuICAgICAgICAgIEdyaWQuY2hhbmdlU2hpcFBvc2l0aW9uT25HcmlkKFxuICAgICAgICAgICAgc2hpcElucHV0LFxuICAgICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICAgIGVsZW1lbnRDbGFzc2VzXG4gICAgICAgICAgKVxuICAgICAgICAgIHNoaXBJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dC1pbnZhbGlkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtaW52YWxpZCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VEaXNwbGF5U2hpcHNJbkRPTSAoKSB7XG4gICAgY29uc3QgYmxvY2tTaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9jay1zaGlwcycpXG4gICAgY29uc3Qgc2hpcEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKVxuXG4gICAgaWYgKGJsb2NrU2hpcHMuc3R5bGUuZmxleERpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgICAgIGJsb2NrU2hpcHMuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nXG5cbiAgICAgIGJsb2NrU2hpcHMuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKVxuICAgICAgYmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsJylcblxuICAgICAgc2hpcEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBibG9ja1NoaXBzLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93J1xuXG4gICAgICBibG9ja1NoaXBzLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKVxuICAgICAgYmxvY2tTaGlwcy5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpXG5cbiAgICAgIHNoaXBFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXRJbnB1dEZpZWxkc1Bvc2l0aW9uICgpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1wb3NpdGlvbicpXG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGlucHV0RmllbGRzKSB7XG4gICAgICBmaWVsZC52YWx1ZSA9ICcnXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gVmFsaWRhdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGlzUGxhY2VkSW5jb3JyZWN0bHkgKHNoaXBJbnB1dCwgc2hpcExlbmd0aCwgZWxlbWVudENsYXNzZXMpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlbGVtZW50Q2xhc3Nlc1swXVxuICAgIGNvbnN0IGdyaWRQbGF5ZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQtcGxheWVyMScpXG4gICAgY29uc3QgZnV0dXJlQ29vcmRpbmF0ZXMgPVxuICAgICAgZ2V0RnV0dXJlQ29vcmRpbmF0ZXMoc2hpcElucHV0LnZhbHVlLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pXG5cbiAgICAvKiBDaGVja2luZyBpZiBhIHBhcnQgb2YgdGhlIHNoaXAgaXMgb3V0c2lkZSBvZiB0aGUgZ3JpZCAqL1xuICAgIGNvbnN0IGlzSW5jb3JyZWN0UG9zaXRpb24gPSBmdXR1cmVDb29yZGluYXRlcy5zb21lKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGUubGVuZ3RoID4gMlxuICAgIH0pXG5cbiAgICBpZiAoaXNJbmNvcnJlY3RQb3NpdGlvbiAmJiBzaGlwSW5wdXQudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKiBDaGVja2luZyBpZiB0aGUgc2hpcCBpcyBwbGFjZWQgb250byBhbm90aGVyIHNoaXAgKi9cbiAgICByZXR1cm4gZnV0dXJlQ29vcmRpbmF0ZXMuc29tZShjb29yZGluYXRlID0+IHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZ3JpZFBsYXllcjEuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT09IGNoaWxkLnRleHRDb250ZW50ICYmXG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRGdXR1cmVDb29yZGluYXRlcyAoY3VycmVudENvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBmdXR1cmVDb29yZGluYXRlcyA9IFtdXG4gICAgbGV0IG5leHRDb29yZGluYXRlc1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBuZXh0Q29vcmRpbmF0ZXMgPVxuICAgICAgICAgIChwYXJzZUludChjdXJyZW50Q29vcmRpbmF0ZXNbMF0pICsgaSkgKyBjdXJyZW50Q29vcmRpbmF0ZXNbMV1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIG5leHRDb29yZGluYXRlcyA9XG4gICAgICAgICAgY3VycmVudENvb3JkaW5hdGVzWzBdICsgKHBhcnNlSW50KGN1cnJlbnRDb29yZGluYXRlc1sxXSkgKyBpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGlyZWN0aW9uIG9mIGZ1dHVyZSBjb29yZGluYXRlcyBpcyBub3QgZGVmaW5lZCcpXG4gICAgICB9XG4gICAgICBmdXR1cmVDb29yZGluYXRlcy5wdXNoKG5leHRDb29yZGluYXRlcylcbiAgICB9XG5cbiAgICByZXR1cm4gZnV0dXJlQ29vcmRpbmF0ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrU2hpcHNOb3RQbGFjZWRPblN0YXJ0R2FtZSAoKSB7XG4gICAgY29uc3Qgc2hpcElucHV0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LXBvc2l0aW9uJylcbiAgICBjb25zdCBjb250YWluZXJFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvci1zdGFydCcpXG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHNoaXBJbnB1dEZpZWxkcykge1xuICAgICAgaWYgKGZpZWxkLnZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgY29udGFpbmVyRXJyb3IudGV4dENvbnRlbnQgPSAnUGxlYXNlIHBsYWNlIGFsbCBzaGlwcyBvbnRvIHRoZSBncmlkLidcbiAgICAgICAgY29udGFpbmVyRXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyRXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJbnZhbGlkUG9zaXRpb25PblN0YXJ0R2FtZSAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3Itc3RhcnQnKVxuICAgIGNvbnN0IGlucHV0c0ludmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtaW52YWxpZCcpXG4gICAgaWYgKGlucHV0c0ludmFsaWQubGVuZ3RoIDwgMSkge1xuICAgICAgY29udGFpbmVyRXJyb3IuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lckVycm9yLnRleHRDb250ZW50ID1cbiAgICAgICAgJ1lvdSBjYW5cXCd0IHN0YXJ0IHRoZSBnYW1lIHdoZW4gdGhlcmUgYXJlIHNoaXBzIHBvc2l0aW9uZWQgaW5jb3JyZWN0bHknXG4gICAgICBjb250YWluZXJFcnJvci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1BsYWNlZEluY29ycmVjdGx5LFxuICAgIGNoZWNrU2hpcHNOb3RQbGFjZWRPblN0YXJ0R2FtZSxcbiAgICBjaGVja0ludmFsaWRQb3NpdGlvbk9uU3RhcnRHYW1lXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0YWcsIGNsYXNzTmFtZSwgZWxlbWVudElkLCBhcHBlbmRUbykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gIGlmIChlbGVtZW50SWQpIGVsZW1lbnQuaWQgPSBlbGVtZW50SWRcbiAgaWYgKGFwcGVuZFRvKSBhcHBlbmRUby5hcHBlbmQoZWxlbWVudClcbiAgcmV0dXJuIGVsZW1lbnRcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvUGxheWVyJ1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL0dhbWVib2FyZCdcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvVmlldydcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL2NvbXBvbmVudHMvU2hpcCdcbmltcG9ydCBQdWJTdWIgZnJvbSAncHVic3ViLWpzJ1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9WaWV3R3JpZCdcblxuY2xhc3MgR2FtZSB7XG4gIHN0YXRpYyBpbml0ICgpIHtcbiAgICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihuZXcgR2FtZWJvYXJkKCdwbGF5ZXIxJyksIHRydWUsIGZhbHNlKVxuICAgIGNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKG5ldyBHYW1lYm9hcmQoJ3BsYXllcjInKSwgdHJ1ZSwgdHJ1ZSkgLy8gQWkgcGxheWVyXG5cbiAgICBWaWV3LmluaXQocGxheWVyMSwgcGxheWVyMilcblxuICAgIC8qIFdoZW4gYSBwbGF5ZXIgcGxhY2VzIGEgc2hpcCBvbnRvIHRoZSBncmlkICovXG4gICAgUHViU3ViLnN1YnNjcmliZSgnZ290X3NoaXBfZnJvbV9ET00nLCAobXNnLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCB4ID0gcGFyc2VJbnQoZGF0YS5jb29yZGluYXRlc1swXSlcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChkYXRhLmNvb3JkaW5hdGVzWzFdKVxuICAgICAgZGF0YS5wbGF5ZXIuZ2FtZWJvYXJkXG4gICAgICAgIC5jcmVhdGVTaGlwT25HYW1lYm9hcmQoXG4gICAgICAgICAgbmV3IFNoaXAoZGF0YS5sZW5ndGgsIHgsIHksIGRhdGEuZGlyZWN0aW9uLCBkYXRhLnNoaXBJZClcbiAgICAgICAgKVxuICAgIH0pXG5cbiAgICAvKiBQbGFjaW5nIHRoZSBmdW5jdGlvbiBiZWxvdyBhZnRlciAnZ290X3NoaXBfZnJvbV9ET00nIGV2ZW50IHNpbmNlIGl0IHJlbGllcyBvbiB0aGlzIGV2ZW50ICovXG4gICAgR3JpZC5wbGFjZVNoaXBzT25HcmlkUmFuZG9tbHkocGxheWVyMilcblxuICAgIC8qIFdoZW4gdGhlIGZpcnN0IHBsYXllciByZW1vdmVzIGEgc2hpcCBmcm9tIHRoZSBncmlkICovXG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2hpcF9kZWxldGVkX2Zyb21fRE9NJywgKG1zZywgc2hpcElkKSA9PiB7XG4gICAgICBwbGF5ZXIxLmdhbWVib2FyZC5kZWxldGVTaGlwRnJvbUdhbWVib2FyZChzaGlwSWQpXG4gICAgfSlcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NsaWNrZWRfYnRuX3N0YXJ0X2dhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRHYW1lKHBsYXllcjEsIHBsYXllcjIpXG4gICAgICBWaWV3LmRpc3BsYXlFbGVtZW50c0RPTSgnc3RhcnQnKVxuICAgIH0pXG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjbGlja2VkX3BsYXllcjJfZ3JpZCcsIChtc2csIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBwbGF5ZXIyLnJlY2VpdmVEYW1hZ2UoY29vcmRpbmF0ZXMsICdwbGF5ZXIyJylcbiAgICB9KVxuXG4gICAgUHViU3ViLnN1YnNjcmliZSgnY2xpY2tlZF9wbGF5ZXIxX2dyaWQnLCAobXNnLCBjb29yZGluYXRlcykgPT4ge1xuICAgICAgcGxheWVyMS5yZWNlaXZlRGFtYWdlKGNvb3JkaW5hdGVzLCAncGxheWVyMScpXG4gICAgfSlcblxuICAgIC8qIFRoaXMgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHNlY29uZCBwbGF5ZXIgaXMgQUkgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtYWtlX3R1cm5fYWknLCAobXNnLCBjb29yZGluYXRlcykgPT4ge1xuICAgICAgcGxheWVyMS5yZWNlaXZlRGFtYWdlKGNvb3JkaW5hdGVzLCAncGxheWVyMScpXG4gICAgfSlcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ25vX2FsaXZlX3NoaXBzJywgKG1zZywgcGxheWVyKSA9PiB7XG4gICAgICB0aGlzLmdhbWVPdmVyKHBsYXllcilcbiAgICB9KVxuXG4gICAgUHViU3ViLnN1YnNjcmliZSgnZ2FtZV9hYm9ydGVkJywgKCkgPT4ge1xuICAgICAgdGhpcy5nYW1lT3ZlcigpXG4gICAgfSlcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2dhbWVfcmVzZXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0R2FtZURhdGEocGxheWVyMSlcbiAgICAgIHRoaXMucmVzZXRHYW1lRGF0YShwbGF5ZXIyKVxuICAgICAgVmlldy5yZXNldEdhbWVET00ocGxheWVyMSwgcGxheWVyMilcbiAgICAgIEdyaWQucGxhY2VTaGlwc09uR3JpZFJhbmRvbWx5KHBsYXllcjIpXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBpbml0R2FtZSAocGxheWVyMSwgcGxheWVyMikge1xuICAgIFZpZXcucGxhY2VTaGlwcyhwbGF5ZXIxKVxuICAgIFZpZXcucGxhY2VTaGlwcyhwbGF5ZXIyKVxuICB9XG5cbiAgc3RhdGljIGdhbWVPdmVyIChwbGF5ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlRW5kZ2FtZVRpdGxlID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWVuZGdhbWUtdGl0bGUnKVxuICAgIGNvbnN0IG1lc3NhZ2VFbmRnYW1lQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWVuZGdhbWUtYm9keScpXG5cbiAgICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcbiAgICAgIG1lc3NhZ2VFbmRnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnSVxcJ20gYWZyYWlkJ1xuICAgICAgbWVzc2FnZUVuZGdhbWVCb2R5LnRleHRDb250ZW50ID0gJ1lvdVxcJ3ZlIGxvc3QuJ1xuICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAncGxheWVyMicpIHtcbiAgICAgIG1lc3NhZ2VFbmRnYW1lVGl0bGUudGV4dENvbnRlbnQgPSAnQ29uZ3JhdHVsYXRpb25zISdcbiAgICAgIG1lc3NhZ2VFbmRnYW1lQm9keS50ZXh0Q29udGVudCA9ICdZb3VcXCd2ZSB3b24hJ1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlRW5kZ2FtZVRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3J0ZWQnXG4gICAgICBtZXNzYWdlRW5kZ2FtZUJvZHkudGV4dENvbnRlbnQgPSAnVGhlIGdhbWUgaGFzIGJlZW4gYWJvcnRlZC4nXG4gICAgfVxuXG4gICAgVmlldy5kaXNwbGF5RWxlbWVudHNET00oJ292ZXInKVxuICB9XG5cbiAgc3RhdGljIHJlc2V0R2FtZURhdGEgKHBsYXllcikge1xuICAgIHBsYXllci5nYW1lYm9hcmQuYWxpdmVTaGlwcyA9IFtdXG4gICAgcGxheWVyLmdhbWVib2FyZC5taXNzZWRIaXRzQ29vcmRpbmF0ZXMgPSBbXVxuICAgIHBsYXllci5wcmV2aW91c0Nvb3JkaW5hdGVzID0gW11cbiAgICBwbGF5ZXIuaXNTdW5rID0gZmFsc2VcbiAgfVxufVxuR2FtZS5pbml0KClcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=