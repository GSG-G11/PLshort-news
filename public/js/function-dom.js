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
