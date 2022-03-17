/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.eot */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.woff2 */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.woff */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! material-design-icons/iconfont/MaterialIcons-Regular.ttf */ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-dark: #333;\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n/* Material Design Icons - Setup Method 2. Self hosting\n * http://google.github.io/material-design-icons/ */\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")\n      format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")\n      format(\"truetype\");\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px; /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n}\n\n.header {\n  height: 72px;\n  background: var(--primary-dark);\n  color: var(--primary-light);\n}\n\n.footer {\n  height: 72px;\n  background: var(--primary-dark);\n}\n\n.sidebar {\n  width: 300px;\n  background: var(--secondary-light);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  font-size: 32px;\n  font-weight: 900;\n}\n\n.logo > p > span {\n  font-size: 2rem;\n}\n\n.logo > p {\n  font-size: 3rem;\n}\n\n.body {\n  flex: 1;\n  display: flex;\n}\n\n.sidebar {\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n.default-project-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 1rem 0;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 0.5rem;\n  border-radius: 5px;\n  padding: 0.5rem 0;\n  font-size: 1.15rem;\n  cursor: pointer;\n}\n\n.project-item-icon-and-name {\n  display: flex;\n  align-items: center;\n}\n\n.project-item-edit-and-delete {\n  display: none;\n}\n\n.project-item:hover .project-item-edit-and-delete {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-item:hover {\n  background-color: var(--primary-light);\n}\n.button-default-project,\n.button-add-project {\n  background-color: var(--secondary-light);\n  text-align: left;\n  vertical-align: middle;\n  border: 0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.button-default-project > p {\n  font-weight: 900;\n  vertical-align: top;\n}\n\n.button-default-project:hover {\n  background-color: var(--primary-light);\n}\n\n.button-default-project:active {\n  background-color: var(--primary-light);\n}\n\n.button-default-project > p > span {\n  font-size: 1.75rem;\n  vertical-align: middle;\n}\n\n.input-edit-project {\n  margin-left: 1rem;\n}\n.material-icons {\n  margin-right: 6px;\n}\n\n.projects-title {\n  padding: 10px;\n  margin-top: 10px;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.button-add-project > p {\n  font-weight: 900;\n}\n\n.button-add-project > p > span {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n\n.button-add-project:hover {\n  background-color: var(--primary-light);\n}\n\n/* .add-project-popup {\n  display: none;\n} */\n\n.add-project-popup {\n  display: none;\n}\n\n.add-project-popup-active {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-add-project-popup {\n  border-radius: 5px;\n  border: none;\n  height: 2rem;\n}\n\n.input-add-project-popup:focus {\n  outline: none;\n}\n.add-project-popup-buttons {\n  margin: 0.5rem 0;\n}\n\n.button-project-popup {\n  color: white;\n  border: none;\n  width: 40%;\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\n.button-project-popup-add {\n  background-color: #14532d;\n}\n\n.button-project-popup-cancel {\n  background-color: #881337;\n}\n\n.add-project-popup-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 900px;\n  padding: 20px 40px;\n  margin: 0 auto;\n}\n\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  width: 100%;\n  padding: 8px 16px;\n  margin-bottom: 16px;\n}\n\n.task:hover {\n  background-color: var(--primary-light);\n}\n\n.task .material-icons {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.task-left {\n  display: flex;\n}\n\n.task-right {\n  display: flex;\n  justify-content: end;\n}\n\n.button-add-task {\n  display: flex;\n  background-color: #fff;\n  text-align: left;\n  vertical-align: middle;\n  border: 0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.button-add-task > p {\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.button-add-task > p > span {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n\n.button-add-task:hover {\n  background-color: var(--primary-light);\n}\n\n.add-task-modal {\n  display: flex;\n  flex-direction: column;\n  border: solid 1px var(--primary-dark);\n  border-radius: 5px;\n  padding: .5rem;\n}\n\n.add-task-modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-task-modal-header button {\n  cursor: pointer;\n  border: none;\n  background: white;\n}\n\n.add-task-modal-body form{\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-task-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.add-task-modal-footer button{\n  padding: .25rem;\n}\n\n.edit-task, \n.delete-task {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.high {\n  color: red;\n}\n\n.medium {\n  color: orange;\n}\n\n.low {\n  color: blue;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: #333;\n  --secondary-dark: #444;\n  --primary-light: #eee;\n  --secondary-light: #ddd;\n}\n\n/* Material Design Icons - Setup Method 2. Self hosting\n * http://google.github.io/material-design-icons/ */\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(~material-design-icons/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"),\n    url(~material-design-icons/iconfont/MaterialIcons-Regular.woff2)\n      format(\"woff2\"),\n    url(~material-design-icons/iconfont/MaterialIcons-Regular.woff)\n      format(\"woff\"),\n    url(~material-design-icons/iconfont/MaterialIcons-Regular.ttf)\n      format(\"truetype\");\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px; /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: \"liga\";\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  min-height: 100vh;\n}\n\n.header {\n  height: 72px;\n  background: var(--primary-dark);\n  color: var(--primary-light);\n}\n\n.footer {\n  height: 72px;\n  background: var(--primary-dark);\n}\n\n.sidebar {\n  width: 300px;\n  background: var(--secondary-light);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  font-size: 32px;\n  font-weight: 900;\n}\n\n.logo > p > span {\n  font-size: 2rem;\n}\n\n.logo > p {\n  font-size: 3rem;\n}\n\n.body {\n  flex: 1;\n  display: flex;\n}\n\n.sidebar {\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n.default-project-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 1rem 0;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 0.5rem;\n  border-radius: 5px;\n  padding: 0.5rem 0;\n  font-size: 1.15rem;\n  cursor: pointer;\n}\n\n.project-item-icon-and-name {\n  display: flex;\n  align-items: center;\n}\n\n.project-item-edit-and-delete {\n  display: none;\n}\n\n.project-item:hover .project-item-edit-and-delete {\n  display: flex;\n  align-items: center;\n  \n}\n\n\n\n.project-item:hover {\n  background-color: var(--primary-light);\n}\n.button-default-project,\n.button-add-project {\n  background-color: var(--secondary-light);\n  text-align: left;\n  vertical-align: middle;\n  border: 0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.button-default-project > p {\n  font-weight: 900;\n  vertical-align: top;\n}\n\n.button-default-project:hover {\n  background-color: var(--primary-light);\n}\n\n.button-default-project:active {\n  background-color: var(--primary-light);\n}\n\n.button-default-project > p > span {\n  font-size: 1.75rem;\n  vertical-align: middle;\n}\n\n.input-edit-project {\n  margin-left: 1rem;\n}\n.material-icons {\n  margin-right: 6px;\n}\n\n.projects-title {\n  padding: 10px;\n  margin-top: 10px;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.button-add-project > p {\n  font-weight: 900;\n}\n\n.button-add-project > p > span {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n\n.button-add-project:hover {\n  background-color: var(--primary-light);\n}\n\n/* .add-project-popup {\n  display: none;\n} */\n\n.add-project-popup {\n  display: none;\n}\n\n.add-project-popup-active {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-add-project-popup {\n  border-radius: 5px;\n  border: none;\n  height: 2rem;\n}\n\n.input-add-project-popup:focus {\n  outline: none;\n}\n.add-project-popup-buttons {\n  margin: 0.5rem 0;\n}\n\n.button-project-popup {\n  color: white;\n  border: none;\n  width: 40%;\n  padding: 0.5rem;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  font-weight: 100;\n}\n\n.button-project-popup-add {\n  background-color: #14532d;\n}\n\n.button-project-popup-cancel {\n  background-color: #881337;\n}\n\n.add-project-popup-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 900px;\n  padding: 20px 40px;\n  margin: 0 auto;\n}\n\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  width: 100%;\n  padding: 8px 16px;\n  margin-bottom: 16px;\n}\n\n.task:hover {\n  background-color: var(--primary-light);\n}\n\n.task .material-icons {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.task-left {\n  display: flex;\n}\n\n.task-right {\n  display: flex;\n  justify-content: end;\n}\n\n.button-add-task {\n  display: flex;\n  background-color: #fff;\n  text-align: left;\n  vertical-align: middle;\n  border: 0;\n  border-radius: 5px;\n  width: 100%;\n}\n\n.button-add-task > p {\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.button-add-task > p > span {\n  font-size: 2rem;\n  vertical-align: middle;\n}\n\n.button-add-task:hover {\n  background-color: var(--primary-light);\n}\n\n.add-task-modal {\n  display: flex;\n  flex-direction: column;\n  border: solid 1px var(--primary-dark);\n  border-radius: 5px;\n  padding: .5rem;\n}\n\n.add-task-modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-task-modal-header button {\n  cursor: pointer;\n  border: none;\n  background: white;\n}\n\n.add-task-modal-body form{\n  display: flex;\n  justify-content: space-between;\n}\n\n.add-task-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.add-task-modal-footer button{\n  padding: .25rem;\n}\n\n.edit-task, \n.delete-task {\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.high {\n  color: red;\n}\n\n.medium {\n  color: orange;\n}\n\n.low {\n  color: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



function app() {
  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();
}




/***/ }),

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "returnNodeById": () => (/* binding */ returnNodeById),
/* harmony export */   "createElt": () => (/* binding */ createElt),
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
function returnNodeById(id) {
  const node = document.getElementById(id);
  return node;
}

function createElt(parent, type, className, id, innerHTML) {
  const parentNode = parent;
  let childNode = document.createElement(type);
  childNode.className = className;
  childNode.id = id;
  childNode.innerHTML = innerHTML;
  parentNode.appendChild(childNode);

  return childNode;
}

function addListener(obj, type, listener) {
  obj.addEventListener(type, listener);
}

// clear parent container by removing all child elts
function clear(parent) {
  parent.style = "";
  parent.innerHTML = "";
}






/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveItem": () => (/* binding */ saveItem),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isTypeEmpty": () => (/* binding */ isTypeEmpty),
/* harmony export */   "retrieveItem": () => (/* binding */ retrieveItem),
/* harmony export */   "retrieveAllItems": () => (/* binding */ retrieveAllItems),
/* harmony export */   "retrieveAllItemsByType": () => (/* binding */ retrieveAllItemsByType),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "removeAllItems": () => (/* binding */ removeAllItems),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable),
/* harmony export */   "doesProjectExist": () => (/* binding */ doesProjectExist),
/* harmony export */   "searchItem": () => (/* binding */ searchItem),
/* harmony export */   "doesTaskExist": () => (/* binding */ doesTaskExist)
/* harmony export */ });
function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isEmpty() {
  let boolFlag = true;
  if (Object.keys(localStorage).length > 0) {
    boolFlag = false;
  }
  return boolFlag;
}

function isTypeEmpty(type) {
  let boolFlag = true;
  const typeArr = retrieveAllItemsByType(type);
  if (typeArr.length > 0) {
    boolFlag = false;
  }
  return boolFlag;
}

function retrieveAllItems() {
  let items = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    items.push(keys[i]);
  }
  return items;
}

function retrieveAllItemsByType(type) {
  let items = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    const dataObj = JSON.parse(localStorage.getItem(keys[i]));
    if (dataObj.type === type) {
      items.push(dataObj);
    }
  }
  return items;
}

function doesProjectExist(item) {
  const lsArr = retrieveAllItemsByType("project");
  const returnTarget = lsArr.find(
    (obj) => obj.title.toLowerCase() === item.toLowerCase()
  );
  if (returnTarget) {
    return true;
  } else {
    return false;
  }
}

function doesTaskExist(itemId) {
  const lsArr = retrieveAllItemsByType("task");
  const returnTarget = lsArr.find(
    obj => obj.id === itemId
  );
  console.trace(`returnTarget: ${returnTarget}`);
  console.trace(returnTarget);
  // returnTarget ? true : false;
  if(returnTarget) {
    return true;
  }
  else {
    return false;
  }
}

function searchItem(target) {
  const lsArr = retrieveAllItemsByType("project");
  const returnTarget = lsArr.find(
    (obj) => obj.title.toLowerCase() === target.toLowerCase()
  );
  return returnTarget;
}

function retrieveItem(key) {
  if (!localStorage.getItem(key)) {
    console.log("That entry doesn't exist!");
    return null;
  } else {
    const retrievedItem = localStorage.getItem(key);
    console.log(`retrievedItem: ${retrievedItem}`);
    return JSON.parse(retrievedItem);
  }
}

//deletes item from localStorage
function removeItem(keyName) {
  localStorage.removeItem(keyName);
}

//clears the entire localStorage
function removeAllItems() {
  localStorage.clear();
  console.log("clear records");
}

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}




/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logic": () => (/* binding */ Logic)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



class Logic {
  constructor() {
    this.tasks = this.returnType("task");
    this.projects = this.returnType("project");
    this.liveProject = this.intializeProject();
  }

  returnType(type) {
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.isTypeEmpty)(type)) {
      return [];
    }
    return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.retrieveAllItemsByType)(type);
  }

  setLiveProject(projectName) {
    const searchObj = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.searchItem)(projectName);
    if (searchObj) {
      this.liveProject = searchObj;
    } else if (projectName === "Today") {
      this.liveProject = { "title": "Today" };
    } else if (projectName === "Week") {
      this.liveProject = { "title": "Week" };
    }
    else {
      console.log("That project doesn't exist!");
    }
  }

  returnProject() {
    return this.liveProject;
  }

  intializeProject() {
    let inboxProject;
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.isTypeEmpty)("project") !== true) {
      inboxProject = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.searchItem)("Inbox");
    } else {
      inboxProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project("Inbox");
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveItem)(inboxProject.id, inboxProject);
    }
    return inboxProject;
  }
}




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "cancelAddProject": () => (/* binding */ cancelAddProject),
/* harmony export */   "submitProject": () => (/* binding */ submitProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFunctions */ "./src/modules/domFunctions.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");



class Project {
  constructor(title = "Inbox") {
    this.title = title;
    this.id = this.generateID(1, 1000000);
    this.type = "project";
  }

  generateID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  displayTitle() {
    return this.title;
  }
}

// Function is triggered when a user clicks the add project button
function addProject() {
  // toggle add project button visibility (invisible)
  const addProjectBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-project");
  addProjectBtn.style.display = "none";

  // toggle add project form input visiblity (visible)
  const popUpDiv = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("add-project-popup");
  popUpDiv.classList.remove("add-project-popup");
  popUpDiv.classList.add("add-project-popup-active");
}

// function is triggered when a user press the cancel button
// after clicking add project
function cancelAddProject() {
  // toggle add project button visiblity (visible)
  const addProjectBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-project");
  addProjectBtn.style.display = "block";

  // reset form
  const input = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("input-add-project-popup");
  input.value = "";

  // toggle add project form input visbility (invisible)
  const popUpDiv = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("add-project-popup");
  popUpDiv.classList.remove("add-project-popup-active");
  popUpDiv.classList.add("add-project-popup");
}

// function submits the user-generated project
// from the form
function submitProject(title) {
  if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.doesProjectExist)(title)) {
    return;
  } else {
    const newProject = new Project(title);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveItem)(newProject.id, newProject);
  }
}

function editProject(project) {
  console.log("editProject");
  console.log(project);
}


// Delete existing project
function deleteProject(project) {
  const lsTaskArr = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.retrieveAllItemsByType)("task");
  lsTaskArr.forEach((obj) => {
    if (obj.project === project.title) {
      obj.project = "Inbox";
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveItem)(obj.id, obj);
    }
  });

  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.removeItem)(project.id);
}




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = this.generateID(1, 1000000);
    this.complete = false;
    this.type = "task";
    this.project = project;
  }

  generateID(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}




/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFunctions */ "./src/modules/domFunctions.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/modules/logic.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");







const logic = new _logic__WEBPACK_IMPORTED_MODULE_2__.Logic();

// Initiatlize screen by calling the header, body, and footer functions
const initialLoad = function () {
  header();
  body();
  footer();
};

// The header function creates a header div and a logo child element
function header() {
  const header = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(document.body, "div", "header", "header", "");

  const logo = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    header,
    "div",
    "logo",
    "logo",
    `<p><span class="material-icons">
    done_all
    </span>ToDo!</p>`
  );
}

/*
The body function creates a div element called body with two child elements: 
sidebar and container. The sidebar is used to show the project list and the
container div shows the current project and relevant task list w/ add task button. 
*/

function body() {
  const body = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(document.body, "div", "body", "body", "");
  sidebar(body);
  container(body);
}

function sidebar(body) {
  const sidebar = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(body, "div", "sidebar", "sidebar", "");
  projects(sidebar);
}

function projects(sidebar) {
  const defaultProjectList = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    sidebar,
    "div",
    "default-project-list",
    "default-project-list",
    ""
  );
  const inbox = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-inbox-projects",
    `<p><span class="material-icons">
      inbox
      </span>Inbox</p>
      `
  );
  const today = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-today-project",
    `<p><span class="material-icons">
  today
  </span>Today</p>
  `
  );
  const week = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    defaultProjectList,
    "button",
    "button-default-project",
    "button-week-projects",
    `<p><span class="material-icons">
  date_range
  </span>Week</p>
  `
  );

  const projectsTitle = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    sidebar,
    "div",
    "projects-title",
    "projects-title",
    "Projects"
  );

  const projectList = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    sidebar,
    "div",
    "projects-list",
    "projects-list",
    ""
  );

  function popuplateProjectList() {
    const projectArr = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveAllItemsByType)("project");
    projectArr.forEach((project) => {
      if (project.title !== "Inbox") {
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
          projectList,
          "div",
          "project-item",
          `project-item-${project.id}`,
          `<div class="project-item-icon-and-name">
          <span class="material-icons">
            list
          </span>
          ${project.title} 
          </div>
          <div class="project-item-edit-and-delete" id="project-item-edit-and-delete-${project.id}">
          <div class="project-item-edit" id="project-item-edit-${project.id}">
            <span class="material-icons">
              edit
            </span>
          </div>
          <div class="project-item-delete" id="project-item-delete-${project.id}">
            <span class="material-icons">
              close
            </span>
          </div>
          </div>
          `
        );

        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-today-project"), "click", () => {});
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(
          (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)(`project-item-${project.id}`),
          "click",
          () => {
            logic.setLiveProject(project.title);
            (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
            container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
          }
        );

        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(
          (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)(`project-item-edit-${project.id}`),
          "click",
          () => {
            const projectItem = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)(`project-item-${project.id}`);
            (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)(projectItem);
            const input = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
              projectItem,
              "input",
              "input-edit-project",
              `input-edit-project-${project.id}`,
              ""
            );
            input.onblur = inputBlur;

            function inputBlur() {
              project.title = input.value;
              (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)(project.id, project);
              logic.setLiveProject(project.title);
              (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
              projects((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
              (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
              container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
            }
          }
        );
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(
          (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)(`project-item-delete-${project.id}`),
          "click",
          () => {
            (0,_project__WEBPACK_IMPORTED_MODULE_1__.deleteProject)((0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(project.id));
            logic.setLiveProject("Inbox");
            (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
            projects((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
          }
        );
      }
    });
  }

  popuplateProjectList();

  const addProjectBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    sidebar,
    "button",
    "button-add-project",
    "button-add-project",
    `<p><span class="material-icons">
      add
    </span>Add Project</p>`
  );

  function addProjectPopUp() {
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      sidebar,
      "div",
      "add-project-popup",
      "add-project-popup",
      `<input class="input-add-project-popup" id="input-add-project-popup" type="text">
      <div class="add-project-popup-buttons">
        <button class="button-project-popup-add button-project-popup" id="button-project-popup-add">
          Add
        </button>
        <button class="button-project-popup-cancel button-project-popup" id="button-project-popup-cancel">
          Cancel
        </button>
      </div>`
    );
  }

  addProjectPopUp();

  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(inbox, "click", () => {
    logic.setLiveProject("Inbox");
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
    container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
  });
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(today, "click", () => {
    logic.setLiveProject("Today");
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
    container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
  });
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(week, "click", () => {
    logic.setLiveProject("Week");
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
    container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
  });
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(addProjectBtn, "click", _project__WEBPACK_IMPORTED_MODULE_1__.addProject);
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)(
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-project-popup-cancel"),
    "click",
    _project__WEBPACK_IMPORTED_MODULE_1__.cancelAddProject
  );
  (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addListener)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-project-popup-add"), "click", () => {
    const newProject = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("input-add-project-popup").value;
    (0,_project__WEBPACK_IMPORTED_MODULE_1__.submitProject)(newProject);
    logic.setLiveProject(newProject);
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
    projects((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("sidebar"));
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
    container((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("body"));
  });
}

function container(body) {
  if (!(0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container")) {
    const container = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(body, "div", "container", "container", "");
  }
  const projectname = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"),
    "div",
    "project-name",
    "project-name",
    `<h1>${logic.returnProject().title}</h1>`
  );
  const taskList = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"),
    "div",
    "task-list",
    "task-list",
    ""
  );

  const populateTaskList = () => {
    const taskArr = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveAllItemsByType)("task");
    taskArr.forEach((task) => {
      if (task.project === logic.returnProject().title) {
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
          taskList,
          "div",
          "task-item",
          `task-item-${task.id}`,
          `<div class="task-left">
            <div class="radio ${task.priority.toLowerCase()}" id="complete-task-${
            task.id
          }">
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `
        );
        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener("click", () => {
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.removeItem)(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener("click", () => {
            console.trace("edit task!");
            const addTaskBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-task");
            addTaskBtn.style.display = "none";
            editTaskModal(task.id);
          });
      } else if (
        logic.returnProject().title === "Today" &&
        (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(task.dueDate))
      ) {
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
          taskList,
          "div",
          "task-item",
          `task-item-${task.id}`,
          `<div class="task-left">
            <div class="radio ${task.priority.toLowerCase()}" id="complete-task-${
            task.id
          }">
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `
        );
        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener("click", () => {
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.removeItem)(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener("click", () => {
            console.trace("edit task!");
            const addTaskBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-task");
            addTaskBtn.style.display = "none";
            editTaskModal(task.id);
          });
      } else if (
        logic.returnProject().title === "Week" &&
        (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(task.dueDate))
      ) {
        (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
          taskList,
          "div",
          "task-item",
          `task-item-${task.id}`,
          `<div class="task-left">
            <div class="radio ${task.priority.toLowerCase()}" id="complete-task-${
            task.id
          }">
              <span class="material-icons"> radio_button_unchecked </span>
            </div>
            <div class="task-basic-info">
              <div class="task-title">${task.title}</div>
              <div class="task-due-date">${task.dueDate}</div>
            </div>
          </div>
          <div class="task-right">
            <div class="edit-task" id="edit-task-${task.id}">
              <span class="material-icons"> edit </span>
            </div>
            <div class="delete-task" id="delete-task-${task.id}">
              <span class="material-icons"> close </span>
            </div>
          </div>
        `
        );
        document
          .getElementById(`delete-task-${task.id}`)
          .addEventListener("click", () => {
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.removeItem)(task.id);
            clearTaskModal();
          });

        document
          .getElementById(`edit-task-${task.id}`)
          .addEventListener("click", () => {
            console.trace("edit task!");
            const addTaskBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-task");
            addTaskBtn.style.display = "none";
            editTaskModal(task.id);
          });
      }
    });
  };

  populateTaskList();

  function editTaskModal(taskId) {
    const task = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(taskId);
    const taskHtmlElt = document.getElementById(`task-item-${taskId}`);

    const modal = document.createElement("div");
    modal.className = "add-task-modal";
    modal.id = "add-task-modal";

    taskHtmlElt.after(modal);
    taskHtmlElt.style.display = "none";

    // create modalHeader
    const modalHeader = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-header",
      "add-task-modal-header",
      `
      <h5 class="add-task-modal-title" id="add-task-model-Title">New Task</h5>
      <button type="button" class="close" id="add-task-modal-close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      `
    );

    // create modalBody
    const modalBody = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-body",
      "add-task-modal-body",
      `<form>
        <div class="add-task-modal-title-desc">
          <div class="add-task-modal-title">
            <label for="title">Title:</label><br>
            <input type="text" id="add-task-input-title" name="title" value=${
              task ? task.title : " "
            }><br>
          </div>
          <div class="add-task-modal-desc">
            <label for="desc">Description:</label><br>
            <input type="text" id="add-task-input-desc" name"desc" value=${
              task ? task.description : " "
            }><br>
          </div>
        </div>
        <div class="add-task-modal-other-info" id="add-task-modal-other-info">
          <div class="add-task-modal-due-date">
            <label for="due-date">Due Date:</label><br>
            <input 
              type="datetime-local" 
              id="add-task-modal-due-date" 
              name="due-date"
              value=${task ? task.dueDate : new Date()}
            >
          </div>
          <div class="add-task-modal-priority">
            <label for="priority">Priority:</label><br>
            <select name="priority" id="add-task-modal-priority-selector">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </form>`
    );

    const modalFooter = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-footer",
      "add-task-modal-footer",
      `
      <button 
        class="add-task-modal-close-btn"
        id="add-task-modal-close-btn"
        >
        Close
      </button>
      <button 
        class="update-task-modal-add-btn"
        id="update-task-modal-add-btn"
        >
        Update Task
      </button>
      `
    );

    document
      .getElementById("add-task-modal-close")
      .addEventListener("click", clearTaskModal);
    document
      .getElementById("add-task-modal-close-btn")
      .addEventListener("click", clearTaskModal);
    document
      .getElementById("update-task-modal-add-btn")
      .addEventListener("click", () => {
        updateTask(task.id);
      });
  }

  function updateTask(taskId) {
    const task = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.retrieveItem)(taskId);
    const title = document.getElementById("add-task-input-title").value;
    const description = document.getElementById("add-task-input-desc").value;
    const dueDate = document.getElementById("add-task-modal-due-date").value;
    const priority = document.getElementById(
      "add-task-modal-priority-selector"
    ).value;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;

    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)(task.id, task);
    clearTaskModal();
  }

  const addTaskBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"),
    "button",
    "button-add-task",
    "button-add-task",
    `<p>
      <span class="material-icons">
        add
      </span>
      Add Task
    </p>`
  );

  function addTaskModal() {
    const modal = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"),
      "div",
      "add-task-modal",
      "add-task-modal",
      ""
    );

    // create modalHeader
    const modalHeader = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-header",
      "add-task-modal-header",
      `
      <h5 class="add-task-modal-title" id="add-task-model-Title">New Task</h5>
      <button type="button" class="close" id="add-task-modal-close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
      `
    );

    // create modalBody
    const modalBody = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-body",
      "add-task-modal-body",
      `<form>
        <div class="add-task-modal-title-desc">
          <div class="add-task-modal-title">
            <label for="title">Title:</label><br>
            <input type="text" id="add-task-input-title" name="title"><br>
          </div>
          <div class="add-task-modal-desc">
            <label for="desc">Description:</label><br>
            <input type="text" id="add-task-input-desc" name"desc" ><br>
          </div>
        </div>
        <div class="add-task-modal-other-info" id="add-task-modal-other-info">
          <div class="add-task-modal-due-date">
            <label for="due-date">Due Date:</label><br>
            <input 
              type="datetime-local" 
              id="add-task-modal-due-date" 
              name="due-date"
              value=${new Date()}
            >
          </div>
          <div class="add-task-modal-priority">
            <label for="priority">Priority:</label><br>
            <select name="priority" id="add-task-modal-priority-selector">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
      </form>`
    );

    const modalFooter = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(
      modal,
      "div",
      "add-task-modal-footer",
      "add-task-modal-footer",
      `
      <button 
        class="add-task-modal-close-btn"
        id="add-task-modal-close-btn"
        >
        Close
      </button>
      <button 
        class="add-task-modal-add-btn"
        id="add-task-modal-add-btn"
        >
        Add Task
      </button>
      `
    );

    document
      .getElementById("add-task-modal-close")
      .addEventListener("click", clearTaskModal);
    document
      .getElementById("add-task-modal-close-btn")
      .addEventListener("click", clearTaskModal);
    document
      .getElementById("add-task-modal-add-btn")
      .addEventListener("click", addTask);
  }

  function clearTaskModal() {
    (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.clear)((0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("container"));
    container();
  }

  function addTask() {
    const title = document.getElementById("add-task-input-title").value;
    const description = document.getElementById("add-task-input-desc").value;
    const dueDate = document.getElementById("add-task-modal-due-date").value;
    const priority = document.getElementById(
      "add-task-modal-priority-selector"
    ).value;
    let project;
    if (
      (logic.returnProject().title === "Today") |
      (logic.returnProject().title === "Week")
    ) {
      project = "Inbox";
    } else {
      project = logic.returnProject().title;
    }
    const task = new _task__WEBPACK_IMPORTED_MODULE_4__.Task(title, description, dueDate, priority, project);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveItem)(task.id, task);
    clearTaskModal();
  }

  document.getElementById("button-add-task").addEventListener("click", () => {
    const addTaskBtn = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.returnNodeById)("button-add-task");
    addTaskBtn.style.display = "none";
    addTaskModal();
  });
}

function footer() {
  const footer = (0,_domFunctions__WEBPACK_IMPORTED_MODULE_0__.createElt)(document.body, "div", "footer", "footer", "");
}




/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot":
/*!*******************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4674f8ded773cb03e824.eot";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf":
/*!*******************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5e7382c63da0098d634a.ttf";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff":
/*!********************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/83bebaf37c09c7e1c3ee.woff";

/***/ }),

/***/ "./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2 ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cff684e59ffb052d72cb.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/app */ "./src/modules/app.js");



(0,_modules_app__WEBPACK_IMPORTED_MODULE_1__.app)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsd01BQTJFO0FBQ3ZILDRDQUE0Qyw0TUFBNkU7QUFDekgsNENBQTRDLDBNQUE0RTtBQUN4SCw0Q0FBNEMsd01BQTJFO0FBQ3ZILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCx5QkFBeUIsMkJBQTJCLDBCQUEwQiw0QkFBNEIsR0FBRyxpSUFBaUksb0NBQW9DLHVCQUF1QixxQkFBcUIsMERBQTBELG1VQUFtVSxHQUFHLHFCQUFxQixvQ0FBb0Msd0JBQXdCLHVCQUF1QixxQkFBcUIsbURBQW1ELG1CQUFtQix5QkFBeUIsMkJBQTJCLHNCQUFzQix3QkFBd0IsbUJBQW1CLG9GQUFvRiwrRUFBK0UsdUVBQXVFLCtEQUErRCxHQUFHLFVBQVUsY0FBYyxlQUFlLDJCQUEyQix3SkFBd0osc0JBQXNCLEdBQUcsYUFBYSxpQkFBaUIsb0NBQW9DLGdDQUFnQyxHQUFHLGFBQWEsaUJBQWlCLG9DQUFvQyxHQUFHLGNBQWMsaUJBQWlCLHVDQUF1QyxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixvQkFBb0Isb0JBQW9CLHFCQUFxQixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLFdBQVcsWUFBWSxrQkFBa0IsR0FBRyxjQUFjLG1CQUFtQixrQkFBa0IsR0FBRywyQkFBMkIsa0JBQWtCLDJCQUEyQixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixtQkFBbUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLHVCQUF1QixzQkFBc0IsdUJBQXVCLG9CQUFvQixHQUFHLGlDQUFpQyxrQkFBa0Isd0JBQXdCLEdBQUcsbUNBQW1DLGtCQUFrQixHQUFHLHVEQUF1RCxrQkFBa0Isd0JBQXdCLE9BQU8sNkJBQTZCLDJDQUEyQyxHQUFHLGlEQUFpRCw2Q0FBNkMscUJBQXFCLDJCQUEyQixjQUFjLHVCQUF1QixnQkFBZ0IsR0FBRyxpQ0FBaUMscUJBQXFCLHdCQUF3QixHQUFHLG1DQUFtQywyQ0FBMkMsR0FBRyxvQ0FBb0MsMkNBQTJDLEdBQUcsd0NBQXdDLHVCQUF1QiwyQkFBMkIsR0FBRyx5QkFBeUIsc0JBQXNCLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLHFCQUFxQixrQkFBa0IscUJBQXFCLHNCQUFzQixxQkFBcUIsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsb0NBQW9DLG9CQUFvQiwyQkFBMkIsR0FBRywrQkFBK0IsMkNBQTJDLEdBQUcsMkJBQTJCLGtCQUFrQixJQUFJLDBCQUEwQixrQkFBa0IsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQixHQUFHLDhCQUE4Qix1QkFBdUIsaUJBQWlCLGlCQUFpQixHQUFHLG9DQUFvQyxrQkFBa0IsR0FBRyw4QkFBOEIscUJBQXFCLEdBQUcsMkJBQTJCLGlCQUFpQixpQkFBaUIsZUFBZSxvQkFBb0IsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLGdDQUFnQyxrQkFBa0IsbUNBQW1DLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLHVCQUF1QixtQkFBbUIsR0FBRyxnQkFBZ0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsdUJBQXVCLGdCQUFnQixzQkFBc0Isd0JBQXdCLEdBQUcsaUJBQWlCLDJDQUEyQyxHQUFHLDJCQUEyQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLHlCQUF5QixHQUFHLHNCQUFzQixrQkFBa0IsMkJBQTJCLHFCQUFxQiwyQkFBMkIsY0FBYyx1QkFBdUIsZ0JBQWdCLEdBQUcsMEJBQTBCLHFCQUFxQixvQkFBb0IsR0FBRyxpQ0FBaUMsb0JBQW9CLDJCQUEyQixHQUFHLDRCQUE0QiwyQ0FBMkMsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQiwwQ0FBMEMsdUJBQXVCLG1CQUFtQixHQUFHLDRCQUE0QixrQkFBa0IsbUNBQW1DLEdBQUcsbUNBQW1DLG9CQUFvQixpQkFBaUIsc0JBQXNCLEdBQUcsOEJBQThCLGtCQUFrQixtQ0FBbUMsR0FBRyw0QkFBNEIsa0JBQWtCLDhCQUE4QixjQUFjLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLGdDQUFnQyxvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsV0FBVyxlQUFlLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyxVQUFVLGdCQUFnQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFFBQVEsTUFBTSxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsV0FBVyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSx1QkFBdUIsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxhQUFhLFNBQVMsS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEh5QztBQUNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNCO0FBQ2E7O0FBRW5DO0FBQ0EsRUFBRSxnREFBVztBQUNiOztBQUVlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDZTs7QUFFcEMsaURBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZG9tRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwibWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9NYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxufVxcblxcbi8qIE1hdGVyaWFsIERlc2lnbiBJY29ucyAtIFNldHVwIE1ldGhvZCAyLiBTZWxmIGhvc3RpbmdcXG4gKiBodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IC8qIEZvciBJRTYtOCAqL1xcbiAgc3JjOiBsb2NhbChcXFwiTWF0ZXJpYWwgSWNvbnNcXFwiKSwgbG9jYWwoXFxcIk1hdGVyaWFsSWNvbnMtUmVndWxhclxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpXFxuICAgICAgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpXFxuICAgICAgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIilcXG4gICAgICBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDI0cHg7IC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuXFxuICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuXFxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG5cXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcXFwibGlnYVxcXCI7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmxvZ28gPiBwID4gc3BhbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5sb2dvID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5ib2R5IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5kZWZhdWx0LXByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWljb24tYW5kLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdC1hbmQtZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIgLnByb2plY3QtaXRlbS1lZGl0LWFuZC1kZWxldGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuXFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3QsXFxuLmJ1dHRvbi1hZGQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3QgPiBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4uYnV0dG9uLWRlZmF1bHQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3Q6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4uYnV0dG9uLWRlZmF1bHQtcHJvamVjdCA+IHAgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5pbnB1dC1lZGl0LXByb2plY3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG59XFxuXFxuLnByb2plY3RzLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC1wcm9qZWN0ID4gcCB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC1wcm9qZWN0ID4gcCA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLyogLmFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufSAqL1xcblxcbi5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAtYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5wdXQtYWRkLXByb2plY3QtcG9wdXAge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uaW5wdXQtYWRkLXByb2plY3QtcG9wdXA6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0LXBvcHVwIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA0MCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5idXR0b24tcHJvamVjdC1wb3B1cC1hZGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0NTMyZDtcXG59XFxuXFxuLmJ1dHRvbi1wcm9qZWN0LXBvcHVwLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgxMzM3O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDkwMHB4O1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi50YXNrIC5tYXRlcmlhbC1pY29ucyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5idXR0b24tYWRkLXRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrID4gcCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrID4gcCA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbC1oZWFkZXIgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwtYm9keSBmb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsLWZvb3RlciBidXR0b257XFxuICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5lZGl0LXRhc2ssIFxcbi5kZWxldGUtdGFzayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubG93IHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO21EQUNtRDs7QUFFbkQ7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBbUUsRUFBRSxjQUFjO0VBQ25GOzs7Ozs7d0JBTXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFFLHdCQUF3QjtFQUN6QyxxQkFBcUI7RUFDckIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjOztFQUVkLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtDQUFrQzs7RUFFbEMseUJBQXlCO0VBQ3pCLGtDQUFrQzs7RUFFbEMsb0JBQW9CO0VBQ3BCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCO2dFQUM4RDtFQUM5RCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87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Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6ICMzMzM7XFxuICAtLXNlY29uZGFyeS1kYXJrOiAjNDQ0O1xcbiAgLS1wcmltYXJ5LWxpZ2h0OiAjZWVlO1xcbiAgLS1zZWNvbmRhcnktbGlnaHQ6ICNkZGQ7XFxufVxcblxcbi8qIE1hdGVyaWFsIERlc2lnbiBJY29ucyAtIFNldHVwIE1ldGhvZCAyLiBTZWxmIGhvc3RpbmdcXG4gKiBodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybCh+bWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QpOyAvKiBGb3IgSUU2LTggKi9cXG4gIHNyYzogbG9jYWwoXFxcIk1hdGVyaWFsIEljb25zXFxcIiksIGxvY2FsKFxcXCJNYXRlcmlhbEljb25zLVJlZ3VsYXJcXFwiKSxcXG4gICAgdXJsKH5tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyKVxcbiAgICAgIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKH5tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYpXFxuICAgICAgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuICAgIHVybCh+bWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci50dGYpXFxuICAgICAgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4OyAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcblxcbiAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcblxcbiAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuXFxuICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImxpZ2FcXFwiO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogNzJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiA3MnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5sb2dvID4gcCA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubG9nbyA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYm9keSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uZGVmYXVsdC1wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1pY29uLWFuZC1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWVkaXQtYW5kLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIC5wcm9qZWN0LWl0ZW0tZWRpdC1hbmQtZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxufVxcblxcblxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcbi5idXR0b24tZGVmYXVsdC1wcm9qZWN0LFxcbi5idXR0b24tYWRkLXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXR0b24tZGVmYXVsdC1wcm9qZWN0ID4gcCB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5idXR0b24tZGVmYXVsdC1wcm9qZWN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmJ1dHRvbi1kZWZhdWx0LXByb2plY3QgPiBwID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uaW5wdXQtZWRpdC1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5wcm9qZWN0cy10aXRsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdCA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtcHJvamVjdCA+IHAgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5idXR0b24tYWRkLXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi8qIC5hZGQtcHJvamVjdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4uYWRkLXByb2plY3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmlucHV0LWFkZC1wcm9qZWN0LXBvcHVwIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuXFxuLmlucHV0LWFkZC1wcm9qZWN0LXBvcHVwOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hZGQtcHJvamVjdC1wb3B1cC1idXR0b25zIHtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi5idXR0b24tcHJvamVjdC1wb3B1cCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uYnV0dG9uLXByb2plY3QtcG9wdXAtYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDUzMmQ7XFxufVxcblxcbi5idXR0b24tcHJvamVjdC1wb3B1cC1jYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4MTMzNztcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXBvcHVwLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4udGFzayAubWF0ZXJpYWwtaWNvbnMge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uYnV0dG9uLWFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzayA+IHAge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ1dHRvbi1hZGQtdGFzayA+IHAgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5idXR0b24tYWRkLXRhc2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwtaGVhZGVyIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsLWJvZHkgZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbC1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbC1mb290ZXIgYnV0dG9ue1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uZWRpdC10YXNrLCBcXG4uZGVsZXRlLXRhc2sge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tZWRpdW0ge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmxvdyB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gMiA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi91aVwiO1xuXG5mdW5jdGlvbiBhcHAoKSB7XG4gIGluaXRpYWxMb2FkKCk7XG59XG5cbmV4cG9ydCB7IGFwcCB9O1xuIiwiZnVuY3Rpb24gcmV0dXJuTm9kZUJ5SWQoaWQpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsdChwYXJlbnQsIHR5cGUsIGNsYXNzTmFtZSwgaWQsIGlubmVySFRNTCkge1xuICBjb25zdCBwYXJlbnROb2RlID0gcGFyZW50O1xuICBsZXQgY2hpbGROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgY2hpbGROb2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgY2hpbGROb2RlLmlkID0gaWQ7XG4gIGNoaWxkTm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcblxuICByZXR1cm4gY2hpbGROb2RlO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihvYmosIHR5cGUsIGxpc3RlbmVyKSB7XG4gIG9iai5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcbn1cblxuLy8gY2xlYXIgcGFyZW50IGNvbnRhaW5lciBieSByZW1vdmluZyBhbGwgY2hpbGQgZWx0c1xuZnVuY3Rpb24gY2xlYXIocGFyZW50KSB7XG4gIHBhcmVudC5zdHlsZSA9IFwiXCI7XG4gIHBhcmVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5cblxuZXhwb3J0IHsgcmV0dXJuTm9kZUJ5SWQsIGNyZWF0ZUVsdCwgYWRkTGlzdGVuZXIsIGNsZWFyIH07XG4iLCJmdW5jdGlvbiBzYXZlSXRlbShrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgbGV0IGJvb2xGbGFnID0gdHJ1ZTtcbiAgaWYgKE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkubGVuZ3RoID4gMCkge1xuICAgIGJvb2xGbGFnID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGJvb2xGbGFnO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVFbXB0eSh0eXBlKSB7XG4gIGxldCBib29sRmxhZyA9IHRydWU7XG4gIGNvbnN0IHR5cGVBcnIgPSByZXRyaWV2ZUFsbEl0ZW1zQnlUeXBlKHR5cGUpO1xuICBpZiAodHlwZUFyci5sZW5ndGggPiAwKSB7XG4gICAgYm9vbEZsYWcgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gYm9vbEZsYWc7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQWxsSXRlbXMoKSB7XG4gIGxldCBpdGVtcyA9IFtdLFxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLFxuICAgIGkgPSBrZXlzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaXRlbXMucHVzaChrZXlzW2ldKTtcbiAgfVxuICByZXR1cm4gaXRlbXM7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQWxsSXRlbXNCeVR5cGUodHlwZSkge1xuICBsZXQgaXRlbXMgPSBbXSxcbiAgICBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSxcbiAgICBpID0ga2V5cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRhdGFPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pKTtcbiAgICBpZiAoZGF0YU9iai50eXBlID09PSB0eXBlKSB7XG4gICAgICBpdGVtcy5wdXNoKGRhdGFPYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXRlbXM7XG59XG5cbmZ1bmN0aW9uIGRvZXNQcm9qZWN0RXhpc3QoaXRlbSkge1xuICBjb25zdCBsc0FyciA9IHJldHJpZXZlQWxsSXRlbXNCeVR5cGUoXCJwcm9qZWN0XCIpO1xuICBjb25zdCByZXR1cm5UYXJnZXQgPSBsc0Fyci5maW5kKFxuICAgIChvYmopID0+IG9iai50aXRsZS50b0xvd2VyQ2FzZSgpID09PSBpdGVtLnRvTG93ZXJDYXNlKClcbiAgKTtcbiAgaWYgKHJldHVyblRhcmdldCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb2VzVGFza0V4aXN0KGl0ZW1JZCkge1xuICBjb25zdCBsc0FyciA9IHJldHJpZXZlQWxsSXRlbXNCeVR5cGUoXCJ0YXNrXCIpO1xuICBjb25zdCByZXR1cm5UYXJnZXQgPSBsc0Fyci5maW5kKFxuICAgIG9iaiA9PiBvYmouaWQgPT09IGl0ZW1JZFxuICApO1xuICBjb25zb2xlLnRyYWNlKGByZXR1cm5UYXJnZXQ6ICR7cmV0dXJuVGFyZ2V0fWApO1xuICBjb25zb2xlLnRyYWNlKHJldHVyblRhcmdldCk7XG4gIC8vIHJldHVyblRhcmdldCA/IHRydWUgOiBmYWxzZTtcbiAgaWYocmV0dXJuVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEl0ZW0odGFyZ2V0KSB7XG4gIGNvbnN0IGxzQXJyID0gcmV0cmlldmVBbGxJdGVtc0J5VHlwZShcInByb2plY3RcIik7XG4gIGNvbnN0IHJldHVyblRhcmdldCA9IGxzQXJyLmZpbmQoXG4gICAgKG9iaikgPT4gb2JqLnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRhcmdldC50b0xvd2VyQ2FzZSgpXG4gICk7XG4gIHJldHVybiByZXR1cm5UYXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlSXRlbShrZXkpIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gICAgY29uc29sZS5sb2coXCJUaGF0IGVudHJ5IGRvZXNuJ3QgZXhpc3QhXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJldHJpZXZlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGNvbnNvbGUubG9nKGByZXRyaWV2ZWRJdGVtOiAke3JldHJpZXZlZEl0ZW19YCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmV0cmlldmVkSXRlbSk7XG4gIH1cbn1cblxuLy9kZWxldGVzIGl0ZW0gZnJvbSBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5TmFtZSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXlOYW1lKTtcbn1cblxuLy9jbGVhcnMgdGhlIGVudGlyZSBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHJlbW92ZUFsbEl0ZW1zKCkge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29uc29sZS5sb2coXCJjbGVhciByZWNvcmRzXCIpO1xufVxuXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgdmFyIHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICB2YXIgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHNhdmVJdGVtLFxuICBpc0VtcHR5LFxuICBpc1R5cGVFbXB0eSxcbiAgcmV0cmlldmVJdGVtLFxuICByZXRyaWV2ZUFsbEl0ZW1zLFxuICByZXRyaWV2ZUFsbEl0ZW1zQnlUeXBlLFxuICByZW1vdmVJdGVtLFxuICByZW1vdmVBbGxJdGVtcyxcbiAgc3RvcmFnZUF2YWlsYWJsZSxcbiAgZG9lc1Byb2plY3RFeGlzdCwgXG4gIHNlYXJjaEl0ZW0sXG4gIGRvZXNUYXNrRXhpc3Rcbn07XG4iLCJpbXBvcnQge1xuICBpc1R5cGVFbXB0eSxcbiAgcmV0cmlldmVBbGxJdGVtc0J5VHlwZSxcbiAgc2F2ZUl0ZW0sXG4gIHNlYXJjaEl0ZW0sXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY2xhc3MgTG9naWMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy5yZXR1cm5UeXBlKFwidGFza1wiKTtcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5yZXR1cm5UeXBlKFwicHJvamVjdFwiKTtcbiAgICB0aGlzLmxpdmVQcm9qZWN0ID0gdGhpcy5pbnRpYWxpemVQcm9qZWN0KCk7XG4gIH1cblxuICByZXR1cm5UeXBlKHR5cGUpIHtcbiAgICBpZiAoaXNUeXBlRW1wdHkodHlwZSkpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHJpZXZlQWxsSXRlbXNCeVR5cGUodHlwZSk7XG4gIH1cblxuICBzZXRMaXZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNlYXJjaE9iaiA9IHNlYXJjaEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGlmIChzZWFyY2hPYmopIHtcbiAgICAgIHRoaXMubGl2ZVByb2plY3QgPSBzZWFyY2hPYmo7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJUb2RheVwiKSB7XG4gICAgICB0aGlzLmxpdmVQcm9qZWN0ID0geyBcInRpdGxlXCI6IFwiVG9kYXlcIiB9O1xuICAgIH0gZWxzZSBpZiAocHJvamVjdE5hbWUgPT09IFwiV2Vla1wiKSB7XG4gICAgICB0aGlzLmxpdmVQcm9qZWN0ID0geyBcInRpdGxlXCI6IFwiV2Vla1wiIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJUaGF0IHByb2plY3QgZG9lc24ndCBleGlzdCFcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuUHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5saXZlUHJvamVjdDtcbiAgfVxuXG4gIGludGlhbGl6ZVByb2plY3QoKSB7XG4gICAgbGV0IGluYm94UHJvamVjdDtcbiAgICBpZiAoaXNUeXBlRW1wdHkoXCJwcm9qZWN0XCIpICE9PSB0cnVlKSB7XG4gICAgICBpbmJveFByb2plY3QgPSBzZWFyY2hJdGVtKFwiSW5ib3hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluYm94UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgICBzYXZlSXRlbShpbmJveFByb2plY3QuaWQsIGluYm94UHJvamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBpbmJveFByb2plY3Q7XG4gIH1cbn1cblxuZXhwb3J0IHsgTG9naWMgfTtcbiIsImltcG9ydCB7IHJldHVybk5vZGVCeUlkIH0gZnJvbSBcIi4vZG9tRnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuICBzYXZlSXRlbSxcbiAgZG9lc1Byb2plY3RFeGlzdCxcbiAgcmV0cmlldmVBbGxJdGVtc0J5VHlwZSxcbiAgcmVtb3ZlSXRlbSxcbn0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiSW5ib3hcIikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmlkID0gdGhpcy5nZW5lcmF0ZUlEKDEsIDEwMDAwMDApO1xuICAgIHRoaXMudHlwZSA9IFwicHJvamVjdFwiO1xuICB9XG5cbiAgZ2VuZXJhdGVJRChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cblxuICBjaGFuZ2VUaXRsZShuZXdUaXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgfVxuXG4gIGRpc3BsYXlUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiBpcyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2xpY2tzIHRoZSBhZGQgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIC8vIHRvZ2dsZSBhZGQgcHJvamVjdCBidXR0b24gdmlzaWJpbGl0eSAoaW52aXNpYmxlKVxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gcmV0dXJuTm9kZUJ5SWQoXCJidXR0b24tYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIHRvZ2dsZSBhZGQgcHJvamVjdCBmb3JtIGlucHV0IHZpc2libGl0eSAodmlzaWJsZSlcbiAgY29uc3QgcG9wVXBEaXYgPSByZXR1cm5Ob2RlQnlJZChcImFkZC1wcm9qZWN0LXBvcHVwXCIpO1xuICBwb3BVcERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkLXByb2plY3QtcG9wdXBcIik7XG4gIHBvcFVwRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1wb3B1cC1hY3RpdmVcIik7XG59XG5cbi8vIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBwcmVzcyB0aGUgY2FuY2VsIGJ1dHRvblxuLy8gYWZ0ZXIgY2xpY2tpbmcgYWRkIHByb2plY3RcbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gIC8vIHRvZ2dsZSBhZGQgcHJvamVjdCBidXR0b24gdmlzaWJsaXR5ICh2aXNpYmxlKVxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gcmV0dXJuTm9kZUJ5SWQoXCJidXR0b24tYWRkLXByb2plY3RcIik7XG4gIGFkZFByb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAvLyByZXNldCBmb3JtXG4gIGNvbnN0IGlucHV0ID0gcmV0dXJuTm9kZUJ5SWQoXCJpbnB1dC1hZGQtcHJvamVjdC1wb3B1cFwiKTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xuXG4gIC8vIHRvZ2dsZSBhZGQgcHJvamVjdCBmb3JtIGlucHV0IHZpc2JpbGl0eSAoaW52aXNpYmxlKVxuICBjb25zdCBwb3BVcERpdiA9IHJldHVybk5vZGVCeUlkKFwiYWRkLXByb2plY3QtcG9wdXBcIik7XG4gIHBvcFVwRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhZGQtcHJvamVjdC1wb3B1cC1hY3RpdmVcIik7XG4gIHBvcFVwRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1wb3B1cFwiKTtcbn1cblxuLy8gZnVuY3Rpb24gc3VibWl0cyB0aGUgdXNlci1nZW5lcmF0ZWQgcHJvamVjdFxuLy8gZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCh0aXRsZSkge1xuICBpZiAoZG9lc1Byb2plY3RFeGlzdCh0aXRsZSkpIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBzYXZlSXRlbShuZXdQcm9qZWN0LmlkLCBuZXdQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnNvbGUubG9nKFwiZWRpdFByb2plY3RcIik7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xufVxuXG5cbi8vIERlbGV0ZSBleGlzdGluZyBwcm9qZWN0XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgbHNUYXNrQXJyID0gcmV0cmlldmVBbGxJdGVtc0J5VHlwZShcInRhc2tcIik7XG4gIGxzVGFza0Fyci5mb3JFYWNoKChvYmopID0+IHtcbiAgICBpZiAob2JqLnByb2plY3QgPT09IHByb2plY3QudGl0bGUpIHtcbiAgICAgIG9iai5wcm9qZWN0ID0gXCJJbmJveFwiO1xuICAgICAgc2F2ZUl0ZW0ob2JqLmlkLCBvYmopO1xuICAgIH1cbiAgfSk7XG5cbiAgcmVtb3ZlSXRlbShwcm9qZWN0LmlkKTtcbn1cblxuZXhwb3J0IHtcbiAgUHJvamVjdCxcbiAgYWRkUHJvamVjdCxcbiAgY2FuY2VsQWRkUHJvamVjdCxcbiAgc3VibWl0UHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbiAgZWRpdFByb2plY3QsXG59O1xuIiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlSUQoMSwgMTAwMDAwMCk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMudHlwZSA9IFwidGFza1wiO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICBnZW5lcmF0ZUlEKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsdCwgYWRkTGlzdGVuZXIsIHJldHVybk5vZGVCeUlkLCBjbGVhciB9IGZyb20gXCIuL2RvbUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgY2FuY2VsQWRkUHJvamVjdCxcbiAgc3VibWl0UHJvamVjdCxcbiAgZGVsZXRlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgTG9naWMgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHtcbiAgcmVtb3ZlSXRlbSxcbiAgcmV0cmlldmVBbGxJdGVtc0J5VHlwZSxcbiAgcmV0cmlldmVJdGVtLFxuICBzYXZlSXRlbSxcbn0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgaXNUb2RheSwgcGFyc2VJU08sIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgbG9naWMgPSBuZXcgTG9naWMoKTtcblxuLy8gSW5pdGlhdGxpemUgc2NyZWVuIGJ5IGNhbGxpbmcgdGhlIGhlYWRlciwgYm9keSwgYW5kIGZvb3RlciBmdW5jdGlvbnNcbmNvbnN0IGluaXRpYWxMb2FkID0gZnVuY3Rpb24gKCkge1xuICBoZWFkZXIoKTtcbiAgYm9keSgpO1xuICBmb290ZXIoKTtcbn07XG5cbi8vIFRoZSBoZWFkZXIgZnVuY3Rpb24gY3JlYXRlcyBhIGhlYWRlciBkaXYgYW5kIGEgbG9nbyBjaGlsZCBlbGVtZW50XG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsdChkb2N1bWVudC5ib2R5LCBcImRpdlwiLCBcImhlYWRlclwiLCBcImhlYWRlclwiLCBcIlwiKTtcblxuICBjb25zdCBsb2dvID0gY3JlYXRlRWx0KFxuICAgIGhlYWRlcixcbiAgICBcImRpdlwiLFxuICAgIFwibG9nb1wiLFxuICAgIFwibG9nb1wiLFxuICAgIGA8cD48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgZG9uZV9hbGxcbiAgICA8L3NwYW4+VG9EbyE8L3A+YFxuICApO1xufVxuXG4vKlxuVGhlIGJvZHkgZnVuY3Rpb24gY3JlYXRlcyBhIGRpdiBlbGVtZW50IGNhbGxlZCBib2R5IHdpdGggdHdvIGNoaWxkIGVsZW1lbnRzOiBcbnNpZGViYXIgYW5kIGNvbnRhaW5lci4gVGhlIHNpZGViYXIgaXMgdXNlZCB0byBzaG93IHRoZSBwcm9qZWN0IGxpc3QgYW5kIHRoZVxuY29udGFpbmVyIGRpdiBzaG93cyB0aGUgY3VycmVudCBwcm9qZWN0IGFuZCByZWxldmFudCB0YXNrIGxpc3Qgdy8gYWRkIHRhc2sgYnV0dG9uLiBcbiovXG5cbmZ1bmN0aW9uIGJvZHkoKSB7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVFbHQoZG9jdW1lbnQuYm9keSwgXCJkaXZcIiwgXCJib2R5XCIsIFwiYm9keVwiLCBcIlwiKTtcbiAgc2lkZWJhcihib2R5KTtcbiAgY29udGFpbmVyKGJvZHkpO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyKGJvZHkpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGNyZWF0ZUVsdChib2R5LCBcImRpdlwiLCBcInNpZGViYXJcIiwgXCJzaWRlYmFyXCIsIFwiXCIpO1xuICBwcm9qZWN0cyhzaWRlYmFyKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdHMoc2lkZWJhcikge1xuICBjb25zdCBkZWZhdWx0UHJvamVjdExpc3QgPSBjcmVhdGVFbHQoXG4gICAgc2lkZWJhcixcbiAgICBcImRpdlwiLFxuICAgIFwiZGVmYXVsdC1wcm9qZWN0LWxpc3RcIixcbiAgICBcImRlZmF1bHQtcHJvamVjdC1saXN0XCIsXG4gICAgXCJcIlxuICApO1xuICBjb25zdCBpbmJveCA9IGNyZWF0ZUVsdChcbiAgICBkZWZhdWx0UHJvamVjdExpc3QsXG4gICAgXCJidXR0b25cIixcbiAgICBcImJ1dHRvbi1kZWZhdWx0LXByb2plY3RcIixcbiAgICBcImJ1dHRvbi1pbmJveC1wcm9qZWN0c1wiLFxuICAgIGA8cD48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICBpbmJveFxuICAgICAgPC9zcGFuPkluYm94PC9wPlxuICAgICAgYFxuICApO1xuICBjb25zdCB0b2RheSA9IGNyZWF0ZUVsdChcbiAgICBkZWZhdWx0UHJvamVjdExpc3QsXG4gICAgXCJidXR0b25cIixcbiAgICBcImJ1dHRvbi1kZWZhdWx0LXByb2plY3RcIixcbiAgICBcImJ1dHRvbi10b2RheS1wcm9qZWN0XCIsXG4gICAgYDxwPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgdG9kYXlcbiAgPC9zcGFuPlRvZGF5PC9wPlxuICBgXG4gICk7XG4gIGNvbnN0IHdlZWsgPSBjcmVhdGVFbHQoXG4gICAgZGVmYXVsdFByb2plY3RMaXN0LFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJidXR0b24tZGVmYXVsdC1wcm9qZWN0XCIsXG4gICAgXCJidXR0b24td2Vlay1wcm9qZWN0c1wiLFxuICAgIGA8cD48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gIGRhdGVfcmFuZ2VcbiAgPC9zcGFuPldlZWs8L3A+XG4gIGBcbiAgKTtcblxuICBjb25zdCBwcm9qZWN0c1RpdGxlID0gY3JlYXRlRWx0KFxuICAgIHNpZGViYXIsXG4gICAgXCJkaXZcIixcbiAgICBcInByb2plY3RzLXRpdGxlXCIsXG4gICAgXCJwcm9qZWN0cy10aXRsZVwiLFxuICAgIFwiUHJvamVjdHNcIlxuICApO1xuXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gY3JlYXRlRWx0KFxuICAgIHNpZGViYXIsXG4gICAgXCJkaXZcIixcbiAgICBcInByb2plY3RzLWxpc3RcIixcbiAgICBcInByb2plY3RzLWxpc3RcIixcbiAgICBcIlwiXG4gICk7XG5cbiAgZnVuY3Rpb24gcG9wdXBsYXRlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IHJldHJpZXZlQWxsSXRlbXNCeVR5cGUoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QudGl0bGUgIT09IFwiSW5ib3hcIikge1xuICAgICAgICBjcmVhdGVFbHQoXG4gICAgICAgICAgcHJvamVjdExpc3QsXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBcInByb2plY3QtaXRlbVwiLFxuICAgICAgICAgIGBwcm9qZWN0LWl0ZW0tJHtwcm9qZWN0LmlkfWAsXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWl0ZW0taWNvbi1hbmQtbmFtZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgICAgIGxpc3RcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJHtwcm9qZWN0LnRpdGxlfSBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pdGVtLWVkaXQtYW5kLWRlbGV0ZVwiIGlkPVwicHJvamVjdC1pdGVtLWVkaXQtYW5kLWRlbGV0ZS0ke3Byb2plY3QuaWR9XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaXRlbS1lZGl0XCIgaWQ9XCJwcm9qZWN0LWl0ZW0tZWRpdC0ke3Byb2plY3QuaWR9XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgIGVkaXRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pdGVtLWRlbGV0ZVwiIGlkPVwicHJvamVjdC1pdGVtLWRlbGV0ZS0ke3Byb2plY3QuaWR9XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICApO1xuXG4gICAgICAgIGFkZExpc3RlbmVyKHJldHVybk5vZGVCeUlkKFwiYnV0dG9uLXRvZGF5LXByb2plY3RcIiksIFwiY2xpY2tcIiwgKCkgPT4ge30pO1xuICAgICAgICBhZGRMaXN0ZW5lcihcbiAgICAgICAgICByZXR1cm5Ob2RlQnlJZChgcHJvamVjdC1pdGVtLSR7cHJvamVjdC5pZH1gKSxcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgbG9naWMuc2V0TGl2ZVByb2plY3QocHJvamVjdC50aXRsZSk7XG4gICAgICAgICAgICBjbGVhcihyZXR1cm5Ob2RlQnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgICAgICAgICBjb250YWluZXIocmV0dXJuTm9kZUJ5SWQoXCJib2R5XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkTGlzdGVuZXIoXG4gICAgICAgICAgcmV0dXJuTm9kZUJ5SWQoYHByb2plY3QtaXRlbS1lZGl0LSR7cHJvamVjdC5pZH1gKSxcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSByZXR1cm5Ob2RlQnlJZChgcHJvamVjdC1pdGVtLSR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgICAgIGNsZWFyKHByb2plY3RJdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWx0KFxuICAgICAgICAgICAgICBwcm9qZWN0SXRlbSxcbiAgICAgICAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWVkaXQtcHJvamVjdFwiLFxuICAgICAgICAgICAgICBgaW5wdXQtZWRpdC1wcm9qZWN0LSR7cHJvamVjdC5pZH1gLFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaW5wdXQub25ibHVyID0gaW5wdXRCbHVyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBpbnB1dEJsdXIoKSB7XG4gICAgICAgICAgICAgIHByb2plY3QudGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgc2F2ZUl0ZW0ocHJvamVjdC5pZCwgcHJvamVjdCk7XG4gICAgICAgICAgICAgIGxvZ2ljLnNldExpdmVQcm9qZWN0KHByb2plY3QudGl0bGUpO1xuICAgICAgICAgICAgICBjbGVhcihyZXR1cm5Ob2RlQnlJZChcInNpZGViYXJcIikpO1xuICAgICAgICAgICAgICBwcm9qZWN0cyhyZXR1cm5Ob2RlQnlJZChcInNpZGViYXJcIikpO1xuICAgICAgICAgICAgICBjbGVhcihyZXR1cm5Ob2RlQnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lcihyZXR1cm5Ob2RlQnlJZChcImJvZHlcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgYWRkTGlzdGVuZXIoXG4gICAgICAgICAgcmV0dXJuTm9kZUJ5SWQoYHByb2plY3QtaXRlbS1kZWxldGUtJHtwcm9qZWN0LmlkfWApLFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHJldHJpZXZlSXRlbShwcm9qZWN0LmlkKSk7XG4gICAgICAgICAgICBsb2dpYy5zZXRMaXZlUHJvamVjdChcIkluYm94XCIpO1xuICAgICAgICAgICAgY2xlYXIocmV0dXJuTm9kZUJ5SWQoXCJzaWRlYmFyXCIpKTtcbiAgICAgICAgICAgIHByb2plY3RzKHJldHVybk5vZGVCeUlkKFwic2lkZWJhclwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcG9wdXBsYXRlUHJvamVjdExpc3QoKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gY3JlYXRlRWx0KFxuICAgIHNpZGViYXIsXG4gICAgXCJidXR0b25cIixcbiAgICBcImJ1dHRvbi1hZGQtcHJvamVjdFwiLFxuICAgIFwiYnV0dG9uLWFkZC1wcm9qZWN0XCIsXG4gICAgYDxwPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgIGFkZFxuICAgIDwvc3Bhbj5BZGQgUHJvamVjdDwvcD5gXG4gICk7XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdFBvcFVwKCkge1xuICAgIGNyZWF0ZUVsdChcbiAgICAgIHNpZGViYXIsXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtcHJvamVjdC1wb3B1cFwiLFxuICAgICAgXCJhZGQtcHJvamVjdC1wb3B1cFwiLFxuICAgICAgYDxpbnB1dCBjbGFzcz1cImlucHV0LWFkZC1wcm9qZWN0LXBvcHVwXCIgaWQ9XCJpbnB1dC1hZGQtcHJvamVjdC1wb3B1cFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkLXByb2plY3QtcG9wdXAtYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLXByb2plY3QtcG9wdXAtYWRkIGJ1dHRvbi1wcm9qZWN0LXBvcHVwXCIgaWQ9XCJidXR0b24tcHJvamVjdC1wb3B1cC1hZGRcIj5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tcHJvamVjdC1wb3B1cC1jYW5jZWwgYnV0dG9uLXByb2plY3QtcG9wdXBcIiBpZD1cImJ1dHRvbi1wcm9qZWN0LXBvcHVwLWNhbmNlbFwiPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PmBcbiAgICApO1xuICB9XG5cbiAgYWRkUHJvamVjdFBvcFVwKCk7XG5cbiAgYWRkTGlzdGVuZXIoaW5ib3gsIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ2ljLnNldExpdmVQcm9qZWN0KFwiSW5ib3hcIik7XG4gICAgY2xlYXIocmV0dXJuTm9kZUJ5SWQoXCJjb250YWluZXJcIikpO1xuICAgIGNvbnRhaW5lcihyZXR1cm5Ob2RlQnlJZChcImJvZHlcIikpO1xuICB9KTtcbiAgYWRkTGlzdGVuZXIodG9kYXksIFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ2ljLnNldExpdmVQcm9qZWN0KFwiVG9kYXlcIik7XG4gICAgY2xlYXIocmV0dXJuTm9kZUJ5SWQoXCJjb250YWluZXJcIikpO1xuICAgIGNvbnRhaW5lcihyZXR1cm5Ob2RlQnlJZChcImJvZHlcIikpO1xuICB9KTtcbiAgYWRkTGlzdGVuZXIod2VlaywgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9naWMuc2V0TGl2ZVByb2plY3QoXCJXZWVrXCIpO1xuICAgIGNsZWFyKHJldHVybk5vZGVCeUlkKFwiY29udGFpbmVyXCIpKTtcbiAgICBjb250YWluZXIocmV0dXJuTm9kZUJ5SWQoXCJib2R5XCIpKTtcbiAgfSk7XG4gIGFkZExpc3RlbmVyKGFkZFByb2plY3RCdG4sIFwiY2xpY2tcIiwgYWRkUHJvamVjdCk7XG4gIGFkZExpc3RlbmVyKFxuICAgIHJldHVybk5vZGVCeUlkKFwiYnV0dG9uLXByb2plY3QtcG9wdXAtY2FuY2VsXCIpLFxuICAgIFwiY2xpY2tcIixcbiAgICBjYW5jZWxBZGRQcm9qZWN0XG4gICk7XG4gIGFkZExpc3RlbmVyKHJldHVybk5vZGVCeUlkKFwiYnV0dG9uLXByb2plY3QtcG9wdXAtYWRkXCIpLCBcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcmV0dXJuTm9kZUJ5SWQoXCJpbnB1dC1hZGQtcHJvamVjdC1wb3B1cFwiKS52YWx1ZTtcbiAgICBzdWJtaXRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGxvZ2ljLnNldExpdmVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIGNsZWFyKHJldHVybk5vZGVCeUlkKFwic2lkZWJhclwiKSk7XG4gICAgcHJvamVjdHMocmV0dXJuTm9kZUJ5SWQoXCJzaWRlYmFyXCIpKTtcbiAgICBjbGVhcihyZXR1cm5Ob2RlQnlJZChcImNvbnRhaW5lclwiKSk7XG4gICAgY29udGFpbmVyKHJldHVybk5vZGVCeUlkKFwiYm9keVwiKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb250YWluZXIoYm9keSkge1xuICBpZiAoIXJldHVybk5vZGVCeUlkKFwiY29udGFpbmVyXCIpKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWx0KGJvZHksIFwiZGl2XCIsIFwiY29udGFpbmVyXCIsIFwiY29udGFpbmVyXCIsIFwiXCIpO1xuICB9XG4gIGNvbnN0IHByb2plY3RuYW1lID0gY3JlYXRlRWx0KFxuICAgIHJldHVybk5vZGVCeUlkKFwiY29udGFpbmVyXCIpLFxuICAgIFwiZGl2XCIsXG4gICAgXCJwcm9qZWN0LW5hbWVcIixcbiAgICBcInByb2plY3QtbmFtZVwiLFxuICAgIGA8aDE+JHtsb2dpYy5yZXR1cm5Qcm9qZWN0KCkudGl0bGV9PC9oMT5gXG4gICk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gY3JlYXRlRWx0KFxuICAgIHJldHVybk5vZGVCeUlkKFwiY29udGFpbmVyXCIpLFxuICAgIFwiZGl2XCIsXG4gICAgXCJ0YXNrLWxpc3RcIixcbiAgICBcInRhc2stbGlzdFwiLFxuICAgIFwiXCJcbiAgKTtcblxuICBjb25zdCBwb3B1bGF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tBcnIgPSByZXRyaWV2ZUFsbEl0ZW1zQnlUeXBlKFwidGFza1wiKTtcbiAgICB0YXNrQXJyLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IGxvZ2ljLnJldHVyblByb2plY3QoKS50aXRsZSkge1xuICAgICAgICBjcmVhdGVFbHQoXG4gICAgICAgICAgdGFza0xpc3QsXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBcInRhc2staXRlbVwiLFxuICAgICAgICAgIGB0YXNrLWl0ZW0tJHt0YXNrLmlkfWAsXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpbyAke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIiBpZD1cImNvbXBsZXRlLXRhc2stJHtcbiAgICAgICAgICAgIHRhc2suaWRcbiAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4gcmFkaW9fYnV0dG9uX3VuY2hlY2tlZCA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJhc2ljLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFza1wiIGlkPVwiZWRpdC10YXNrLSR7dGFzay5pZH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiBlZGl0IDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS10YXNrXCIgaWQ9XCJkZWxldGUtdGFzay0ke3Rhc2suaWR9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZS10YXNrLSR7dGFzay5pZH1gKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlSXRlbSh0YXNrLmlkKTtcbiAgICAgICAgICAgIGNsZWFyVGFza01vZGFsKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGVkaXQtdGFzay0ke3Rhc2suaWR9YClcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoXCJlZGl0IHRhc2shXCIpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHJldHVybk5vZGVCeUlkKFwiYnV0dG9uLWFkZC10YXNrXCIpO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlZGl0VGFza01vZGFsKHRhc2suaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgbG9naWMucmV0dXJuUHJvamVjdCgpLnRpdGxlID09PSBcIlRvZGF5XCIgJiZcbiAgICAgICAgaXNUb2RheShwYXJzZUlTTyh0YXNrLmR1ZURhdGUpKVxuICAgICAgKSB7XG4gICAgICAgIGNyZWF0ZUVsdChcbiAgICAgICAgICB0YXNrTGlzdCxcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIFwidGFzay1pdGVtXCIsXG4gICAgICAgICAgYHRhc2staXRlbS0ke3Rhc2suaWR9YCxcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cInRhc2stbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvICR7dGFzay5wcmlvcml0eS50b0xvd2VyQ2FzZSgpfVwiIGlkPVwiY29tcGxldGUtdGFzay0ke1xuICAgICAgICAgICAgdGFzay5pZFxuICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiByYWRpb19idXR0b25fdW5jaGVja2VkIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYmFzaWMtaW5mb1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZHVlLWRhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrXCIgaWQ9XCJlZGl0LXRhc2stJHt0YXNrLmlkfVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+IGVkaXQgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLXRhc2tcIiBpZD1cImRlbGV0ZS10YXNrLSR7dGFzay5pZH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiBjbG9zZSA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICApO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgZGVsZXRlLXRhc2stJHt0YXNrLmlkfWApXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVJdGVtKHRhc2suaWQpO1xuICAgICAgICAgICAgY2xlYXJUYXNrTW9kYWwoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgZWRpdC10YXNrLSR7dGFzay5pZH1gKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS50cmFjZShcImVkaXQgdGFzayFcIik7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gcmV0dXJuTm9kZUJ5SWQoXCJidXR0b24tYWRkLXRhc2tcIik7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVkaXRUYXNrTW9kYWwodGFzay5pZCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBsb2dpYy5yZXR1cm5Qcm9qZWN0KCkudGl0bGUgPT09IFwiV2Vla1wiICYmXG4gICAgICAgIGlzVGhpc1dlZWsocGFyc2VJU08odGFzay5kdWVEYXRlKSlcbiAgICAgICkge1xuICAgICAgICBjcmVhdGVFbHQoXG4gICAgICAgICAgdGFza0xpc3QsXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBcInRhc2staXRlbVwiLFxuICAgICAgICAgIGB0YXNrLWl0ZW0tJHt0YXNrLmlkfWAsXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrLWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpbyAke3Rhc2sucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1cIiBpZD1cImNvbXBsZXRlLXRhc2stJHtcbiAgICAgICAgICAgIHRhc2suaWRcbiAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4gcmFkaW9fYnV0dG9uX3VuY2hlY2tlZCA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJhc2ljLWluZm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGFza1wiIGlkPVwiZWRpdC10YXNrLSR7dGFzay5pZH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPiBlZGl0IDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS10YXNrXCIgaWQ9XCJkZWxldGUtdGFzay0ke3Rhc2suaWR9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj4gY2xvc2UgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGRlbGV0ZS10YXNrLSR7dGFzay5pZH1gKVxuICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlSXRlbSh0YXNrLmlkKTtcbiAgICAgICAgICAgIGNsZWFyVGFza01vZGFsKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYGVkaXQtdGFzay0ke3Rhc2suaWR9YClcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoXCJlZGl0IHRhc2shXCIpO1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IHJldHVybk5vZGVCeUlkKFwiYnV0dG9uLWFkZC10YXNrXCIpO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlZGl0VGFza01vZGFsKHRhc2suaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHBvcHVsYXRlVGFza0xpc3QoKTtcblxuICBmdW5jdGlvbiBlZGl0VGFza01vZGFsKHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSByZXRyaWV2ZUl0ZW0odGFza0lkKTtcbiAgICBjb25zdCB0YXNrSHRtbEVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0YXNrLWl0ZW0tJHt0YXNrSWR9YCk7XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJhZGQtdGFzay1tb2RhbFwiO1xuICAgIG1vZGFsLmlkID0gXCJhZGQtdGFzay1tb2RhbFwiO1xuXG4gICAgdGFza0h0bWxFbHQuYWZ0ZXIobW9kYWwpO1xuICAgIHRhc2tIdG1sRWx0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIC8vIGNyZWF0ZSBtb2RhbEhlYWRlclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gY3JlYXRlRWx0KFxuICAgICAgbW9kYWwsXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbC1oZWFkZXJcIixcbiAgICAgIFwiYWRkLXRhc2stbW9kYWwtaGVhZGVyXCIsXG4gICAgICBgXG4gICAgICA8aDUgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC10aXRsZVwiIGlkPVwiYWRkLXRhc2stbW9kZWwtVGl0bGVcIj5OZXcgVGFzazwvaDU+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgaWQ9XCJhZGQtdGFzay1tb2RhbC1jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgYFxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgbW9kYWxCb2R5XG4gICAgY29uc3QgbW9kYWxCb2R5ID0gY3JlYXRlRWx0KFxuICAgICAgbW9kYWwsXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbC1ib2R5XCIsXG4gICAgICBcImFkZC10YXNrLW1vZGFsLWJvZHlcIixcbiAgICAgIGA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsLXRpdGxlLWRlc2NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay1pbnB1dC10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPSR7XG4gICAgICAgICAgICAgIHRhc2sgPyB0YXNrLnRpdGxlIDogXCIgXCJcbiAgICAgICAgICAgIH0+PGJyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC1kZXNjXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY1wiPkRlc2NyaXB0aW9uOjwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZGQtdGFzay1pbnB1dC1kZXNjXCIgbmFtZVwiZGVzY1wiIHZhbHVlPSR7XG4gICAgICAgICAgICAgIHRhc2sgPyB0YXNrLmRlc2NyaXB0aW9uIDogXCIgXCJcbiAgICAgICAgICAgIH0+PGJyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsLW90aGVyLWluZm9cIiBpZD1cImFkZC10YXNrLW1vZGFsLW90aGVyLWluZm9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtZHVlLWRhdGVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+PGJyPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIiBcbiAgICAgICAgICAgICAgaWQ9XCJhZGQtdGFzay1tb2RhbC1kdWUtZGF0ZVwiIFxuICAgICAgICAgICAgICBuYW1lPVwiZHVlLWRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT0ke3Rhc2sgPyB0YXNrLmR1ZURhdGUgOiBuZXcgRGF0ZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC1wcmlvcml0eVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiYWRkLXRhc2stbW9kYWwtcHJpb3JpdHktc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPmBcbiAgICApO1xuXG4gICAgY29uc3QgbW9kYWxGb290ZXIgPSBjcmVhdGVFbHQoXG4gICAgICBtb2RhbCxcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcImFkZC10YXNrLW1vZGFsLWZvb3RlclwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbC1mb290ZXJcIixcbiAgICAgIGBcbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtY2xvc2UtYnRuXCJcbiAgICAgICAgaWQ9XCJhZGQtdGFzay1tb2RhbC1jbG9zZS1idG5cIlxuICAgICAgICA+XG4gICAgICAgIENsb3NlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzPVwidXBkYXRlLXRhc2stbW9kYWwtYWRkLWJ0blwiXG4gICAgICAgIGlkPVwidXBkYXRlLXRhc2stbW9kYWwtYWRkLWJ0blwiXG4gICAgICAgID5cbiAgICAgICAgVXBkYXRlIFRhc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stbW9kYWwtY2xvc2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrTW9kYWwpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1tb2RhbC1jbG9zZS1idG5cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrTW9kYWwpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGUtdGFzay1tb2RhbC1hZGQtYnRuXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdXBkYXRlVGFzayh0YXNrLmlkKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCB0YXNrID0gcmV0cmlldmVJdGVtKHRhc2tJZCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWlucHV0LXRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1pbnB1dC1kZXNjXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLW1vZGFsLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImFkZC10YXNrLW1vZGFsLXByaW9yaXR5LXNlbGVjdG9yXCJcbiAgICApLnZhbHVlO1xuXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcblxuICAgIHNhdmVJdGVtKHRhc2suaWQsIHRhc2spO1xuICAgIGNsZWFyVGFza01vZGFsKCk7XG4gIH1cblxuICBjb25zdCBhZGRUYXNrQnRuID0gY3JlYXRlRWx0KFxuICAgIHJldHVybk5vZGVCeUlkKFwiY29udGFpbmVyXCIpLFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJidXR0b24tYWRkLXRhc2tcIixcbiAgICBcImJ1dHRvbi1hZGQtdGFza1wiLFxuICAgIGA8cD5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgYWRkXG4gICAgICA8L3NwYW4+XG4gICAgICBBZGQgVGFza1xuICAgIDwvcD5gXG4gICk7XG5cbiAgZnVuY3Rpb24gYWRkVGFza01vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gY3JlYXRlRWx0KFxuICAgICAgcmV0dXJuTm9kZUJ5SWQoXCJjb250YWluZXJcIiksXG4gICAgICBcImRpdlwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbFwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbFwiLFxuICAgICAgXCJcIlxuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgbW9kYWxIZWFkZXJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGNyZWF0ZUVsdChcbiAgICAgIG1vZGFsLFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiYWRkLXRhc2stbW9kYWwtaGVhZGVyXCIsXG4gICAgICBcImFkZC10YXNrLW1vZGFsLWhlYWRlclwiLFxuICAgICAgYFxuICAgICAgPGg1IGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtdGl0bGVcIiBpZD1cImFkZC10YXNrLW1vZGVsLVRpdGxlXCI+TmV3IFRhc2s8L2g1PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGlkPVwiYWRkLXRhc2stbW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIGBcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIG1vZGFsQm9keVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IGNyZWF0ZUVsdChcbiAgICAgIG1vZGFsLFxuICAgICAgXCJkaXZcIixcbiAgICAgIFwiYWRkLXRhc2stbW9kYWwtYm9keVwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbC1ib2R5XCIsXG4gICAgICBgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC10aXRsZS1kZXNjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPjxicj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXRhc2staW5wdXQtdGl0bGVcIiBuYW1lPVwidGl0bGVcIj48YnI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsLWRlc2NcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjXCI+RGVzY3JpcHRpb246PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZC10YXNrLWlucHV0LWRlc2NcIiBuYW1lXCJkZXNjXCIgPjxicj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC1vdGhlci1pbmZvXCIgaWQ9XCJhZGQtdGFzay1tb2RhbC1vdGhlci1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLW1vZGFsLWR1ZS1kYXRlXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPjxicj5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgXG4gICAgICAgICAgICAgIGlkPVwiYWRkLXRhc2stbW9kYWwtZHVlLWRhdGVcIiBcbiAgICAgICAgICAgICAgbmFtZT1cImR1ZS1kYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9JHtuZXcgRGF0ZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1tb2RhbC1wcmlvcml0eVwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD48YnI+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwiYWRkLXRhc2stbW9kYWwtcHJpb3JpdHktc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPmBcbiAgICApO1xuXG4gICAgY29uc3QgbW9kYWxGb290ZXIgPSBjcmVhdGVFbHQoXG4gICAgICBtb2RhbCxcbiAgICAgIFwiZGl2XCIsXG4gICAgICBcImFkZC10YXNrLW1vZGFsLWZvb3RlclwiLFxuICAgICAgXCJhZGQtdGFzay1tb2RhbC1mb290ZXJcIixcbiAgICAgIGBcbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtY2xvc2UtYnRuXCJcbiAgICAgICAgaWQ9XCJhZGQtdGFzay1tb2RhbC1jbG9zZS1idG5cIlxuICAgICAgICA+XG4gICAgICAgIENsb3NlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzPVwiYWRkLXRhc2stbW9kYWwtYWRkLWJ0blwiXG4gICAgICAgIGlkPVwiYWRkLXRhc2stbW9kYWwtYWRkLWJ0blwiXG4gICAgICAgID5cbiAgICAgICAgQWRkIFRhc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stbW9kYWwtY2xvc2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrTW9kYWwpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1tb2RhbC1jbG9zZS1idG5cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJUYXNrTW9kYWwpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdGFzay1tb2RhbC1hZGQtYnRuXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRhc2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJUYXNrTW9kYWwoKSB7XG4gICAgY2xlYXIocmV0dXJuTm9kZUJ5SWQoXCJjb250YWluZXJcIikpO1xuICAgIGNvbnRhaW5lcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2staW5wdXQtdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10YXNrLWlucHV0LWRlc2NcIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRhc2stbW9kYWwtZHVlLWRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiYWRkLXRhc2stbW9kYWwtcHJpb3JpdHktc2VsZWN0b3JcIlxuICAgICkudmFsdWU7XG4gICAgbGV0IHByb2plY3Q7XG4gICAgaWYgKFxuICAgICAgKGxvZ2ljLnJldHVyblByb2plY3QoKS50aXRsZSA9PT0gXCJUb2RheVwiKSB8XG4gICAgICAobG9naWMucmV0dXJuUHJvamVjdCgpLnRpdGxlID09PSBcIldlZWtcIilcbiAgICApIHtcbiAgICAgIHByb2plY3QgPSBcIkluYm94XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3QgPSBsb2dpYy5yZXR1cm5Qcm9qZWN0KCkudGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICBzYXZlSXRlbSh0YXNrLmlkLCB0YXNrKTtcbiAgICBjbGVhclRhc2tNb2RhbCgpO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gcmV0dXJuTm9kZUJ5SWQoXCJidXR0b24tYWRkLXRhc2tcIik7XG4gICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYWRkVGFza01vZGFsKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsdChkb2N1bWVudC5ib2R5LCBcImRpdlwiLCBcImZvb3RlclwiLCBcImZvb3RlclwiLCBcIlwiKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbExvYWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi9tb2R1bGVzL2FwcFwiO1xuXG5hcHAoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9