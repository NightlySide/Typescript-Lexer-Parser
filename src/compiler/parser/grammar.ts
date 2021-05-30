import WordKinds from "../kinds";
import type { Parser } from "./parser";
import {
    ASTNode,
    Block,
    BlockIdentity,
    BlockIO,
    BlockLinks,
    Identifier,
    IdentityStatement,
    IOStatement,
    LinkStatement,
    Value,
} from "../ast/types";

const DEBUG_PRINT = false;
function print(indent: number, msg: string) {
    if (DEBUG_PRINT)
        console.log(
            Array(indent * 2)
                .fill(" ")
                .join("") + msg
        );
}

/*
function template(parser: Parser): ASTNode {
    const indent = parser.indent();
    print(indent, ">>> Block");
    // --- logic

    // --- end of logic
    print(indent, "<<< Block");
    parser.unindent();

    return new ASTNode("block");
}
*/

function parse_block(parser: Parser): Block {
    const indent = parser.indent();
    print(indent, ">>> Block");
    // --- logic
    let block: Block;

    parser.expect(WordKinds.DOUBLE_SEP);
    const identity = parse_block_identity(parser);
    parser.expect(WordKinds.SIMPLE_SEP);
    const io = parse_block_io(parser);

    const next_sep = parser.show_next();
    if (next_sep.word.kind == WordKinds.SIMPLE_SEP) {
        parser.expect(WordKinds.SIMPLE_SEP);
        const links = parse_block_links(parser);
        parser.expect(WordKinds.DOUBLE_SEP);
        block = new Block(identity, io, links);
    } else {
        parser.expect(WordKinds.DOUBLE_SEP);
        block = new Block(identity, io);
    }

    // --- end of logic
    print(indent, "<<< Block");
    parser.unindent();

    return block;
}

function parse_block_identity(parser: Parser): BlockIdentity {
    const indent = parser.indent();
    print(indent, ">>> BlockIdentity");
    // --- logic

    let parameters: IdentityStatement[] = [];
    let next = parser.show_next();
    while (
        next.word.kind != WordKinds.DOUBLE_SEP &&
        next.word.kind != WordKinds.SIMPLE_SEP
    ) {
        parameters.push(parse_identity_statement(parser));
        next = parser.show_next();
    }

    // --- end of logic
    print(indent, "<<< BlockIdentity");
    parser.unindent();

    return new BlockIdentity(parameters);
}

function parse_block_io(parser: Parser): BlockIO {
    const indent = parser.indent();
    print(indent, ">>> BlockI/O");
    // --- logic

    let ins_outs: IOStatement[] = [];
    let next = parser.show_next();
    while (
        next.word.kind != WordKinds.DOUBLE_SEP &&
        next.word.kind != WordKinds.SIMPLE_SEP
    ) {
        ins_outs.push(parse_io_statement(parser));
        next = parser.show_next();
    }

    // --- end of logic
    print(indent, "<<< BlockI/O");
    parser.unindent();

    return new BlockIO(ins_outs);
}

function parse_block_links(parser: Parser): BlockLinks {
    const indent = parser.indent();
    print(indent, ">>> BlockLinks");
    // --- logic

    let links: ASTNode[] = [];
    let next = parser.show_next();
    while (
        next.word.kind != WordKinds.DOUBLE_SEP &&
        next.word.kind != WordKinds.SIMPLE_SEP
    ) {
        links.push(parse_link_statement(parser));
        next = parser.show_next();
    }

    // --- end of logic
    print(indent, "<<< BlockLinks");
    parser.unindent();

    return new BlockLinks(links);
}

function parse_identity_statement(parser: Parser): IdentityStatement {
    const indent = parser.indent();
    print(indent, ">>> IdentityStatement");
    // --- logic

    const id = parser.expect(WordKinds.IDENTIFIER);
    parser.expect(WordKinds.COLON);
    const value = parser.expectChoice([
        WordKinds.INTEGER,
        WordKinds.FLOAT,
        WordKinds.BOOL,
        WordKinds.IDENTIFIER,
        WordKinds.STRING,
        WordKinds.VECTOR,
    ]);

    // --- end of logic
    print(indent, "<<< IdentityStatement");
    parser.unindent();

    return new IdentityStatement(
        new Identifier(id.value),
        new Value(value.value)
    );
}

function parse_io_statement(parser: Parser): IOStatement {
    const indent = parser.indent();
    print(indent, ">>> IdentityStatement");
    // --- logic

    const accepted_values = [
        WordKinds.INTEGER,
        WordKinds.FLOAT,
        WordKinds.BOOL,
        WordKinds.IDENTIFIER,
        WordKinds.STRING,
    ];

    const in_out = parser.expect(WordKinds.IDENTIFIER);
    parser.expect(WordKinds.COLON);
    const name = parser.expectChoice(accepted_values);
    parser.expect(WordKinds.COMMA);
    const type = parser.expect(WordKinds.IDENTIFIER);
    parser.expect(WordKinds.COMMA);
    const value = parser.expectChoice([
        ...accepted_values,
        WordKinds.LINKED_ID,
    ]);

    // --- end of logic
    print(indent, "<<< IdentityStatement");
    parser.unindent();

    return new IOStatement(
        new Value(in_out.value),
        new Value(name.value),
        new Value(type.value),
        new Value(value.value)
    );
}

function parse_link_statement(parser: Parser): LinkStatement {
    const indent = parser.indent();
    print(indent, ">>> LinkStatement");
    // --- logic

    parser.expect(WordKinds.IDENTIFIER);
    parser.expect(WordKinds.COLON);
    const out_id = parser.expect(WordKinds.INTEGER);
    parser.expect(WordKinds.OP_MINUS);
    parser.expect(WordKinds.OP_MINUS);
    parser.expect(WordKinds.OP_MINUS);
    parser.expect(WordKinds.OP_GT); // --->
    const block_id = parser.expect(WordKinds.INTEGER);
    parser.expect(WordKinds.COMMA);
    const in_id = parser.expect(WordKinds.INTEGER);

    // --- end of logic
    print(indent, "<<< LinkStatement");
    parser.unindent();

    return new LinkStatement(
        new Value(out_id.value),
        new Value(in_id.value),
        new Value(block_id.value)
    );
}

export { parse_block };
