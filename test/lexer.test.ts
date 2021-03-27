import { expect } from "chai";

import words from "../src/words";
import { lex, simpleCLexer } from "../src/lexer";
import { Word } from "../src/types";

describe("Lexer functions", () => {
	describe("lex()", () => {
		it("should return no tokens", () => {
			expect(lex("", words).length).to.be.equal(0);
		});

		it("should return one token", () => {
			expect(lex("if", words).length).to.be.equal(1);
		});

		it("should return several tokens", () => {
			const tks = lex("def f(a, b):", words);
			expect(tks.length).to.be.greaterThan(0);
		});

		it("should not find a token and return an error", () => {
			expect(lex("hello", [new Word("test", /test/)])).to.be.empty;
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
});
