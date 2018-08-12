/*
Sniperkit-Bot
- Status: analyzed
*/

var esprima = require('esprima');
var escope = require('escope');

var example = "var joker = 6 * 3;";
var ast = esprima.parse(example);//, {range: true, loc:true});
var scopeManager = escope.analyze(ast);
var currentScope = scopeManager.acquire(ast);

console.log(currentScope);
