self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212d45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#ffffff;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;}@media ", "{font-size:10px;line-height:14px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Join = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;}@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], function (props) {
  return props.theme.breakpoints.sm;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHNTdHlsZXMuanMiXSwibmFtZXMiOlsiQm94ZXMiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiQm94IiwibGciLCJCb3hOdW0iLCJCb3hUZXh0IiwiSm9pbiIsIkpvaW5UZXh0IiwiSWNvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxLQUFLLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJTQU1SLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQU5RLEVBV1IsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBWFEsQ0FBWDtBQW9CQSxJQUFNQyxHQUFHLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZNQUtOLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkksRUFBbkM7QUFBQSxDQUxNLEVBUU4sVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUk0sRUFZTixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FaTSxDQUFUO0FBcUJBLElBQU1HLE1BQU0sR0FBR1Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsMk5BUVQsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUlMsRUFZVCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FaUyxDQUFaO0FBa0JBLElBQU1JLE9BQU8sR0FBR1QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BT1YsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUFUsRUFXVixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FYVSxDQUFiO0FBaUJBLElBQU1LLElBQUksR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEsaVFBTVAsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTk8sRUFXUCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FYTyxDQUFWO0FBbUJBLElBQU1NLFFBQVEsR0FBR1gsb0VBQUg7QUFBQTtBQUFBO0FBQUEsa05BTVgsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTlcsRUFVWCxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FWVyxDQUFkO0FBaUJBLElBQU1PLGFBQWEsR0FBR1oscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkVBRWhCLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQUZnQixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOGIyOGNhZTNhN2UxZGU1ZjBhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBCb3hlcyA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuXHRnYXA6IDI0cHg7XG5cdG1hcmdpbjogMjRweCAwIDQwcHg7XG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcblx0XHRnYXA6IDE2cHg7XG5cdFx0bWFyZ2luOiAyMHB4IDAgMzJweDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE0MHB4LCAxZnIpKTtcblx0fVxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuXHRcdGdhcDogMTBweDtcblx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdG1hcmdpbjogMjRweCBhdXRvO1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcblx0YmFja2dyb3VuZDogIzIxMmQ0NTtcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcblx0aGVpZ2h0OiAxNDRweDtcblx0cGFkZGluZzogMjRweDtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xuXHRcdGhlaWdodDogMjEwcHg7XG5cdH1cblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGhlaWdodDogMTM1cHg7XG5cdFx0cGFkZGluZzogMTZweDtcblx0fVxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0aGVpZ2h0OiAxMTBweDtcblx0XHRwYWRkaW5nOiAxMnB4O1xuXG5cdFx0JjpudGgtY2hpbGQoMm4pIHtcblx0XHRcdGdyaWQtcm93OiAyO1xuXHRcdH1cblx0fVxuYDtcbmV4cG9ydCBjb25zdCBCb3hOdW0gPSBzdHlsZWQuaDVgXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRsaW5lLWhlaWdodDogNDBweDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblx0Y29sb3I6ICNmZmZmZmY7XG5cdG1hcmdpbi1ib3R0b206IDhweDtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0fVxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgQm94VGV4dCA9IHN0eWxlZC5wYFxuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHR9XG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRmb250LXNpemU6IDEwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE0cHg7XG5cdH1cbmA7XG5cbmV4cG9ydCBjb25zdCBKb2luID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0bWF4LXdpZHRoOiAxMDQwcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nLWJvdHRvbTogODBweDtcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1ib3R0b206IDY0cHg7XG5cdH1cblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdHBhZGRpbmctYm90dG9tOiAzMnB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgSm9pblRleHQgPSBzdHlsZWQuaDVgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcblx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdH1cblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRtYXJnaW46IDAgMCAxNnB4O1xuXHR9XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHR3aWR0aDogMTYwcHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==