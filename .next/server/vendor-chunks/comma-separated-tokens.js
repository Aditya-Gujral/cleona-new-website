"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(rsc)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.parse = parse\nexports.stringify = stringify\n\nvar comma = ','\nvar space = ' '\nvar empty = ''\n\n// Parse comma-separated tokens to an array.\nfunction parse(value) {\n  var values = []\n  var input = String(value || empty)\n  var index = input.indexOf(comma)\n  var lastIndex = 0\n  var end = false\n  var val\n\n  while (!end) {\n    if (index === -1) {\n      index = input.length\n      end = true\n    }\n\n    val = input.slice(lastIndex, index).trim()\n\n    if (val || !end) {\n      values.push(val)\n    }\n\n    lastIndex = index + 1\n    index = input.indexOf(comma, lastIndex)\n  }\n\n  return values\n}\n\n// Compile an array to comma-separated tokens.\n// `options.padLeft` (default: `true`) pads a space left of each token, and\n// `options.padRight` (default: `false`) pads a space to the right of each token.\nfunction stringify(values, options) {\n  var settings = options || {}\n  var left = settings.padLeft === false ? empty : space\n  var right = settings.padRight ? space : empty\n\n  // Ensure the last empty entry is seen.\n  if (values[values.length - 1] === empty) {\n    values = values.concat(empty)\n  }\n\n  return values.join(right + comma + left).trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWixhQUFhO0FBQ2IsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vbm9kZV9tb2R1bGVzL2NvbW1hLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanM/YzZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgY29tbWEgPSAnLCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVtcHR5ID0gJydcblxuLy8gUGFyc2UgY29tbWEtc2VwYXJhdGVkIHRva2VucyB0byBhbiBhcnJheS5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpXG4gIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEpXG4gIHZhciBsYXN0SW5kZXggPSAwXG4gIHZhciBlbmQgPSBmYWxzZVxuICB2YXIgdmFsXG5cbiAgd2hpbGUgKCFlbmQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGlucHV0Lmxlbmd0aFxuICAgICAgZW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIHZhbCA9IGlucHV0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpLnRyaW0oKVxuXG4gICAgaWYgKHZhbCB8fCAhZW5kKSB7XG4gICAgICB2YWx1ZXMucHVzaCh2YWwpXG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hLCBsYXN0SW5kZXgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzXG59XG5cbi8vIENvbXBpbGUgYW4gYXJyYXkgdG8gY29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbi8vIGBvcHRpb25zLnBhZExlZnRgIChkZWZhdWx0OiBgdHJ1ZWApIHBhZHMgYSBzcGFjZSBsZWZ0IG9mIGVhY2ggdG9rZW4sIGFuZFxuLy8gYG9wdGlvbnMucGFkUmlnaHRgIChkZWZhdWx0OiBgZmFsc2VgKSBwYWRzIGEgc3BhY2UgdG8gdGhlIHJpZ2h0IG9mIGVhY2ggdG9rZW4uXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGxlZnQgPSBzZXR0aW5ncy5wYWRMZWZ0ID09PSBmYWxzZSA/IGVtcHR5IDogc3BhY2VcbiAgdmFyIHJpZ2h0ID0gc2V0dGluZ3MucGFkUmlnaHQgPyBzcGFjZSA6IGVtcHR5XG5cbiAgLy8gRW5zdXJlIHRoZSBsYXN0IGVtcHR5IGVudHJ5IGlzIHNlZW4uXG4gIGlmICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSBlbXB0eSkge1xuICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoZW1wdHkpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4ocmlnaHQgKyBjb21tYSArIGxlZnQpLnRyaW0oKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;