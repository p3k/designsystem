/**
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Code generated by @carbon/icon-build-helpers. DO NOT EDIT.
 */
import { _ as _objectWithoutProperties, I as Icon, a as _extends } from '../Icon-a8cbe70a.js';
import React from 'react';
import '@carbon/icon-helpers';
import 'prop-types';

var _path;

var _excluded = ["children"];
var didWarnAboutDeprecation = false;
var Workspace24 = /*#__PURE__*/React.forwardRef(function Workspace24(_ref, ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnAboutDeprecation) {
      didWarnAboutDeprecation = true;
      console.warn("The Workspace24 component has been deprecated and will be " + "removed in the next major version of @carbon/icons-react.");
    }
  }

  return /*#__PURE__*/React.createElement(Icon, _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    ref: ref
  }, rest), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M16 17v8H6V17H16m0-2H6a2 2 0 00-2 2v8a2 2 0 002 2H16a2 2 0 002-2V17a2 2 0 00-2-2zM27 6v5H17V6H27m0-2H17a2 2 0 00-2 2v5a2 2 0 002 2H27a2 2 0 002-2V6a2 2 0 00-2-2zM27 17v5H22V17h5m0-2H22a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2V17a2 2 0 00-2-2zM11 6v5H6V6h5m0-2H6A2 2 0 004 6v5a2 2 0 002 2h5a2 2 0 002-2V6a2 2 0 00-2-2z"
  })), children);
});

export default Workspace24;
