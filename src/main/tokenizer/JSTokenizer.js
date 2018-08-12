/*
Sniperkit-Bot
- Status: analyzed
*/

class Tokenizer {
    constructor(input) {
        this.fs = require('fs');
        this.escope = require('escope');
        this.esprima = require('esprima');
        this.estraverse = require('estraverse');
        this.srcCode = this.fs.readFileSync(this.filename);
        this.filename = input;
    }
    parseCode(loc, range, tokens, comment, tolerant, attachComment) {
        let abstractSyntaxTree = this.esprima.parse(this.srcCode, {
            loc, range, tokens, comment, tolerant, attachComment
        });
        return abstractSyntaxTree;
    }
    tokenize(loc, range, tokens, comment, tolerant, attachComment) {
        let toks = this.esprima.tokenize(this.srcCode, {
            loc, range, tokens, comment, tolerant, attachComment
        });
        return toks;
    }
}
