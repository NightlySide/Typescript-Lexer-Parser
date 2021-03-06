import WordKinds from "../kinds";
import { Word } from "../types";

/**
 * Exports the word list from the language,
 * it is then the grammar of this project.
 */
const WordList = [
    // spacing
    new Word(WordKinds.INDENTATION, /( {4})|(   )/i),
    new Word(WordKinds.SPACE, /[ ]+/),
    new Word(WordKinds.NEW_LINE, /\n/),
    // reserved keywords
    new Word(WordKinds.RETURN, /\breturn\b/),
    new Word(WordKinds.WHILE, /\bwhile\b/),
    new Word(WordKinds.FOR, /\bfor\b/),
    new Word(WordKinds.IF, /\bif\b/),
    new Word(WordKinds.ELSE, /\belse\b/),
    // variable types
    new Word(WordKinds.TYPE, /((int)|(bool)|(float)|(char))/),
    new Word(WordKinds.FLOAT, /[0-9]+\.[0-9]+/),
    new Word(WordKinds.INTEGER, /[0-9]+/),
    new Word(WordKinds.BOOL, /((true)|(false))/),
    // quotes
    new Word(WordKinds.D_QUOTE, /\"/),
    new Word(WordKinds.S_QUOTE, /\'/),
    // par, brackets...
    new Word(WordKinds.L_PAR, /\(/),
    new Word(WordKinds.R_PAR, /\)/),
    new Word(WordKinds.L_CBRA, /\{/),
    new Word(WordKinds.R_CBRA, /\}/),
    // dots, comma, colon, ...
    new Word(WordKinds.DOT, /\./),
    new Word(WordKinds.COMMA, /\,/),
    new Word(WordKinds.COLON, /\:/),
    new Word(WordKinds.S_COLON, /\;/),
    // operators
    new Word(WordKinds.OP_EQ, /\=\=/),
    new Word(WordKinds.OP_LEQ, /<\=/),
    new Word(WordKinds.OP_EQ, />\=/),
    new Word(WordKinds.OP_NEQ, /!\=/),
    new Word(WordKinds.EQ, /\=/),
    new Word(WordKinds.OP_PLUS, /\+/),
    new Word(WordKinds.OP_MINUS, /\-/),
    new Word(WordKinds.OP_MULT, /\*/),
    new Word(WordKinds.OP_DIV, /\//),
    new Word(WordKinds.OP_LT, /</),
    new Word(WordKinds.OP_GT, />/),
    new Word(WordKinds.BANG, /!/),
    // the rest
    new Word(WordKinds.IDENTIFIER, /[a-z][a-zA-Z0-9_]*/i),
] as Word[];

export default WordList;
