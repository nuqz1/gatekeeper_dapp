// ==UserScript==
// @name         Civic Generator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:3000/?*
// @match        https://passv2.civic.com/*
// @icon         https://www.google.com/s2/favicons?domain=undefined.localhost
// @grant        none
// ==/UserScript==


var nuqzrefresh1 = setInterval(function () {document.getElementsByClassName("sc-gsDKAQ WWuu")[0].click();}, 300);
var nuqzrefresh2 = setInterval(function () {document.getElementsByClassName("civic-button relative w-auto wide:w-full flex items-center justify-center font-bold py-3 px-10 rounded-lg transition disabled:cursor-auto bg-white rounded-full w-1/2 min-w-full border border-transparent hover:bg-civicLightGray-light focus:bg-civicLightGray-light active:bg-civicLightGray-lightish active:border-civicBlue-lighter disabled:bg-gray-400 text-civicBlue-dark  mb-2")[0].click();}, 300);
var nuqzrefresh3 = setInterval(function () {document.getElementsByClassName("civic-button relative w-auto wide:w-full flex items-center justify-center font-bold py-3 px-10 rounded-lg transition disabled:cursor-auto bg-white rounded-full w-1/2 min-w-full border border-transparent hover:bg-civicLightGray-light focus:bg-civicLightGray-light active:bg-civicLightGray-lightish active:border-civicBlue-lighter disabled:bg-gray-400 text-civicBlue-dark  ")[0].click();}, 300);


function check() {
    var elements = document.getElementsByTagName("*");
    for (var i=0; i < elements.length; i++)
    {
        if (elements[i].matches('[type="checkbox"]')) {
            if (!elements[i].checked) {
                elements[i].click()
            }
        };
    }
};

var intervalId = window.setInterval(function() {check();}, 300);


