const enum WordKinds {
    // spacing
    INDENTATION = "INDENTATION",
    SPACE = "SPACE",
    NEW_LINE = "NEW_LINE",
    // reserved keywords
    RETURN = "RETURN",
    WHILE = "WHILE",
    FOR = "FOR",
    IF = "IF",
    ELSE = "ELSE",
    // types
    TYPE = "TYPE",
    FLOAT = "FLOAT",
    INTEGER = "INTEGER",
    BOOL = "BOOL",
    // quotes
    D_QUOTE = "D_QUOTE",
    S_QUOTE = "S_QUOTE",
    // parenthesis, brackets
    L_PAR = "L_PAR",
    R_PAR = "R_PAR",
    L_CBRA = "L_CBRA",
    R_CBRA = "R_CBRA",
    // punctuation
    DOT = "DOT",
    COMMA = "COMMA",
    COLON = "COLON",
    S_COLON = "S_COLON",
    // operations
    OP_EQ = "OP_EQ",
    OP_NEQ = "OP_NEQ",
    OP_LEQ = "OP_LEQ",
    OP_GEQ = "OP_GEQ",
    EQ = "EQ",
    OP_PLUS = "OP_PLUS",
    OP_MINUS = "OP_MINUS",
    OP_MULT = "OP_MULT",
    OP_DIV = "OP_DIV",
    OP_LT = "OP_LT",
    OP_GT = "OP_GT",
    BANG = "BANG",
    // the rest
    IDENTIFIER = "IDENTIFIER",
    // undefined
    UNDEFINED = "UNDEFINED",
}

export default WordKinds;
