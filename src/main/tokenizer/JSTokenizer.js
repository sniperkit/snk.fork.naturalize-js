// Essential modules:
var fs = require('fs');
var escope = require('escope');
var esprima = require('esprima');
var estraverse = require('estraverse');

// for testing only using CLI directly:
var filename = process.argv[2]; // need to change the interface when using grunt

// read the file into the file system
var srcCode = fs.readFileSync(filename);

//Whats the difference between parse and tokenise?
//TODO: which one should we use?
var abstractSyntaxTree = esprima.parse(srcCode, {
  loc: true,
  range: true,
  tokens: true
});

var tokens = esprima.tokenize(srcCode, {
  // listing all the possible options
  loc: true,
  range: true,
  tokens: true,
  comment: true,
  tolerant: false,
  attachComment: false
});

// output the ast and tokens:
// console.log(JSON.stringify(abstractSyntaxTree, null, 4));
// console.log(JSON.stringify(tokens, null, 2));


// Here do some scope analysis
// TODO: Scope analysis (play with escope)
var scopeManager = escope.analyze(abstractSyntaxTree);

console.log(scopeManager);
