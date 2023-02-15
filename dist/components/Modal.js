"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    closeModal,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalContainer"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => closeModal(false)
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "body"
  }, children)));
}