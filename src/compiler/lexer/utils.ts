import { Token } from "../types";

class TokenToPrint {
    position: string = "";
    kind: string = "";
    value: string = "";

    constructor(position: string, kind: string, value: string) {
        this.position = position;
        this.kind = kind;
        this.value = value;
    }
}

/**
 * Takes a list of tokens and then pretty print them using
 * a table in the console and their name.
 *
 * @param tokens - the tokens to pretty print
 */
function printTokens(tokens: Token[]): void {
    const res: TokenToPrint[] = [];

    // for each token extract the name and it's value
    tokens.map((t: Token) =>
        res.push(
            new TokenToPrint(
                `(${t.position.line}, ${t.position.col})`,
                t.word.kind.toString(),
                t.value
            )
        )
    );
    // then print it to the console using the table function
    console.table(res);
}

export { printTokens };
