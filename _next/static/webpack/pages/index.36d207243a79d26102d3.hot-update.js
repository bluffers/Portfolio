self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0f1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", ";}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref) {
  var _final = _ref["final"];
  return _final ? "120%;" : "min-content";
});
var CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0f1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0e131f;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.active === props.index ? "opacity: 1" : "opacity: 0.5";
});
var CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#ffffff 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], function (props) {
  return props.active === props.index ? "1" : ".33";
}, function (props) {
  return props.active === props.index ? "scale(1.6)" : "scale(1)";
});
var CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWxDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsImZpbmFsIiwiQ2Fyb3VzZWxJdGVtIiwibWQiLCJhY3RpdmUiLCJpbmRleCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0Msb0VBQUg7QUFBQTtBQUFBO0FBQUEsNFlBa0JwQixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FsQm9CLENBQXZCO0FBMkJBLElBQU1DLHdCQUF3QixHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrREFDM0IsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBRDJCLEVBR3RCO0FBQUEsTUFBR0UsTUFBSDtBQUFBLFNBQWdCQSxNQUFLLDBCQUFyQjtBQUFBLENBSHNCLENBQTlCO0FBT0EsSUFBTUMsWUFBWSxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxpU0FJZixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JLLEVBQW5DO0FBQUEsQ0FKZSxFQVFmLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJlLEVBb0JyQixVQUFDSCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDUSxNQUFOLEtBQWlCUixLQUFLLENBQUNTLEtBQXZCLGdDQUFaO0FBQUEsQ0FwQnFCLENBQWxCO0FBd0JBLElBQU1DLGlCQUFpQixHQUFHWCxvRUFBSDtBQUFBO0FBQUE7QUFBQSw0V0FXcEIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSyxFQUFuQztBQUFBLENBWG9CLEVBaUJwQixVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FqQm9CLENBQXZCO0FBc0JBLElBQU1RLGVBQWUsR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEscUxBSWxCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUprQixDQUFyQjtBQVdBLElBQU1TLGdCQUFnQixHQUFHYixtRUFBSDtBQUFBO0FBQUE7QUFBQSw0T0FNbkIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSyxFQUFuQztBQUFBLENBTm1CLEVBV25CLFVBQUNQLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVhtQixDQUF0QjtBQWlCQSxJQUFNVSxlQUFlLEdBQUdkLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQUlsQixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FKa0IsQ0FBckI7QUFXQSxJQUFNVyxjQUFjLEdBQUdmLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHlKQU9mLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNRLE1BQU4sS0FBaUJSLEtBQUssQ0FBQ1MsS0FBdkIsY0FBWjtBQUFBLENBUGUsRUFRYixVQUFDVCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDUSxNQUFOLEtBQWlCUixLQUFLLENBQUNTLEtBQXZCLDRCQUFaO0FBQUEsQ0FSYSxDQUFwQjtBQWNBLElBQU1NLGlCQUFpQixHQUFHaEIscUVBQUg7QUFBQTtBQUFBO0FBQUEsbUZBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2ZDIwNzI0M2E3OWQyNjEwMmQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLnVsYFxuXHRtYXgtd2lkdGg6IDEwNDBweDtcblx0YmFja2dyb3VuZDogIzBmMTYyNDtcblx0cGFkZGluZzogMHJlbTtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHQvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG5cdG1hcmdpbi1sZWZ0OiAzMnB4O1xuXHQmOmZpcnN0LW9mLXR5cGUge1xuXHRcdG1hcmdpbi1sZWZ0OiAwcHg7XG5cdH1cblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0Ly9yZW1vdmUgc2Nyb2xsYmFyXG5cdHNjcm9sbGJhci13aWR0aDogbm9uZTtcblx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdG92ZXJmbG93LXg6IHNjcm9sbDtcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cdFx0c2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG5cdFx0dG91Y2gtYWN0aW9uOiBwYW4teDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHR9XG5gO1xuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1pbi13aWR0aDogJHsoeyBmaW5hbCB9KSA9PiAoZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YCl9O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZDogIzBmMTYyNDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRtYXgtd2lkdGg6IDE5NnB4O1xuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG5cdFx0bWF4LXdpZHRoOiAxMjRweDtcblx0fVxuXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRtYXJnaW4tbGVmdDogMzJweDtcblx0XHRtaW4td2lkdGg6IDEyMHB4O1xuXHRcdGJhY2tncm91bmQ6ICMwZTEzMWY7XG5cdFx0cGFkZGluZzogNHB4O1xuXHRcdGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xuXHRcdHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGhlaWdodDogZml0LWNvbnRlbnQ7XG5cblx0XHQkeyhwcm9wcykgPT4gKHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgb3BhY2l0eTogMWAgOiBgb3BhY2l0eTogMC41YCl9O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNmZmZmZmYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDMwLjE1JSk7XG5cdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHQtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdG1hcmdpbi1ib3R0b206IDhweDtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRtYXJnaW4tYm90dG9tOiA0cHg7XG5cdH1cblxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHR9XG5gO1xuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXG5cdG1hcmdpbi1sZWZ0OiAyMXB4O1xuXHQtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG5cdHdpZHRoOiAxMDAlO1xuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0LXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xuXHRcdG1hcmdpbi1sZWZ0OiAxNnB4O1xuXHRcdG92ZXJmbG93OiB2aXNpYmxlO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGV4dCA9IHN0eWxlZC5wYFxuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0cGFkZGluZy1yaWdodDogMTZweDtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsaW5lLWhlaWdodDogMThweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuXHR9XG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE2cHg7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxuYDtcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMjg4cHg7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0XHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRwYWRkaW5nOiA0cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW4tcmlnaHQ6IDRweDtcblx0b3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2ApfTtcblx0dHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gKHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgKX07XG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbkRvdCA9IHN0eWxlZC5kaXZgXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRtYXJnaW46IGF1dG87XG5cdHdpZHRoOiAzcHg7XG5cdGhlaWdodDogM3B4O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=