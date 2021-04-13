import { parse_block, parse_statement } from "./grammar";
import WordKinds from "../kinds";
import { Token } from "../types";
import { AST } from "../ast/ast";
import { ProgramInit } from "../ast/types";

class ParsingError extends Error {
    name = "ParsingError";
    constructor(message?: string) {
        super(message);
        if (message != undefined) this.message = message;
    }
}

export class Parser {
    tokens: Token[] = [];
    indentation: number = -1;
    ast: AST = new AST();

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    public accept_it(): Token {
        let ret = this.tokens.shift();
        if (ret == undefined) {
            throw new ParsingError("Not enough token remaining to accept");
        }
        return ret;
    }

    public maybe(kind: WordKinds): Token | undefined {
        if (this.show_next().word.kind === kind) {
            return this.accept_it();
        }
        return undefined;
    }

    public expect(kind: WordKinds): Token {
        let token = this.show_next();
        if (token.word.kind === kind) {
            return this.accept_it();
        } else {
            let msg = "Syntax error (line, col): (" + token?.position.line + ", " + token.position.col + "). ";
            msg += "Expecting " + kind + ". Got " + token.word.kind + ".";
            throw new ParsingError(msg);
        }
    }

    public expectChoice(kinds: WordKinds[]): Token {
        let token = this.show_next();
        if (kinds.indexOf(token.word.kind) > -1) {
            return this.accept_it();
        } else {
            let msg = "Syntax error (line, col): (" + token?.position.line + ", " + token.position.col + "). ";
            let choices = "";
            kinds.map((kind) => (choices += ";" + kind));
            msg += "Expecting one of " + choices + ". Got " + token.word.kind + ".";
            throw new ParsingError(msg);
        }
    }

    public show_next(n: number = 1): Token {
        let next = this.tokens[n - 1];
        if (next != undefined) {
            return next;
        } else {
            throw new ParsingError("Show next: Not enough tokens");
        }
    }

    public look_ahead(n: number = 2): Token {
        let next = this.tokens[n];
        if (next != undefined) {
            return next;
        } else {
            throw new ParsingError("Look ahead: Not enough tokens");
        }
    }

    public indent(): number {
        this.indentation++;
        return this.indentation;
    }

    public unindent(): number {
        this.indentation--;
        return this.indentation;
    }

    public parse() {
        this.expect(WordKinds.TYPE); // int
        this.expect(WordKinds.IDENTIFIER); // main
        this.expect(WordKinds.L_PAR);
        this.expect(WordKinds.R_PAR);

        this.ast.get_root().add_child(new ProgramInit());
        this.ast.get_root().add_child(parse_block(this));
    }
}
