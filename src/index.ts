import words from "./lexer/words";
import { lex } from "./lexer/lexer";
import fs from "fs";
import { printTokens } from "./lexer/utils";
import { Parser } from "./parser/parser";
import { AST } from "./ast/ast";
import { Id, Binary, Operator, Root } from "./ast/types";

function lexAndParse(filename: string) {
    console.log(`===== Parsing: ${filename} =====`);

    /** The content to analyse, taken from a test file */
    const src = fs.readFileSync(filename, "utf-8");

    /** Printing to console */
    //console.log("Testing: \n" + src);
    console.log("----- LEXING -----");
    const tokens = lex(src, words);
    printTokens(tokens);

    console.log("----- PARSING -----");
    let parser = new Parser(tokens);
    parser.parse();
    console.log("Parsing done without errors.");

    console.log("----- AST -----");
    parser.ast.print_tree_v2();

    console.log("\n");
}

// ----
lexAndParse("data/simple_var.c");
lexAndParse("data/simple_add.c");
lexAndParse("data/simple_if.c");
lexAndParse("data/simple_while.c");
lexAndParse("data/simple_for.c");
lexAndParse("data/simple_long_file.c");

/* let root = new Binary(new Id("a"), new Operator("+"), new Id("b"));
let tree = new AST(root);

tree.get_root().add_child(
    new Binary(new Id("a"), new Operator("+"), new Binary(new Id("m"), new Operator("*"), new Id("t")))
);

tree.print_tree(); */
