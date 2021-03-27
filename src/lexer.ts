import { Token, Word } from "./types";

/**
 * A simple function to try to split a content
 * in tokens using a regular expression
 *
 * @param src - the source content
 *
 * @example
 * ```typescript
 * simpleCLexer("void main() {}");
 * ```
 * Would print "void", "main", "(", ")", "{", "}" to the console
 */
export function simpleCLexer(src: string): void {
    const re = /void|main|\(|\)|\{|\}|[a-z]+|\=|[0-9]+|\s+/i;

    // while there is still content to process
    while (src.length > 0) {
        // getting the matches
        const matches = src.match(re);
        if (matches == null) {
            // we got no matches
            console.log("unknown token: ", src);
            break;
        }

        // getting the first match
        const prefix = matches[0];
        // logging the result
        console.log("token: ", prefix);
        // updating the src content
        src = src.substr((prefix as string).length, src.length);
    }
}

/**
 *
 * @param src - the content to lex
 * @param dict - dictionary of words, the grammar of the lexer
 * @returns - a
 */
export function lex(src: string, dict: Word[]): Token[] {
    const res: Token[] = [];

    while (src.length > 0) {
        let foundMatch = false;
        let matches: RegExpMatchArray | null;

        for (const w of dict) {
            matches = src.match(w.regexp);
            if (matches != null && matches.index == 0) {
                const prefix = matches[0];
                src = src.substr((prefix as string).length, src.length);

                // Generate new token
                res.push(new Token(w, prefix as string));

                // on a trouvé donc plus besoin de chercher
                foundMatch = true;
                break;
            }
        }

        if (!foundMatch) {
            console.error("unknown token: '", src, "'");
            break;
        }
    }

    return res;
}
