import { expect, util } from "chai";

import words from "../src/words";
import { lex, simpleCLexer } from "../src/lexer";
import { Word } from "../src/types";

describe("Lexer functions", () => {
    it("lex should return no tokens", () => {
        expect(lex("", words).length).to.be.equal(0);
    });

    it("lex should return one token", () => {
        expect(lex("if", words).length).to.be.equal(1);
    });

    it("lex should return several tokens", () => {
        const tks = lex("def f(a, b):", words);
        expect(tks.length).to.be.greaterThan(0);
    });

    it("lex should not find a token and return an error", () => {
        expect(lex("hello", [new Word("test", /test/)])).to.be.empty;
    });

    it("simpleCLexer should print tokens", () => {
        expect(simpleCLexer("void main() {}")).to.be.undefined;
    });

    it("simpleCLexer shouldnt find token", () => {
        expect(simpleCLexer("def f(a, b):")).to.be.undefined;
    });
});
