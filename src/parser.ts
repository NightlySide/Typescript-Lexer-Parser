import { Token, Word } from "./types";

export class Parser {
    tokens: Token[] = [];

    public accept_it(): Token | undefined {
        return this.tokens.shift();
    }

    public maybe(expected_word: Word) {
        if (this.show_next().word.name === expected_word.name) {
            return this.accept_it();
        }
        return undefined;
    }

    public expect(expected_word: Word): Token | undefined {
        let token = this.show_next();
        if (token.word.name === expected_word.name) {
            return this.accept_it();
        } else {
            let msg = "Syntax error line " + token?.position.line;
            msg += "expecting " + expected_word.name + ". Got " + token.word.name;
            throw msg;
        }
    }

    public show_next(n: number = 1): Token {
        let next = this.tokens[n - 1];
        if (next != undefined) {
            return next;
        } else {
            throw "Not enough tokens";
        }
    }

    public look_ahead(n: number = 2): Token | undefined {
        if (this.tokens.length >= n - 1) {
            return this.tokens[n];
        }
        return undefined;
    }

    public parse() {}
}
