import words from "./words";
import fs from "fs";
import { lex } from "./lexer";
import { printTokens } from "./utils";

/** The content to analyse, taken from a python test file */
const src = fs.readFileSync("src/test.py", "utf8");

/** Printing to console */
console.log("Testing: \n" + src);
console.log("-------------------");
const tokens = lex(src, words);
printTokens(tokens);
