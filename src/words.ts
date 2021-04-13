import { Word } from "./types";

/**
 * Exports the word list from the language,
 * it is then the grammar of this project.
 */
export default [
    // spacing
    new Word("INDENTATION", / {4}/i),
    new Word("SPACE", / +/),
    new Word("NEW_L", /\n/),
    // variable types
    new Word("FLOAT", /[0-9]+\.[0-9]+/),
    new Word("INTEGER", /[0-9]+/),
    // quotes
    new Word("D_QUOTE", /\"/),
    new Word("S_QUOTE", /\'/),
    // par, brackets...
    new Word("L_PAR", /\(/),
    new Word("R_PAR", /\)/),
    // dots, comma, colon, ...
    new Word("DOT", /\./),
    new Word("COMMA", /\,/),
    new Word("COLON", /\:/),
    new Word("S_COLON", /\;/),
    // operators
    new Word("EQ", /\=/),
    new Word("PLUS", /\+/),
    new Word("MINUS", /\-/),
    new Word("MULT", /\*/),
    new Word("DIV", /\//),
    new Word("LT", /</),
    new Word("GT", />/),
    new Word("BANG", /!/),
    // the rest
    new Word("IDENTIFIER", /[a-z][a-zA-Z0-9_]*/i),
    new Word("OP_RES", /\$value/),
] as Word[];
