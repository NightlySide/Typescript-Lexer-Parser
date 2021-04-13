import WordKind from "./kinds";

export class Word {
    /** Word's name used to understand the kind of token used */
    public kind: WordKind;
    /** The word's regular expression to detect the word in the content */
    public regexp: RegExp;

    /**
     *
     * Describes a word, an atom from the lexer grammar.
     *
     * @param name - The word's name
     * @param regexp - The regular expression for the word
     *
     * @example
     * ```typescript
     * let w = new Word("IF", /\bif\b/);
     * ```
     */
    constructor(kind: WordKind, regexp: RegExp) {
        this.kind = kind;
        this.regexp = regexp;
    }
}

export class Token {
    /** Token's word, a word defined in the lexer grammar */
    public word: Word;
    /** Token's value, a string of the content from the source */
    public value: string;
    /** Token's position, a line number and a col number */
    public position: Position;

    /**
     *
     * Describes a token, an atom from the source categorized
     * by the lexer.
     *
     * @param word - The recognized word
     * @param value - The value of this token
     *
     * @example
     * ```typescript
     * let t = new Token(new Word("IF", /\bif\b/), "if");
     * ```
     */
    constructor(position: Position, word: Word, value: string) {
        this.position = position;
        this.word = word;
        this.value = value;
    }
}

export class Position {
    /** Line of the object in the code */
    public line: number;
    /** Col of the object in the code */
    public col: number;

    /**
     *
     * A position in the code, simple structure to hold
     * the line and the col at which an object lies.
     *
     * @param line - line of the object in the code
     * @param col - col of the object in the code
     *
     * @example
     * ```typescript
     * let pos = new Position(2, 1);
     * console.log(pos.line); // prints 2
     * ```
     */
    constructor(line: number, col: number) {
        this.line = line;
        this.col = col;
    }
}
