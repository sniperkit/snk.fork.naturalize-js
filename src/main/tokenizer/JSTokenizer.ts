declare function require(name:string);

// define a tokenizer class
class Tokenizer {

    fs = require('fs');
    escope = require('escope');
    esprima = require('esprima');
    estraverse = require('estraverse');
    filename:string;

    // pass the filename into the tokenizer
    constructor(input:string){
      this.filename = input;
    }

    // read the file into file system, parse it as srcCode
    srcCode = this.fs.readFileSync(this.filename);

    // function to parse the input file using esprima
    parseCode(loc:boolean, range: boolean,
              tokens: boolean,comment:boolean,
              tolerant:boolean, attachComment:boolean) {

                // now, use esprima to parse the srcCode
                let abstractSyntaxTree = this.esprima.parse(this.srcCode, {
                  loc, range, tokens, comment, tolerant, attachComment
              })

                // output
                return abstractSyntaxTree;

    }

    tokenize(loc:boolean, range: boolean,
              tokens: boolean,comment:boolean,
              tolerant:boolean, attachComment:boolean){

                // now, use esprima to tokenize the srcCode
                let toks = this.esprima.tokenize(this.srcCode, {
                  loc, range, tokens, comment, tolerant, attachComment
                })

                // output
                return toks;
              }

}


// output the ast and tokens:
// console.log(JSON.stringify(abstractSyntaxTree, null, 4));
// console.log(JSON.stringify(tokens, null, 2));


// Here do some scope analysis
// TODO: Scope analysis (play with escope)
// var scopeManager = escope.analyze(abstractSyntaxTree);

// console.log(scopeManager);
