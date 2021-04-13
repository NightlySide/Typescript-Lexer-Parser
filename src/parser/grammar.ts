import WordKinds from "../kinds";
import type { Parser } from "./parser";
import {
    Assignment,
    ASTNode,
    Block,
    Comparison,
    Declaration,
    Else,
    Expression,
    For,
    ForDeclaration,
    If,
    Return,
    While,
} from "../ast/types";

function print(indent: number, msg: string) {
    console.log(
        Array(indent * 2)
            .fill(" ")
            .join("") + msg
    );
}

function parse_statement(parser: Parser): ASTNode {
    const next = parser.show_next();

    let ret: any;
    switch (next.word.kind) {
        case WordKinds.TYPE:
            ret = parse_declaration(parser);
            break;
        case WordKinds.IDENTIFIER:
            ret = parse_assignment(parser);
            break;
        case WordKinds.IF:
            ret = parse_if(parser);
            break;
        case WordKinds.WHILE:
            ret = parse_while(parser);
            break;
        case WordKinds.FOR:
            ret = parse_for(parser);
            break;
        case WordKinds.RETURN:
            ret = parse_return(parser);
            break;
        default:
            console.log(next.word.kind);
            throw "Can't find any solution here";
    }

    return ret;
}

function parse_return(parser: Parser): Return {
    const indent = parser.indent();
    print(indent, ">>> parse return");

    parser.expect(WordKinds.RETURN);
    const return_value = parser.expect(WordKinds.INTEGER);
    parser.expect(WordKinds.S_COLON);

    print(indent, "<<< return parsing done");
    parser.unindent();

    return new Return(parseInt(return_value.value));
}

function parse_declaration(parser: Parser): Declaration {
    const indent = parser.indent();
    print(indent, ">>> parse declaration");

    let type = parser.expect(WordKinds.TYPE); // int
    let identifier = parser.expect(WordKinds.IDENTIFIER); // a

    // if we have an assignment
    let assignment: Assignment | undefined;
    if (parser.show_next().word.kind == WordKinds.EQ) {
        // adding back the identifier
        parser.tokens.unshift(identifier);
        assignment = parse_assignment(parser);
    } else {
        parser.expect(WordKinds.S_COLON);
    }

    print(indent, "<<< declaration parsing done");
    parser.unindent();

    if (assignment != undefined) return new Declaration(type.value, identifier.value, assignment);
    return new Declaration(type.value, identifier.value);
}

function parse_assignment(parser: Parser): Assignment {
    const indent = parser.indent();
    print(indent, ">>> parse assignment");

    const identifier = parser.expect(WordKinds.IDENTIFIER); // a
    parser.expect(WordKinds.EQ); // =
    const expression = parse_expression(parser);
    parser.expect(WordKinds.S_COLON);

    print(indent, "<<< assignment parsing done");
    parser.unindent();

    return new Assignment(identifier.value, expression.content);
}

function parse_while(parser: Parser): While {
    const indent = parser.indent();
    print(indent, ">>> parse while");

    parser.expect(WordKinds.WHILE);

    const condition = parse_condition(parser);
    const block = parse_block(parser);

    print(indent, "<<< while parsing done");
    parser.unindent();

    return new While(condition, block);
}

function parse_for(parser: Parser): For {
    const indent = parser.indent();
    print(indent, ">>> parse for");

    parser.expect(WordKinds.FOR);

    const init = parse_for_declaration(parser);
    const block = parse_block(parser);

    print(indent, "<<< for parsing done");
    parser.unindent();

    return new For(init, block);
}

function parse_for_declaration(parser: Parser): ForDeclaration {
    const indent = parser.indent();
    print(indent, ">>> parse for declaration");

    parser.expect(WordKinds.L_PAR);

    parser.maybe(WordKinds.TYPE);
    const assignment = parse_assignment(parser);
    const comparison = parse_comparison(parser);
    const increment = parse_expression(parser, WordKinds.R_PAR);

    parser.expect(WordKinds.R_PAR);

    print(indent, "<<< for declaration parsing done");
    parser.unindent();

    return new ForDeclaration(assignment, comparison, increment);
}

function parse_comparison(parser: Parser): Comparison {
    const indent = parser.indent();
    print(indent, ">>> parse comparison");

    const left_part = parser.expectChoice([WordKinds.IDENTIFIER, WordKinds.INTEGER, WordKinds.FLOAT, WordKinds.BOOL]);
    const op = parser.expectChoice([
        WordKinds.OP_EQ,
        WordKinds.OP_GEQ,
        WordKinds.OP_LEQ,
        WordKinds.OP_GT,
        WordKinds.OP_LT,
        WordKinds.OP_NEQ,
    ]);
    const right_part = parser.expectChoice([WordKinds.IDENTIFIER, WordKinds.INTEGER, WordKinds.FLOAT, WordKinds.BOOL]);

    print(indent, "<<< comparison parsing done");
    parser.unindent();

    return new Comparison(left_part.value, op.value, right_part.value);
}

function parse_expression(parser: Parser, end_condition: WordKinds = WordKinds.S_COLON): Expression {
    const indent = parser.indent();
    print(indent, ">>> parse expression");

    let tokens = [];
    // while this is not the end of the expression
    while (parser.show_next().word.kind != end_condition) {
        tokens.push(parser.accept_it().value);
    }
    print(indent, "<<< expression parse done");
    parser.unindent();
    // TODO : give a sense to this part

    return new Expression(tokens);
}

function parse_if(parser: Parser): If {
    const indent = parser.indent();
    print(indent, ">>> parse if");

    parser.expect(WordKinds.IF);
    parser.expect(WordKinds.L_PAR);

    const condition = parse_expression(parser, WordKinds.R_PAR);
    parser.expect(WordKinds.R_PAR);

    const block = parse_block(parser);

    let else_node: Else | undefined;
    if (parser.show_next().word.kind == WordKinds.ELSE) {
        else_node = parse_else(parser);
    }

    print(indent, "<<< if parsing done");
    parser.unindent();

    return new If(condition, block, else_node);
}

function parse_else(parser: Parser): Else {
    const indent = parser.indent();
    print(indent, ">>> parse else");

    parser.expect(WordKinds.ELSE);
    const block = parse_block(parser);

    print(indent, "<<< else parsing done");
    parser.unindent();

    return new Else(block);
}

function parse_condition(parser: Parser): Comparison {
    const indent = parser.indent();
    print(indent, ">>> parse condition");
    parser.expect(WordKinds.L_PAR);

    const comp = parse_comparison(parser);

    parser.expect(WordKinds.R_PAR);

    print(indent, "<<< condition parsing done");
    parser.unindent();

    return comp;
}

function parse_block(parser: Parser): Block {
    const indent = parser.indent();
    print(indent, ">>> parse block");

    let statements: ASTNode[] = [];
    parser.expect(WordKinds.L_CBRA);
    while (parser.show_next().word.kind != WordKinds.R_CBRA) {
        statements.push(parse_statement(parser));
    }
    parser.expect(WordKinds.R_CBRA);

    print(indent, "<<< block parsing done");
    parser.unindent();

    return new Block(statements);
}

export {
    parse_declaration,
    parse_condition,
    parse_expression,
    parse_for,
    parse_for_declaration,
    parse_statement,
    parse_while,
    parse_block,
};
