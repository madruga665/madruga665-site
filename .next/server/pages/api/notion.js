"use strict";
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
exports.id = "pages/api/notion";
exports.ids = ["pages/api/notion"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./src/pages/api/notion.ts":
/*!*********************************!*\
  !*** ./src/pages/api/notion.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Client  } = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n// Initializing a client\nconst notion = new Client({\n    auth: process.env.NOTION_TOKEN\n});\nconst notionService = async (_req, res)=>{\n    const homePage = await notion.pages.retrieve({\n        database_id: process.env.NOTION_DATABASE_ID,\n        page_id: \"e3d05fb599c24fa98a346d67b3c9f956\"\n    });\n    res.status(200).json(homePage.properties.presentation.rich_text[0].text.content);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notionService);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25vdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxFQUFFQSxPQUFNLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsMENBQWtCO0FBRTdDLHdCQUF3QjtBQUN4QixNQUFNQyxTQUFTLElBQUlGLE9BQU87SUFDeEJHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUNoQztBQUVBLE1BQU1DLGdCQUFnQixPQUFPQyxNQUFzQkMsTUFBeUI7SUFDMUUsTUFBTUMsV0FBVyxNQUFNUixPQUFPUyxLQUFLLENBQUNDLFFBQVEsQ0FBQztRQUMzQ0MsYUFBYVQsUUFBUUMsR0FBRyxDQUFDUyxrQkFBa0I7UUFDM0NDLFNBQVM7SUFDWDtJQUNBTixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUCxTQUFTUSxVQUFVLENBQUNDLFlBQVksQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPO0FBQ2pGO0FBRUEsaUVBQWVmLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWRydWdhNjY1LXNpdGUvLi9zcmMvcGFnZXMvYXBpL25vdGlvbi50cz9hNGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCB7IENsaWVudCB9ID0gcmVxdWlyZShcIkBub3Rpb25ocS9jbGllbnRcIik7XG5cbi8vIEluaXRpYWxpemluZyBhIGNsaWVudFxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7XG4gIGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9UT0tFTixcbn0pO1xuXG5jb25zdCBub3Rpb25TZXJ2aWNlID0gYXN5bmMgKF9yZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCBob21lUGFnZSA9IGF3YWl0IG5vdGlvbi5wYWdlcy5yZXRyaWV2ZSh7XG4gICAgZGF0YWJhc2VfaWQ6IHByb2Nlc3MuZW52Lk5PVElPTl9EQVRBQkFTRV9JRCxcbiAgICBwYWdlX2lkOiAnZTNkMDVmYjU5OWMyNGZhOThhMzQ2ZDY3YjNjOWY5NTYnXG4gIH0pO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihob21lUGFnZS5wcm9wZXJ0aWVzLnByZXNlbnRhdGlvbi5yaWNoX3RleHRbMF0udGV4dC5jb250ZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vdGlvblNlcnZpY2U7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicmVxdWlyZSIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX1RPS0VOIiwibm90aW9uU2VydmljZSIsIl9yZXEiLCJyZXMiLCJob21lUGFnZSIsInBhZ2VzIiwicmV0cmlldmUiLCJkYXRhYmFzZV9pZCIsIk5PVElPTl9EQVRBQkFTRV9JRCIsInBhZ2VfaWQiLCJzdGF0dXMiLCJqc29uIiwicHJvcGVydGllcyIsInByZXNlbnRhdGlvbiIsInJpY2hfdGV4dCIsInRleHQiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/notion.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/notion.ts"));
module.exports = __webpack_exports__;

})();