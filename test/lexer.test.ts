import { expect } from "chai";
import fs from "fs";

import words from "../src/lexer/words";
import { lex, simpleCLexer } from "../src/lexer/lexer";
import { Word } from "../src/types";
import WordKinds from "../src/kinds";

describe("Lexer functions", () => {
    describe("lex()", () => {
        it("should return no tokens", () => {
            expect(lex("", words).length).to.be.equal(0);
        });

        it("should return one token", () => {
            expect(lex("=", words).length).to.be.equal(1);
        });

        it("should return several tokens", () => {
            const tks = lex("int main() { return 0; }", words);
            expect(tks.length).to.be.greaterThan(0);
        });

        it("should not find a token and return an error", () => {
            expect(lex("hello", [new Word(WordKinds.UNDEFINED, /test/)])).to.be.empty;
        });
    });

    describe("simpleCLexer()", () => {
        it("should print tokens", () => {
            expect(simpleCLexer("void main() {}")).to.be.undefined;
        });

        it("shouldnt find token", () => {
            expect(simpleCLexer("def f(a, b):")).to.be.undefined;
        });
    });

    describe("simple_add_program", () => {
        it("should return 50 tokens", () => {
            const src = fs.readFileSync("data/simple_add.c", "utf8");
            const tokens = lex(src, words);
            expect(tokens.length).to.be.equal(26);
        });
    });
});
