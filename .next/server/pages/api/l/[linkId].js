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
exports.id = "pages/api/l/[linkId]";
exports.ids = ["pages/api/l/[linkId]"];
exports.modules = {

/***/ "redis-om":
/*!***************************!*\
  !*** external "redis-om" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("redis-om");

/***/ }),

/***/ "(api)/./lib/redis.ts":
/*!**********************!*\
  !*** ./lib/redis.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redis-om */ \"redis-om\");\n/* harmony import */ var redis_om__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redis_om__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new redis_om__WEBPACK_IMPORTED_MODULE_0__.Client();\nclient.open(process.env.REDIS_URL);\nclient.set(\"link:test\", \"https://google.com\");\nclient.get(\"link:test\").then(console.log);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcmVkaXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBRWxDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCw0Q0FBTSxFQUFFO0FBQzNCQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0FBRW5DSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUU5Q0wsTUFBTSxDQUFDTSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztBQUUxQyxpRUFBZVQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRlci8uL2xpYi9yZWRpcy50cz81MWU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJyZWRpcy1vbVwiO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KCk7XG5jbGllbnQub3Blbihwcm9jZXNzLmVudi5SRURJU19VUkwpO1xuXG5jbGllbnQuc2V0KFwibGluazp0ZXN0XCIsIFwiaHR0cHM6Ly9nb29nbGUuY29tXCIpO1xuXG5jbGllbnQuZ2V0KFwibGluazp0ZXN0XCIpLnRoZW4oY29uc29sZS5sb2cpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiY2xpZW50Iiwib3BlbiIsInByb2Nlc3MiLCJlbnYiLCJSRURJU19VUkwiLCJzZXQiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/redis.ts\n");

/***/ }),

/***/ "(api)/./pages/api/l/[linkId].ts":
/*!*********************************!*\
  !*** ./pages/api/l/[linkId].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/redis */ \"(api)/./lib/redis.ts\");\n\nasync function handler(req, res) {\n    const { linkId  } = req.query;\n    const result = await _lib_redis__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"link:\" + linkId);\n    console.log(result);\n    res.redirect(300, result);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbC9bbGlua0lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUN3QztBQUV6QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFNUIsTUFBTUMsTUFBTSxHQUFHLE1BQU1OLHNEQUFVLENBQUMsT0FBTyxHQUFHSSxNQUFNLENBQUM7SUFDakRJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUMsQ0FBQztJQUNwQkgsR0FBRyxDQUFDTyxRQUFRLENBQUMsR0FBRyxFQUFFSixNQUFNLENBQVcsQ0FBQztDQUNyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3J0ZXIvLi9wYWdlcy9hcGkvbC9bbGlua0lkXS50cz9lYTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vLi4vbGliL3JlZGlzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgY29uc3QgeyBsaW5rSWQgfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQuZ2V0KFwibGluazpcIiArIGxpbmtJZCk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIHJlcy5yZWRpcmVjdCgzMDAsIHJlc3VsdCBhcyBzdHJpbmcpO1xufVxuIl0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJsaW5rSWQiLCJxdWVyeSIsInJlc3VsdCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/l/[linkId].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/l/[linkId].ts"));
module.exports = __webpack_exports__;

})();