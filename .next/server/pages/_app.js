/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"300\",\"800\"]}],\"variableName\":\"inter\"}":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/font/google/target.css?{"path":"src/pages/_app.tsx","import":"Poppins","arguments":[{"subsets":["latin"],"weight":["100","300","800"]}],"variableName":"inter"} ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Poppins_9e8081', '__Poppins_Fallback_9e8081'\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_9e8081\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9mb250L2dvb2dsZS90YXJnZXQuY3NzP3tcInBhdGhcIjpcInNyYy9wYWdlcy9fYXBwLnRzeFwiLFwiaW1wb3J0XCI6XCJQb3BwaW5zXCIsXCJhcmd1bWVudHNcIjpbe1wic3Vic2V0c1wiOltcImxhdGluXCJdLFwid2VpZ2h0XCI6W1wiMTAwXCIsXCIzMDBcIixcIjgwMFwiXX1dLFwidmFyaWFibGVOYW1lXCI6XCJpbnRlclwifS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsV0FBVyxvRkFBb0Y7QUFDL0Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hZHJ1Z2E2NjUtc2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/M2Q0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdHlsZVwiOiB7XCJmb250RmFtaWx5XCI6XCInX19Qb3BwaW5zXzllODA4MScsICdfX1BvcHBpbnNfRmFsbGJhY2tfOWU4MDgxJ1wiLFwiZm9udFN0eWxlXCI6XCJub3JtYWxcIn0sXG5cdFwiY2xhc3NOYW1lXCI6IFwiX19jbGFzc05hbWVfOWU4MDgxXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"300\",\"800\"]}],\"variableName\":\"inter\"}\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Poppins_arguments_subsets_latin_weight_100_300_800_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/pages/_app.tsx\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"300\",\"800\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/pages/_app.tsx\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"300\\\",\\\"800\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Poppins_arguments_subsets_latin_weight_100_300_800_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Poppins_arguments_subsets_latin_weight_100_300_800_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (next_font_google_target_css_path_src_pages_app_tsx_import_Poppins_arguments_subsets_latin_weight_100_300_800_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/madruga665/Github/madruga665-site/src/pages/_app.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/madruga665/Github/madruga665-site/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLTUE7QUFIeUI7QUFRaEIsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXTCxtTEFBZTtrQkFDOUIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hZHJ1Z2E2NjUtc2l0ZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFBvcHBpbnMgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XG5cbi8vIElmIGxvYWRpbmcgYSB2YXJpYWJsZSBmb250LCB5b3UgZG9uJ3QgbmVlZCB0byBzcGVjaWZ5IHRoZSBmb250IHdlaWdodFxuY29uc3QgaW50ZXIgPSBQb3BwaW5zKHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHdlaWdodDogW1wiMTAwXCIsIFwiMzAwXCIsIFwiODAwXCJdLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();