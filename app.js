"use strict";

/// Simple DOM Selectors
///
/// @author: Kareem Aboueid
/// @version: 1.0.0

// get a single element:
const get = q => {
    const element = document.querySelectorAll(q);
    if (element.length > 1) {
        return element[0];
    } else if (element.length === 1) {
        return element;
    } else {
        throw new Error(`Element not found "${q}"`);
    }
};

// get an array of elements:
const getAll = q => {
    const elements = document.querySelectorAll(q);
    if (elements.length > 1) {
        return elements;
    } else if (elements.length === 1) {
        throw new Error(`NodeList not found "${q}"\n \tUse get() to fix it.`);
    } else {
        throw new Error(`Element not found "${q}"`);
    }
};

console.log(get("#sum"));
console.log(getAll("#sum"));
console.log("-------------------------------------------");
console.log(getAll("#text"));
