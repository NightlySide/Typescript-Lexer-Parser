export class Word {
    /** Word's name used to understand the kind of token used */
    public name: string;
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
    constructor(name: string, regexp: RegExp) {
        this.name = name;
        this.regexp = regexp;
    }
}

export class Token {
    /** Token's word, a word defined in the lexer grammar */
    public word: Word;
    /** Token's value, a string of the content from the source */
    public value: string;

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
    constructor(word: Word, value: string) {
        this.word = word;
        this.value = value;
    }
}
