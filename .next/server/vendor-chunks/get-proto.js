"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-proto";
exports.ids = ["vendor-chunks/get-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(action-browser)/./node_modules/es-object-atoms/index.js\");\n/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vT2JqZWN0LmdldFByb3RvdHlwZU9mLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsVUFBVUMsbUJBQU9BLENBQUM7QUFFdEIsOENBQThDLEdBQzlDQyxPQUFPQyxPQUFPLEdBQUdILFFBQVFJLGNBQWMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbXktcmVhbC1lc3RhdGUvLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL09iamVjdC5nZXRQcm90b3R5cGVPZi5qcz9mYjM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyICRPYmplY3QgPSByZXF1aXJlKCdlcy1vYmplY3QtYXRvbXMnKTtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vT2JqZWN0LmdldFByb3RvdHlwZU9mJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9ICRPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgbnVsbDtcbiJdLCJuYW1lcyI6WyIkT2JqZWN0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRQcm90b3R5cGVPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== \"undefined\" && Reflect.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLCtDQUErQyxHQUMvQ0EsT0FBT0MsT0FBTyxHQUFHLE9BQVFDLFlBQVksZUFBZUEsUUFBUUMsY0FBYyxJQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9teS1yZWFsLWVzdGF0ZS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcz8zYjI1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vUmVmbGVjdC5nZXRQcm90b3R5cGVPZicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSAodHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YpIHx8IG51bGw7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlJlZmxlY3QiLCJnZXRQcm90b3R5cGVPZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\");\nvar originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\");\nvar getDunderProto = __webpack_require__(/*! dunder-proto/get */ \"(action-browser)/./node_modules/dunder-proto/get.js\");\n/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return reflectGetProto(O);\n} : originalGetProto ? function getProto(O) {\n    if (!O || typeof O !== \"object\" && typeof O !== \"function\") {\n        throw new TypeError(\"getProto: not an object\");\n    }\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return originalGetProto(O);\n} : getDunderProto ? function getProto(O) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return getDunderProto(O);\n} : null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxrQkFBa0JDLG1CQUFPQSxDQUFDO0FBQzlCLElBQUlDLG1CQUFtQkQsbUJBQU9BLENBQUM7QUFFL0IsSUFBSUUsaUJBQWlCRixtQkFBT0EsQ0FBQztBQUU3Qix3QkFBd0IsR0FDeEJHLE9BQU9DLE9BQU8sR0FBR0wsa0JBQ2QsU0FBU00sU0FBU0MsQ0FBQztJQUNwQixxRUFBcUU7SUFDckUsT0FBT1AsZ0JBQWdCTztBQUN4QixJQUNFTCxtQkFDQyxTQUFTSSxTQUFTQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0EsS0FBTSxPQUFPQSxNQUFNLFlBQVksT0FBT0EsTUFBTSxZQUFhO1FBQzdELE1BQU0sSUFBSUMsVUFBVTtJQUNyQjtJQUNBLHFFQUFxRTtJQUNyRSxPQUFPTixpQkFBaUJLO0FBQ3pCLElBQ0VKLGlCQUNDLFNBQVNHLFNBQVNDLENBQUM7SUFDcEIscUVBQXFFO0lBQ3JFLE9BQU9KLGVBQWVJO0FBQ3ZCLElBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob215LXJlYWwtZXN0YXRlLy4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9pbmRleC5qcz81YTEzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZmxlY3RHZXRQcm90byA9IHJlcXVpcmUoJy4vUmVmbGVjdC5nZXRQcm90b3R5cGVPZicpO1xudmFyIG9yaWdpbmFsR2V0UHJvdG8gPSByZXF1aXJlKCcuL09iamVjdC5nZXRQcm90b3R5cGVPZicpO1xuXG52YXIgZ2V0RHVuZGVyUHJvdG8gPSByZXF1aXJlKCdkdW5kZXItcHJvdG8vZ2V0Jyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RHZXRQcm90b1xuXHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRyZXR1cm4gcmVmbGVjdEdldFByb3RvKE8pO1xuXHR9XG5cdDogb3JpZ2luYWxHZXRQcm90b1xuXHRcdD8gZnVuY3Rpb24gZ2V0UHJvdG8oTykge1xuXHRcdFx0aWYgKCFPIHx8ICh0eXBlb2YgTyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIE8gIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldFByb3RvOiBub3QgYW4gb2JqZWN0Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRcdHJldHVybiBvcmlnaW5hbEdldFByb3RvKE8pO1xuXHRcdH1cblx0XHQ6IGdldER1bmRlclByb3RvXG5cdFx0XHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBuYXJyb3cgaW5zaWRlIGEgY2xvc3VyZSwgZm9yIHNvbWUgcmVhc29uXG5cdFx0XHRcdHJldHVybiBnZXREdW5kZXJQcm90byhPKTtcblx0XHRcdH1cblx0XHRcdDogbnVsbDtcbiJdLCJuYW1lcyI6WyJyZWZsZWN0R2V0UHJvdG8iLCJyZXF1aXJlIiwib3JpZ2luYWxHZXRQcm90byIsImdldER1bmRlclByb3RvIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFByb3RvIiwiTyIsIlR5cGVFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/index.js\n");

/***/ })

};
;