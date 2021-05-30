import { Block } from "src/app/graph/types";
import { ast_to_block } from "src/app/graph/utils";
import { AST } from "../ast/ast";

export function ASTToPythonCode(tree: AST): string {
    let program_start: Block | undefined = undefined;
    let error = "";
    let blocks = ast_to_block(tree);

    // on vérifie qu'on ait qu'un seul init
    blocks.forEach((block) => {
        if (block.type == "utils/prgm_init") {
            if (program_start != undefined)
                error = "There should be only one program start!";
            program_start = block;
        }
    });
    if (error != "") return error;

    console.log(program_start);

    // on vérifie qu'il existe un init
    if (program_start == undefined)
        return "Please add a program start to the graph!";

    // creation des variables du programme
    let program = "#--- Python code generated with BluePrintF ---#\n\n";
    let stack: number[] = [];
    let indent = 0;

    // on parcours le programme
    let current_block: Block = program_start;
    let counter = 0;
    while (true) {
        // on s'occupe des enfants du block
        [program, stack, indent] = goThroughChildren(
            program,
            stack,
            indent,
            blocks,
            current_block
        );

        // on passe au suivant
        // si c'est le dernier on sort
        if (current_block.links.length == 0) break;
        // si on a plusieurs program flow c'est une erreur
        else if (current_block.links.length > 1)
            return `Several program flow detected on block ${
                counter + 1
            }! It should be impossible`;

        // sinon on passe au suivant
        const next_block_id = current_block.links[0].block_id;
        blocks.forEach((block) => {
            if (block.id == next_block_id) current_block = block;
        });
        counter++;
    }

    return program;
}

function goThroughChildren(
    program: string,
    stack: number[],
    indent: number,
    blocks: Block[],
    current_block: Block
): [string, number[], number] {
    // on regarde le nombre de connections vers le block courant
    const children = blocks.filter((block) => {
        for (const link of block.links) {
            // si le block pointe vers le courant
            if (link.block_id == current_block.id) {
                // si ce n'est pas du program_flow
                const link_on_block = current_block.inputs[link.out_id];
                if (link_on_block.io_type != "program_flow") {
                    return true;
                }
            }
        }
        return false;
    });

    // on parcoure les enfants
    for (const child of children) {
        [program, stack, indent] = goThroughChildren(
            program,
            stack,
            indent,
            blocks,
            child
        );
    }

    // on s'occupe enfin du block courant
    return addFunctionToProgram(current_block, program, stack, indent);
}

function addFunctionToProgram(
    block: Block,
    program: string,
    stack: number[],
    indent: number
): [string, number[], number] {
    let line = " ".repeat(4 * indent);
    switch (block.type) {
        case "utils/prgm_init":
            line += `if __name__ == "__main__":`;
            indent++;
            break;
        case "utils/print":
            line += `print(v_${stack[stack.length - 1]})`;
            break;
        case "types/nombre":
            let new_var = stack.length;
            line += `v_${new_var} = ${block.outputs[0].value}`;
            stack.push(new_var);
            break;
        case "types/string":
            let new_var_str = stack.length;
            line += `v_${new_var_str} = "${block.outputs[0].value}"`;
            stack.push(new_var_str);
            break;
        case "types/booleen":
            let new_var_bool = stack.length;
            line += `v_${new_var_bool} = ${
                block.outputs[0].value ? "True" : "False"
            }`;
            stack.push(new_var_bool);
            break;
        case "maths/addition":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} + v_${
                stack[stack.length - 2]
            }`;
            stack.push(stack.length);
            break;
        case "maths/soustraction":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} - v_${
                stack[stack.length - 2]
            }`;
            stack.push(stack.length);
            break;
        case "maths/multiplication":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} * v_${
                stack[stack.length - 2]
            }`;
            stack.push(stack.length);
            break;
        case "maths/division":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} / v_${
                stack[stack.length - 2]
            }`;
            stack.push(stack.length);
            break;
        case "utils/to_string":
            line += `v_${stack[stack.length - 1]} = str(v_${
                stack[stack.length - 1]
            })`;
            break;
        default:
            console.log("No implementation for type: " + block.type);
            break;
    }
    program += line + "\n";

    return [program, stack, indent];
}
