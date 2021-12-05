/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/mail-script.js":
/*!*************************************!*\
  !*** ./resources/js/mail-script.js ***!
  \*************************************/
/***/ (() => {

eval("// -------   Mail Send ajax\n$(document).ready(function () {\n  var form = $('#myForm'); // contact form\n\n  var submit = $('.submit-btn'); // submit button\n\n  var alert = $('.alert-msg'); // alert div for show alert message\n  // form submit event\n\n  form.on('submit', function (e) {\n    e.preventDefault(); // prevent default form submit\n\n    $.ajax({\n      url: 'mail.php',\n      // form action url\n      type: 'POST',\n      // form submit method get/post\n      dataType: 'html',\n      // request type html/json/xml\n      data: form.serialize(),\n      // serialize form data\n      beforeSend: function beforeSend() {\n        alert.fadeOut();\n        submit.html('Sending....'); // change submit button text\n      },\n      success: function success(data) {\n        alert.html(data).fadeIn(); // fade in response data\n\n        form.trigger('reset'); // reset form\n\n        submit.attr(\"style\", \"display: none !important\");\n        ; // reset submit button text\n      },\n      error: function error(e) {\n        console.log(e);\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWFpbC1zY3JpcHQuanM/MDZhYyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZvcm0iLCJzdWJtaXQiLCJhbGVydCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsImRhdGEiLCJzZXJpYWxpemUiLCJiZWZvcmVTZW5kIiwiZmFkZU91dCIsImh0bWwiLCJzdWNjZXNzIiwiZmFkZUluIiwidHJpZ2dlciIsImF0dHIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFJO0FBRUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixNQUFJQyxJQUFJLEdBQUdILENBQUMsQ0FBQyxTQUFELENBQVosQ0FEeUIsQ0FDQTs7QUFDekIsTUFBSUksTUFBTSxHQUFHSixDQUFDLENBQUMsYUFBRCxDQUFkLENBRnlCLENBRU07O0FBQy9CLE1BQUlLLEtBQUssR0FBR0wsQ0FBQyxDQUFDLFlBQUQsQ0FBYixDQUh5QixDQUdJO0FBRTdCOztBQUNBRyxFQUFBQSxJQUFJLENBQUNHLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFVBQVNDLENBQVQsRUFBWTtBQUMxQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRDBCLENBQ047O0FBRXBCUixJQUFBQSxDQUFDLENBQUNTLElBQUYsQ0FBTztBQUNIQyxNQUFBQSxHQUFHLEVBQUUsVUFERjtBQUNjO0FBQ2pCQyxNQUFBQSxJQUFJLEVBQUUsTUFGSDtBQUVXO0FBQ2RDLE1BQUFBLFFBQVEsRUFBRSxNQUhQO0FBR2U7QUFDbEJDLE1BQUFBLElBQUksRUFBRVYsSUFBSSxDQUFDVyxTQUFMLEVBSkg7QUFJcUI7QUFDeEJDLE1BQUFBLFVBQVUsRUFBRSxzQkFBVztBQUNuQlYsUUFBQUEsS0FBSyxDQUFDVyxPQUFOO0FBQ0FaLFFBQUFBLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZLGFBQVosRUFGbUIsQ0FFUztBQUMvQixPQVJFO0FBU0hDLE1BQUFBLE9BQU8sRUFBRSxpQkFBU0wsSUFBVCxFQUFlO0FBQ3BCUixRQUFBQSxLQUFLLENBQUNZLElBQU4sQ0FBV0osSUFBWCxFQUFpQk0sTUFBakIsR0FEb0IsQ0FDTzs7QUFDM0JoQixRQUFBQSxJQUFJLENBQUNpQixPQUFMLENBQWEsT0FBYixFQUZvQixDQUVHOztBQUN2QmhCLFFBQUFBLE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWSxPQUFaLEVBQXFCLDBCQUFyQjtBQUFpRCxTQUg3QixDQUcrQjtBQUN0RCxPQWJFO0FBY0hDLE1BQUFBLEtBQUssRUFBRSxlQUFTZixDQUFULEVBQVk7QUFDZmdCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsQ0FBWjtBQUNIO0FBaEJFLEtBQVA7QUFrQkgsR0FyQkQ7QUFzQkgsQ0E1QkQiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLy8gLS0tLS0tLSAgIE1haWwgU2VuZCBhamF4XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGZvcm0gPSAkKCcjbXlGb3JtJyk7IC8vIGNvbnRhY3QgZm9ybVxyXG4gICAgICAgIHZhciBzdWJtaXQgPSAkKCcuc3VibWl0LWJ0bicpOyAvLyBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgdmFyIGFsZXJ0ID0gJCgnLmFsZXJ0LW1zZycpOyAvLyBhbGVydCBkaXYgZm9yIHNob3cgYWxlcnQgbWVzc2FnZVxyXG5cclxuICAgICAgICAvLyBmb3JtIHN1Ym1pdCBldmVudFxyXG4gICAgICAgIGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXRcclxuXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdtYWlsLnBocCcsIC8vIGZvcm0gYWN0aW9uIHVybFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLCAvLyBmb3JtIHN1Ym1pdCBtZXRob2QgZ2V0L3Bvc3RcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnaHRtbCcsIC8vIHJlcXVlc3QgdHlwZSBodG1sL2pzb24veG1sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpLCAvLyBzZXJpYWxpemUgZm9ybSBkYXRhXHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0Lmh0bWwoJ1NlbmRpbmcuLi4uJyk7IC8vIGNoYW5nZSBzdWJtaXQgYnV0dG9uIHRleHRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQuaHRtbChkYXRhKS5mYWRlSW4oKTsgLy8gZmFkZSBpbiByZXNwb25zZSBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS50cmlnZ2VyKCdyZXNldCcpOyAvLyByZXNldCBmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0LmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFwiKTs7IC8vIHJlc2V0IHN1Ym1pdCBidXR0b24gdGV4dFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21haWwtc2NyaXB0LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/mail-script.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/mail-script.js"]();
/******/ 	
/******/ })()
;