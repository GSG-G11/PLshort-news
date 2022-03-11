/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ----- Helper Selector ---------------
const querySelector = (selector) => document.querySelector(selector);
const querySelectorAll = (selector) => document.querySelectorAll(selector);

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};

const addListener = (selector, eventName, callback) => {
  querySelector(selector).addEventListener(eventName, callback);
};

const handleError = (id, errorId, message) => {
  const label = querySelector(id);
  const errorText = createElement('p', 'error', label);
  errorText.id = `${errorId}`;
  errorText.textContent = message;
};

const removeHandleError = (id) => {
  const errorText = querySelector(id);
  if (typeof errorText !== undefined && errorText !== null) {
    errorText.remove();
  }
};
