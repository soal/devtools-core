/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// ReactJS
const React = require("react");

// Reps
const {
  isGrip,
  getURLDisplayString,
  wrapRender
} = require("./rep-utils");

// Shortcuts
const {span} = React.DOM;

/**
 * Renders a grip representing CSSStyleSheet
 */
StyleSheet.propTypes = {
  object: React.PropTypes.object.isRequired,
};

function StyleSheet(props) {
  let grip = props.object;

  return (
    span({
      "data-link-actor-id": grip.actor,
      className: "objectBox objectBox-object",
    },
      getTitle(grip),
      span({className: "objectPropValue"}, getLocation(grip))
    )
  );
}

function getTitle(grip) {
  let title = "StyleSheet ";
  return span({className: "objectBoxTitle"}, title);
}

function getLocation(grip) {
  // Embedded stylesheets don't have URL and so, no preview.
  let url = grip.preview ? grip.preview.url : "";
  return url ? getURLDisplayString(url) : "";
}

// Registration
function supportsObject(object, type, noGrip = false) {
  if (noGrip === true || !isGrip(object)) {
    return false;
  }

  return (type == "CSSStyleSheet");
}

// Exports from this module

module.exports = {
  rep: wrapRender(StyleSheet),
  supportsObject,
};
