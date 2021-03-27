import { Token } from "./types";

/**
 * Takes a list of tokens and then pretty print them using
 * a table in the console and their name.
 *
 * @param tokens - the tokens to pretty print
 */
function printTokens(tokens: Token[]): void {
	const res: string[][] = [];

	// for each token extract the name and it's value
	tokens.map((t: Token) => res.push([t.word.name, t.value]));
	// then print it to the console using the table function
	console.table(res);
}

export { printTokens };
