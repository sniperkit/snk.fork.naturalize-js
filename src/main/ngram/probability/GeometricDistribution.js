/*
Sniperkit-Bot
- Status: analyzed
*/

"use strict";
var Math = require('math');
var GeometricDistriubtion = (function () {
    function GeometricDistriubtion() {
    }
    GeometricDistriubtion.prototype.getLog2Prob = function (x, p) {
        var logP = Math.log2(x);
    };
    return GeometricDistriubtion;
}());
