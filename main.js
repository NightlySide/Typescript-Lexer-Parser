(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/fG4":
/*!***********************************!*\
  !*** ./src/compiler/ast/types.ts ***!
  \***********************************/
/*! exports provided: ASTNode, Root, Block, BlockIdentity, BlockIO, BlockLinks, Identifier, Value, IdentityStatement, IOStatement, LinkStatement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTNode", function() { return ASTNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockIdentity", function() { return BlockIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockIO", function() { return BlockIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockLinks", function() { return BlockLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identifier", function() { return Identifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityStatement", function() { return IdentityStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOStatement", function() { return IOStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStatement", function() { return LinkStatement; });
class ASTNode {
    constructor(name) {
        this.children = [];
        this.name = name;
    }
    get_children() {
        return this.children;
    }
    add_child(node) {
        this.children.push(node);
    }
    accept(visitor) {
        console.error("Visiting basic node!!!");
    }
}
class Root extends ASTNode {
    constructor() {
        super("Root");
    }
    accept(visitor) {
        visitor.visit_root(this);
    }
}
class Block extends ASTNode {
    constructor(identity, io, links) {
        super("Block");
        if (links != undefined)
            this.children = [identity, io, links];
        else
            this.children = [identity, io];
    }
    accept(visitor) {
        visitor.visit_block(this);
    }
}
class BlockIdentity extends ASTNode {
    constructor(parameters) {
        super("BlockIdentity");
        this.children = parameters;
    }
    accept(visitor) {
        visitor.visit_block_identity(this);
    }
}
class BlockIO extends ASTNode {
    constructor(ins_outs) {
        super("BlockI/O");
        this.children = ins_outs;
    }
    accept(visitor) {
        visitor.visit_block_io(this);
    }
}
class BlockLinks extends ASTNode {
    constructor(links) {
        super("BlockLinks");
        this.children = links;
    }
    accept(visitor) {
        visitor.visit_block_links(this);
    }
}
class Identifier extends ASTNode {
    constructor(value) {
        super("Identifier");
        this.content = value;
    }
    accept(visitor) {
        visitor.visit_identifier(this);
    }
}
class Value extends ASTNode {
    constructor(value) {
        super("Value");
        this.content = value;
    }
    accept(visitor) {
        visitor.visit_value(this);
    }
}
class IdentityStatement extends ASTNode {
    constructor(id, value) {
        super("IdentityStatement");
        this.children = [id, value];
    }
    accept(visitor) {
        visitor.visit_identity_statement(this);
    }
}
class IOStatement extends ASTNode {
    constructor(in_or_out, name, type, value) {
        super("IdentityStatement");
        this.children = [in_or_out, name, type, value];
    }
    accept(visitor) {
        visitor.visit_io_statement(this);
    }
}
class LinkStatement extends ASTNode {
    constructor(in_id, out_id, block_id) {
        super("LinkStatement");
        this.children = [in_id, out_id, block_id];
    }
    accept(visitor) {
        visitor.visit_link_statement(this);
    }
}



/***/ }),

/***/ "/p80":
/*!***************************************!*\
  !*** ./src/node_types/utils/index.ts ***!
  \***************************************/
/*! exports provided: Print, ToString, ProgramStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ "UtAe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return _print__WEBPACK_IMPORTED_MODULE_0__["Print"]; });

/* harmony import */ var _to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_string */ "w+rM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return _to_string__WEBPACK_IMPORTED_MODULE_1__["ToString"]; });

/* harmony import */ var _program_start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./program_start */ "QMkb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramStart", function() { return _program_start__WEBPACK_IMPORTED_MODULE_2__["ProgramStart"]; });







/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexandre/Documents/BluePrintF/src/main.ts */"zUnb");


/***/ }),

/***/ "5u9O":
/*!*************************************!*\
  !*** ./src/compiler/lexer/utils.ts ***!
  \*************************************/
/*! exports provided: printTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printTokens", function() { return printTokens; });
class TokenToPrint {
    constructor(position, kind, value) {
        this.position = "";
        this.kind = "";
        this.value = "";
        this.position = position;
        this.kind = kind;
        this.value = value;
    }
}
/**
 * Takes a list of tokens and then pretty print them using
 * a table in the console and their name.
 *
 * @param tokens - the tokens to pretty print
 */
function printTokens(tokens) {
    const res = [];
    // for each token extract the name and it's value
    tokens.map((t) => res.push(new TokenToPrint(`(${t.position.line}, ${t.position.col})`, t.word.kind.toString(), t.value)));
    // then print it to the console using the table function
    console.table(res);
}



/***/ }),

/***/ "6sZ/":
/*!************************************!*\
  !*** ./src/node_types/registry.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maths */ "Y2H/");
/* harmony import */ var _native_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native_types */ "8bx+");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "/p80");




function registerMaths() {
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("maths/addition", _maths__WEBPACK_IMPORTED_MODULE_1__["Addition"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("maths/soustraction", _maths__WEBPACK_IMPORTED_MODULE_1__["Soustraction"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("maths/multiplication", _maths__WEBPACK_IMPORTED_MODULE_1__["Multiplication"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("maths/division", _maths__WEBPACK_IMPORTED_MODULE_1__["Division"]);
}
function registerTypes() {
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("types/booleen", _native_types__WEBPACK_IMPORTED_MODULE_2__["Booleen"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("types/nombre", _native_types__WEBPACK_IMPORTED_MODULE_2__["Nombre"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("types/string", _native_types__WEBPACK_IMPORTED_MODULE_2__["String"]);
}
function registerUtils() {
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("utils/print", _utils__WEBPACK_IMPORTED_MODULE_3__["Print"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("utils/to_string", _utils__WEBPACK_IMPORTED_MODULE_3__["ToString"]);
    litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].registerNodeType("utils/prgm_init", _utils__WEBPACK_IMPORTED_MODULE_3__["ProgramStart"]);
}
/* harmony default export */ __webpack_exports__["default"] = (() => {
    registerTypes();
    registerMaths();
    registerUtils();
});


/***/ }),

/***/ "85Sp":
/*!*************************************!*\
  !*** ./src/compiler/lexer/words.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "Gnqt");

/**
 * Exports the word list from the language,
 * it is then the grammar of this project.
 */
const WordList = [
    // spacing
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("INDENTATION" /* INDENTATION */, /( {4})|\t/i),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("SPACE" /* SPACE */, /[ ]+/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("NEW_LINE" /* NEW_LINE */, /\n/),
    // variable types
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("TYPE" /* TYPE */, /((int)|(bool)|(float)|(char))/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("FLOAT" /* FLOAT */, /[0-9]+\.[0-9]+/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("INTEGER" /* INTEGER */, /[0-9]+/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("BOOL" /* BOOL */, /((true)|(false))/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("STRING" /* STRING */, /[\"\'][ \wéèàĥ+-\_?!\/\*]*[\"\']/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("VECTOR" /* VECTOR */, /\([-0-9\.\, ]+\)/),
    // separators
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("SIMPLE_SEP" /* SIMPLE_SEP */, /----/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("DOUBLE_SEP" /* DOUBLE_SEP */, /====/),
    // quotes
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("D_QUOTE" /* D_QUOTE */, /\"/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("S_QUOTE" /* S_QUOTE */, /\'/),
    // par, brackets...
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("L_PAR" /* L_PAR */, /\(/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("R_PAR" /* R_PAR */, /\)/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("L_CBRA" /* L_CBRA */, /\{/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("R_CBRA" /* R_CBRA */, /\}/),
    // dots, comma, colon, ...
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("DOT" /* DOT */, /\./),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("COMMA" /* COMMA */, /\,/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("COLON" /* COLON */, /\:/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("S_COLON" /* S_COLON */, /\;/),
    // operators
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_EQ" /* OP_EQ */, /\=\=/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_LEQ" /* OP_LEQ */, /<\=/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_EQ" /* OP_EQ */, />\=/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_NEQ" /* OP_NEQ */, /!\=/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("EQ" /* EQ */, /\=/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_PLUS" /* OP_PLUS */, /\+/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_MINUS" /* OP_MINUS */, /\-/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_MULT" /* OP_MULT */, /\*/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_DIV" /* OP_DIV */, /\//),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_LT" /* OP_LT */, /</),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("OP_GT" /* OP_GT */, />/),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("BANG" /* BANG */, /!/),
    // the rest
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("LINKED_ID" /* LINKED_ID */, /\$[a-z][a-zA-Z0-9_]*/i),
    new _types__WEBPACK_IMPORTED_MODULE_0__["Word"]("IDENTIFIER" /* IDENTIFIER */, /[a-z][a-zA-Z0-9_]*/i),
];
/* harmony default export */ __webpack_exports__["default"] = (WordList);


/***/ }),

/***/ "8Eix":
/*!*********************************************!*\
  !*** ./src/compiler/generator/generator.ts ***!
  \*********************************************/
/*! exports provided: ASTToPythonCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTToPythonCode", function() { return ASTToPythonCode; });
/* harmony import */ var src_app_graph_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/graph/utils */ "CHa0");

function ASTToPythonCode(tree) {
    let program_start = undefined;
    let error = "";
    let blocks = Object(src_app_graph_utils__WEBPACK_IMPORTED_MODULE_0__["ast_to_block"])(tree);
    // on vérifie qu'on ait qu'un seul init
    blocks.forEach((block) => {
        if (block.type == "utils/prgm_init") {
            if (program_start != undefined)
                error = "There should be only one program start!";
            program_start = block;
        }
    });
    if (error != "")
        return error;
    console.log(program_start);
    // on vérifie qu'il existe un init
    if (program_start == undefined)
        return "Please add a program start to the graph!";
    // creation des variables du programme
    let program = "#--- Python code generated with BluePrintF ---#\n\n";
    let stack = [];
    let indent = 0;
    // on parcours le programme
    let current_block = program_start;
    let counter = 0;
    while (true) {
        // on s'occupe des enfants du block
        [program, stack, indent] = goThroughChildren(program, stack, indent, blocks, current_block);
        // on passe au suivant
        // si c'est le dernier on sort
        if (current_block.links.length == 0)
            break;
        // si on a plusieurs program flow c'est une erreur
        else if (current_block.links.length > 1)
            return `Several program flow detected on block ${counter + 1}! It should be impossible`;
        // sinon on passe au suivant
        const next_block_id = current_block.links[0].block_id;
        blocks.forEach((block) => {
            if (block.id == next_block_id)
                current_block = block;
        });
        counter++;
    }
    return program;
}
function goThroughChildren(program, stack, indent, blocks, current_block) {
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
        [program, stack, indent] = goThroughChildren(program, stack, indent, blocks, child);
    }
    // on s'occupe enfin du block courant
    return addFunctionToProgram(current_block, program, stack, indent);
}
function addFunctionToProgram(block, program, stack, indent) {
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
            line += `v_${new_var_bool} = ${block.outputs[0].value ? "True" : "False"}`;
            stack.push(new_var_bool);
            break;
        case "maths/addition":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} + v_${stack[stack.length - 2]}`;
            stack.push(stack.length);
            break;
        case "maths/soustraction":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} - v_${stack[stack.length - 2]}`;
            stack.push(stack.length);
            break;
        case "maths/multiplication":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} * v_${stack[stack.length - 2]}`;
            stack.push(stack.length);
            break;
        case "maths/division":
            line += `v_${stack.length} = v_${stack[stack.length - 1]} / v_${stack[stack.length - 2]}`;
            stack.push(stack.length);
            break;
        case "utils/to_string":
            line += `v_${stack[stack.length - 1]} = str(v_${stack[stack.length - 1]})`;
            break;
        default:
            console.log("No implementation for type: " + block.type);
            break;
    }
    program += line + "\n";
    return [program, stack, indent];
}


/***/ }),

/***/ "8bx+":
/*!**********************************************!*\
  !*** ./src/node_types/native_types/index.ts ***!
  \**********************************************/
/*! exports provided: Nombre, Booleen, String */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nombre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nombre */ "MxRj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nombre", function() { return _nombre__WEBPACK_IMPORTED_MODULE_0__["Nombre"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean */ "E4Zh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Booleen", function() { return _boolean__WEBPACK_IMPORTED_MODULE_1__["Booleen"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "qNX1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "String", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["String"]; });







/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CHa0":
/*!********************************!*\
  !*** ./src/app/graph/utils.ts ***!
  \********************************/
/*! exports provided: ast_to_block, block_to_nodes, linking_nodes_on_graph, nodes_to_block, blocks_to_ast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ast_to_block", function() { return ast_to_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block_to_nodes", function() { return block_to_nodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linking_nodes_on_graph", function() { return linking_nodes_on_graph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodes_to_block", function() { return nodes_to_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocks_to_ast", function() { return blocks_to_ast; });
/* harmony import */ var _compiler_ast_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../compiler/ast/ast */ "Vnbs");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "DK5C");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compiler/ast/types */ "/fG4");




function ast_to_block(tree) {
    let blocks = tree
        .get_root()
        .get_children()
        .map((block_node) => _types__WEBPACK_IMPORTED_MODULE_1__["Block"].from_ast_node(block_node));
    return blocks;
}
function block_to_nodes(blocks) {
    let nodes = new Map();
    // creating each node
    blocks.forEach((block) => {
        const node = litegraph_js__WEBPACK_IMPORTED_MODULE_2__["LiteGraph"].createNode(block.type);
        if (node == null) {
            console.log("Cannot build node with type: ", block.type);
        }
        else {
            node.id = block.id;
            node.pos = [block.pos[0], block.pos[1]];
            if (block.title != undefined)
                node.title = block.title;
            if (block.value != undefined)
                node.setValue(block.value);
            nodes.set(block.id, node);
        }
    });
    return nodes;
}
function linking_nodes_on_graph(nodes, blocks) {
    // linking the nodes
    blocks.forEach((block) => {
        let linked_node = nodes.get(block.id);
        block.links.forEach((link) => {
            let t_node = nodes.get(link.block_id);
            if (t_node == undefined || linked_node == undefined) {
                console.error(`Cannot link current node (id: ${block.id}, slot: ${link.out_id}) with target node (id: ${link.block_id}, slot: ${link.in_id})`);
                console.log("Current node", linked_node);
                console.log("Target node", t_node);
                console.log("Link data", link);
            }
            else {
                console.debug(`Linking current node (id: ${linked_node.id}, slot: ${link.out_id}) with target node (id: ${link.block_id}, slot: ${link.in_id}) of type: ${block.outputs[link.out_id].io_type}`);
                linked_node.connect(link.out_id, t_node, link.in_id);
            }
        });
    });
}
function nodes_to_block(graph, nodes) {
    let hashmap = new Map();
    let link_ids = new Set();
    // creating the blocks
    nodes.forEach((node) => {
        let block = new _types__WEBPACK_IMPORTED_MODULE_1__["Block"]();
        // identity
        block.id = node.id;
        block.pos = node.pos;
        block.title = node.title;
        block.type = node.type;
        // values
        if (node.properties["value"] != undefined)
            block.value = node.properties["value"];
        // IO
        node.inputs.forEach((input) => {
            var _a;
            let type = input.type;
            if (String(type) === "0")
                type = "anything";
            block.inputs.push(new _types__WEBPACK_IMPORTED_MODULE_1__["BlockIO"]("in", input.name, type, (_a = input.link) === null || _a === void 0 ? void 0 : _a.toString()));
        });
        node.outputs.forEach((output) => {
            var _a;
            block.outputs.push(new _types__WEBPACK_IMPORTED_MODULE_1__["BlockIO"]("out", output.name, output.type, node.properties["value"]));
            (_a = output.links) === null || _a === void 0 ? void 0 : _a.forEach((link) => link_ids.add(link));
        });
        hashmap.set(block.id, block);
    });
    // adding links
    link_ids.forEach((idx) => {
        let link = graph.links[idx];
        let b_origin = hashmap.get(link.origin_id);
        let b_target = hashmap.get(link.target_id);
        b_origin.links.push(new _types__WEBPACK_IMPORTED_MODULE_1__["BlockLinks"](link.origin_slot, link.target_slot, b_target.id));
    });
    return Array.from(hashmap.values());
}
function blocks_to_ast(blocks) {
    let tree = new _compiler_ast_ast__WEBPACK_IMPORTED_MODULE_0__["AST"]();
    blocks.forEach((block) => {
        // Identity
        let id_stmts = [
            new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IdentityStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Identifier"]("id"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](block.id)),
            new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IdentityStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Identifier"]("type"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](`"${block.type}"`)),
            new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IdentityStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Identifier"]("pos"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](block.pos.join(","))),
        ];
        if (block.title != "" && block.title != undefined) {
            id_stmts.push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IdentityStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Identifier"]("title"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](`"${block.title}"`)));
        }
        if (block.value != undefined) {
            id_stmts.push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IdentityStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Identifier"]("value"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](`${block.value}`)));
        }
        let id_block = new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["BlockIdentity"](id_stmts);
        // I/O
        let io_stmts = [];
        block.inputs.forEach((input) => {
            io_stmts.push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IOStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"]("in"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](input.name), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](input.io_type), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](input.value)));
        });
        block.outputs.forEach((ouput) => {
            io_stmts.push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["IOStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"]("out"), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](ouput.name), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](ouput.io_type), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](ouput.value)));
        });
        let io_block = new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["BlockIO"](io_stmts);
        // links
        let links = [];
        block.links.forEach((link) => {
            links.push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["LinkStatement"](new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](link.in_id), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](link.out_id), new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Value"](link.block_id)));
        });
        let link_block = new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["BlockLinks"](links);
        tree.get_root()
            .get_children()
            .push(new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_3__["Block"](id_block, io_block, link_block));
    });
    return tree;
}



/***/ }),

/***/ "DK5C":
/*!********************************!*\
  !*** ./src/app/graph/types.ts ***!
  \********************************/
/*! exports provided: Block, BlockIO, BlockLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockIO", function() { return BlockIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockLinks", function() { return BlockLinks; });
/* harmony import */ var _compiler_ast_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../compiler/ast/types */ "/fG4");

class Block {
    constructor() {
        this.id = -1;
        this.type = "";
        this.pos = [0, 0];
        this.inputs = [];
        this.outputs = [];
        this.links = [];
    }
    static from_ast_node(node) {
        const block_id = node.get_children()[0];
        const block_io = node.get_children()[1];
        const block_links = node.get_children()[2] || new _compiler_ast_types__WEBPACK_IMPORTED_MODULE_0__["ASTNode"]("empty");
        let res = new Block();
        // parsing id
        block_id.get_children().forEach((id_st) => {
            const param = id_st.get_children()[0].content;
            switch (param) {
                case "id":
                    const id = id_st.get_children()[1].content;
                    res.id = parseInt(id);
                    break;
                case "type":
                    const b_type = id_st.get_children()[1].content.slice(1, -1);
                    res.type = b_type;
                    break;
                case "pos":
                    const pos_v = id_st.get_children()[1].content.slice(1, -1);
                    const data = pos_v.split(",");
                    res.pos = [parseInt(data[0]), parseInt(data[1])];
                    break;
                case "title":
                    const t_value = id_st
                        .get_children()[1]
                        .content.slice(1, -1);
                    res.title = t_value;
                    break;
                case "value":
                    const v_value = id_st.get_children()[1].content;
                    res.value = v_value;
                    break;
                default:
                    console.error(`Couldn't understand id_param: ${param}, with arg: ${id_st.get_children()[1].content}`);
                    break;
            }
        });
        // parsing IO
        block_io.get_children().forEach((io_st) => {
            const in_out = io_st.get_children()[0].content;
            const name = io_st.get_children()[1].content;
            const io_type = io_st.get_children()[2].content;
            const value = io_st.get_children()[3].content;
            const block_io = new BlockIO(in_out, name, io_type, value);
            if (in_out == "in")
                res.inputs.push(block_io);
            else
                res.outputs.push(block_io);
        });
        // parsing links
        block_links.get_children().forEach((link_st) => {
            const out_id = parseInt(String(link_st.get_children()[0].content));
            const in_id = parseInt(String(link_st.get_children()[1].content));
            const block_id = parseInt(String(link_st.get_children()[2].content));
            res.links.push(new BlockLinks(out_id, in_id, block_id));
        });
        return res;
    }
    export_string() {
        let res = "====\n";
        // identity
        res += `\tid: ${this.id}\n`;
        res += `\ttype: "${this.type}"\n`;
        res += `\tpos: (${this.pos[0]}, ${this.pos[1]})\n`;
        if (this.title != undefined)
            res += `\ttitle: "${this.title}"\n`;
        if (this.value != undefined)
            res += `\tvalue: ${this.value}\n`;
        // i/o
        res += "\t----\n";
        this.inputs.forEach((input) => {
            res += `\tin: "${input.name}", ${input.io_type}, ${input.value}\n`;
        });
        this.outputs.forEach((output) => {
            res += `\tout: "${output.name}", ${output.io_type}, ${output.value}\n`;
        });
        // connexions
        if (this.links.length > 0) {
            res += "\t----\n";
            this.links.forEach((link) => {
                res += `\tconn: ${link.out_id} ---> ${link.block_id}, ${link.in_id}\n`;
            });
        }
        res += "====\n\n";
        return res;
    }
}
class BlockIO {
    constructor(in_or_out, name, io_type, value) {
        this.in_or_out = in_or_out;
        this.name = name;
        this.io_type = io_type;
        this.value = value;
    }
}
class BlockLinks {
    constructor(out_id, in_id, block_id) {
        this.out_id = out_id;
        this.in_id = in_id;
        this.block_id = block_id;
    }
}



/***/ }),

/***/ "E4Zh":
/*!************************************************!*\
  !*** ./src/node_types/native_types/boolean.ts ***!
  \************************************************/
/*! exports provided: Booleen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booleen", function() { return Booleen; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Booleen extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Booléen";
        this.addOutput("", "boolean");
        this.addProperty("value", true, "boolean");
        this.addWidget("toggle", "value", true, "value");
        this.widgets_up = true;
    }
    onExecute() {
        this.setOutputData(0, this.properties["value"]);
    }
    onAction(action) {
        this.setValue(!this.properties.value);
    }
    onGetInputs() {
        return [["toggle", litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LiteGraph"].ACTION]];
    }
}


/***/ }),

/***/ "EKYI":
/*!*****************************************!*\
  !*** ./src/compiler/visitor/visitor.ts ***!
  \*****************************************/
/*! exports provided: Visitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitor", function() { return Visitor; });
function printIfDebug(debug, message) {
    if (debug) {
        console.log(message);
    }
}
class Visitor {
    constructor(tree) {
        this.nb_branches = 0;
        this.blocks = [];
        this.has_start = false;
        this.debug = true;
        this.current_identifier = "";
        this.tree = tree;
    }
    visit_tree() {
        printIfDebug(this.debug, "---Starting visiting tree");
        this.tree.get_root().accept(this);
        printIfDebug(this.debug, "---Ending visiting tree");
        // checking branches
        if (this.nb_branches != 0)
            console.error("There are branches that were not visited.. Nb branches left: ", this.nb_branches);
        else
            console.info("All nodes visited successfully!");
        // adding the last block to the list
        if (this.current_block != undefined)
            this.blocks.push(this.current_block);
        // if there wasn't a start block
        if (!this.has_start)
            console.error("This program has no start, it won't compile!");
    }
    visit_children(node) {
        if (node.get_children().length == 0) {
            this.nb_branches--;
            return;
        }
        node.get_children().forEach((child) => {
            this.nb_branches++;
            child.accept(this);
        });
        this.nb_branches--;
    }
    is_current_block_valid() {
        if (this.current_block == undefined)
            throw Error("There is no valid block to enter data into");
    }
    visit_root(_node) {
        printIfDebug(this.debug, "Root");
    }
    visit_block(_node) {
        printIfDebug(this.debug, "----- BLOCK -----");
    }
    visit_block_identity(_node) {
        printIfDebug(this.debug, "--IDENTITY");
    }
    visit_block_io(_node) {
        printIfDebug(this.debug, "--IO");
    }
    visit_block_links(_node) {
        printIfDebug(this.debug, "--LINKS");
    }
    visit_identifier(node) {
        this.current_identifier = node.content;
        this.visit_children(node);
    }
    visit_value(node) {
        this.current_value = node.content;
        this.visit_children(node);
    }
    visit_identity_statement(_node) {
        printIfDebug(this.debug, `${this.current_identifier}: ${this.current_value}`);
    }
    visit_io_statement(_node) { }
    visit_link_statement(_node) { }
}


/***/ }),

/***/ "Fr2j":
/*!************************************************!*\
  !*** ./src/compiler/visitor/pretty_printer.ts ***!
  \************************************************/
/*! exports provided: PrettyPrinter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrinter", function() { return PrettyPrinter; });
/* harmony import */ var _app_graph_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/graph/types */ "DK5C");
/* harmony import */ var _visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitor */ "EKYI");


class PrettyPrinter extends _visitor__WEBPACK_IMPORTED_MODULE_1__["Visitor"] {
    constructor(tree) {
        super(tree);
        this.code = "";
    }
    pretty_print() {
        this.visit_tree();
        console.log(this.tree);
        return this.code;
    }
    visit_root(node) {
        this.visit_children(node);
    }
    visit_block(node) {
        this.code += "====\n";
        if (this.current_block != undefined)
            this.blocks.push(this.current_block);
        this.current_block = new _app_graph_types__WEBPACK_IMPORTED_MODULE_0__["Block"]();
        super.visit_block(node);
        this.visit_children(node);
        this.code += "====\n";
    }
    visit_block_identity(node) {
        super.visit_block_identity(node);
        this.visit_children(node);
    }
    visit_block_io(node) {
        this.code += "  ----\n";
        super.visit_block_io(node);
        this.visit_children(node);
    }
    visit_block_links(node) {
        super.visit_block_links(node);
        this.visit_children(node);
    }
    visit_identity_statement(node) {
        this.visit_children(node);
        this.is_current_block_valid();
        switch (this.current_identifier) {
            case "id":
                this.current_block.id = parseInt(this.current_value);
                break;
            case "type":
                this.current_block.type = this.current_value.slice(1, -1);
                if (this.current_block.type == "utils/prgm_init") {
                    if (this.has_start)
                        throw Error("Double init blocks! Aborting");
                    this.has_start = true;
                }
                break;
            case "title":
                this.current_block.title = this.current_value.slice(1, -1);
                break;
            case "pos":
                const data = this.current_value.split(",");
                this.current_block.pos = [
                    parseInt(data[0]),
                    parseInt(data[1]),
                ];
                this.current_value = `(${this.current_block.pos})`;
                break;
            case "value":
                this.current_block.value = this.current_value;
                break;
            default:
                throw Error(`Couldn't understand identifier: ${this.current_identifier}, with value: ${this.current_value}`);
        }
        this.code += `  ${this.current_identifier}: ${this.current_value}\n`;
        super.visit_identity_statement(node);
    }
    visit_io_statement(node) {
        this.nb_branches += 4;
        // in/out
        node.get_children()[0].accept(this);
        const in_out = this.current_value;
        // name
        node.get_children()[1].accept(this);
        const name = this.current_value;
        // io type
        node.get_children()[2].accept(this);
        const io_type = this.current_value;
        // value
        node.get_children()[3].accept(this);
        const value = this.current_value;
        this.is_current_block_valid();
        this.code += `  ${in_out}: "${name}", ${io_type}, ${value}\n`;
        const block_io = new _app_graph_types__WEBPACK_IMPORTED_MODULE_0__["BlockIO"](in_out, name, io_type, value);
        if (in_out == "in")
            this.current_block.inputs.push(block_io);
        else
            this.current_block.outputs.push(block_io);
    }
    visit_link_statement(node) {
        this.nb_branches += 3;
        // out_id
        node.get_children()[0].accept(this);
        const out_id = parseInt(this.current_value);
        // in_id
        node.get_children()[1].accept(this);
        const in_id = parseInt(this.current_value);
        // block id
        node.get_children()[2].accept(this);
        const block_id = parseInt(this.current_value);
        this.is_current_block_valid();
        if (this.current_block.links.length == 0)
            this.code += "  ----\n";
        this.code += `  conn: ${in_id} ---> ${block_id}, ${out_id}\n`;
        this.current_block.links.push(new _app_graph_types__WEBPACK_IMPORTED_MODULE_0__["BlockLinks"](out_id, in_id, block_id));
    }
}


/***/ }),

/***/ "Gnqt":
/*!*******************************!*\
  !*** ./src/compiler/types.ts ***!
  \*******************************/
/*! exports provided: Word, Token, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
class Word {
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
    constructor(kind, regexp) {
        this.kind = kind;
        this.regexp = regexp;
    }
}
class Token {
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
    constructor(position, word, value) {
        this.position = position;
        this.word = word;
        this.value = value;
    }
}
class Position {
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
    constructor(line, col) {
        this.line = line;
        this.col = col;
    }
}


/***/ }),

/***/ "HXv2":
/*!******************************************!*\
  !*** ./src/node_types/maths/addition.ts ***!
  \******************************************/
/*! exports provided: Addition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addition", function() { return Addition; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Addition extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Addition";
        this.addInput("A", "number");
        this.addInput("B", "number");
        this.addOutput("A+B", "number");
        this.properties = { precision: 1 };
    }
    onExecute() {
        let A = this.getInputData(0);
        if (A === undefined)
            A = 0;
        let B = this.getInputData(1);
        if (B === undefined)
            B = 0;
        this.setOutputData(0, A + B);
    }
}


/***/ }),

/***/ "J21m":
/*!***************************************!*\
  !*** ./src/app/graph/graph.module.ts ***!
  \***************************************/
/*! exports provided: GraphModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphModule", function() { return GraphModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph.component */ "k/13");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GraphModule {
}
GraphModule.ɵfac = function GraphModule_Factory(t) { return new (t || GraphModule)(); };
GraphModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GraphModule, bootstrap: [_graph_component__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"]] });
GraphModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GraphModule, { declarations: [_graph_component__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]], exports: [_graph_component__WEBPACK_IMPORTED_MODULE_1__["GraphComponent"]] }); })();


/***/ }),

/***/ "Ja+F":
/*!**************************************************!*\
  !*** ./src/app/upload_modal/upload.component.ts ***!
  \**************************************************/
/*! exports provided: UploadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDialogComponent", function() { return UploadDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class UploadDialogComponent {
    constructor(formBuilder, dialogRef) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.program = "";
        this.form = this.form = this.formBuilder.group({
            program: "",
        });
    }
    /*ngOnInit() {
        this.form = this.formBuilder.group({
            filename: "",
        });
    }*/
    submit(form) {
        this.dialogRef.close(`${form.value.program}`);
    }
}
UploadDialogComponent.ɵfac = function UploadDialogComponent_Factory(t) { return new (t || UploadDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
UploadDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadDialogComponent, selectors: [["ng-component"]], decls: 11, vars: 1, consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "form_field"], ["rows", "10", "matInput", "", "formControlName", "program", "placeholder", "Enter program content", 1, "program_input"], ["mat-button", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function UploadDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UploadDialogComponent_Template_form_ngSubmit_0_listener() { return ctx.submit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload diagram contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".form_field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%] {\n    float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJ1cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtX2ZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "MxRj":
/*!***********************************************!*\
  !*** ./src/node_types/native_types/nombre.ts ***!
  \***********************************************/
/*! exports provided: Nombre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nombre", function() { return Nombre; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Nombre extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Nombre";
        this.addOutput("value", "number");
        this.addProperty("value", 1.0, "number");
        this.value_widget = this.addWidget("number", "value", 1, "value");
        this.widgets_up = true;
    }
    onExecute() {
        this.setOutputData(0, this.properties["value"]);
    }
    setValue(v) {
        this.properties["value"] = parseFloat(v);
    }
    onDrawBackground(_) {
        //show the current value
        this.outputs[0].label = this.properties["value"].toFixed(3);
        this.value_widget.value = this.properties["value"];
    }
}


/***/ }),

/***/ "QMkb":
/*!***********************************************!*\
  !*** ./src/node_types/utils/program_start.ts ***!
  \***********************************************/
/*! exports provided: ProgramStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramStart", function() { return ProgramStart; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class ProgramStart extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Program Start";
        this.addOutput("next", "program_flow");
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graph/graph.component */ "k/13");
/* harmony import */ var _graph_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph/utils */ "CHa0");
/* harmony import */ var _compiler_generator_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compiler/generator/generator */ "8Eix");
/* harmony import */ var _upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload_modal/upload.component */ "Ja+F");
/* harmony import */ var src_compiler_visitor_pretty_printer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/compiler/visitor/pretty_printer */ "Fr2j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.code_content = "Click the refresh button to generate python code from the diagram";
    }
    downloadFile(data, filename) {
        var a = document.createElement("a");
        a.setAttribute("display", "none");
        document.body.appendChild(a);
        const blob = new Blob([data], { type: "text/text" });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
    saveGraph() {
        console.log("Saving");
        if (this.node_graph != undefined) {
            let new_blocks = Object(_graph_utils__WEBPACK_IMPORTED_MODULE_1__["nodes_to_block"])(this.node_graph.graph, this.node_graph.graph.serialize().nodes);
            this.node_graph.ast = Object(_graph_utils__WEBPACK_IMPORTED_MODULE_1__["blocks_to_ast"])(new_blocks);
            let pretty_printer = new src_compiler_visitor_pretty_printer__WEBPACK_IMPORTED_MODULE_4__["PrettyPrinter"](this.node_graph.ast);
            this.code_content = pretty_printer.pretty_print();
            this.downloadFile(this.code_content, "MyAwesomeProgram.vpy");
        }
        else {
            console.log("node graph undefined...");
        }
    }
    refreshCode() {
        console.log("Turning the nodes into a beautiful tree");
        this.node_graph.update_nodes();
        console.log("Generating code...");
        this.code_content = Object(_compiler_generator_generator__WEBPACK_IMPORTED_MODULE_2__["ASTToPythonCode"])(this.node_graph.ast);
        console.log("Visiting tree..");
        let printer = new src_compiler_visitor_pretty_printer__WEBPACK_IMPORTED_MODULE_4__["PrettyPrinter"](this.node_graph.ast);
        console.log(printer.pretty_print());
    }
    sendFile(target) {
        const files = target.files;
        console.log(files);
    }
    uploadFile() {
        console.log("Uploading data");
        let upload_dialog = this.dialog.open(_upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadDialogComponent"], {
            maxWidth: "90vw",
            minWidth: "60vw",
        });
        upload_dialog.afterClosed().subscribe((program) => {
            if (program == undefined || program == "") {
                console.info("No program given.. exiting..");
                return;
            }
            console.log("Loading program...");
            this.node_graph.parseProgram(program);
            this.node_graph.add_tree_to_graph();
        });
    }
    changeCode(value) {
        this.code_content = value;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_graph_graph_component__WEBPACK_IMPORTED_MODULE_0__["GraphComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.node_graph = _t.first);
    } }, decls: 20, vars: 1, consts: [["color", "primary"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "click"], ["type", "file", "id", "file-upload", 2, "display", "none", 3, "change"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon", 3, "click"], [1, "main-container"], [1, "left-container"], [1, "right-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "BluePrintF - Alexandre Froehlich");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.refreshCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { return ctx.uploadFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AppComponent_Template_input_change_10_listener($event) { return ctx.sendFile($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.saveGraph(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "node-graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.code_content);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _graph_graph_component__WEBPACK_IMPORTED_MODULE_0__["GraphComponent"]], styles: ["[_nghost-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.main-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: calc(100% - 64px);\n}\n\n.left-container[_ngcontent-%COMP%] {\n    flex: 0 1 65%;\n    max-width: 65%;\n    overflow: hidden;\n}\n\n.right-container[_ngcontent-%COMP%] {\n    flex: 0 1 35%;\n    display: flex;\n    max-width: 35%;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    border: 1px solid black;\n    overflow-y: auto;\n    padding-left: 1em;\n}\n\n.left-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn1cblxuLmxlZnQtY29udGFpbmVyIHtcbiAgICBmbGV4OiAwIDEgNjUlO1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yaWdodC1jb250YWluZXIge1xuICAgIGZsZXg6IDAgMSAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDM1JTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuLmxlZnQtY29udGFpbmVyIGNhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "UtAe":
/*!***************************************!*\
  !*** ./src/node_types/utils/print.ts ***!
  \***************************************/
/*! exports provided: Print */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Print", function() { return Print; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Print extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Print";
        this.addInput("prev", "program_flow");
        this.addInput("message", "string");
        this.addOutput("next", "program_flow");
        this.properties = { precision: 1 };
    }
    onExecute() {
        let msg = this.getInputData(1);
        if (msg === undefined)
            msg = "";
        console.log(msg);
    }
}


/***/ }),

/***/ "Vnbs":
/*!*********************************!*\
  !*** ./src/compiler/ast/ast.ts ***!
  \*********************************/
/*! exports provided: AST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AST", function() { return AST; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "/fG4");

class AST {
    constructor(root) {
        this.root = new _types__WEBPACK_IMPORTED_MODULE_0__["Root"]();
        if (root != undefined)
            this.root.add_child(root);
    }
    get_root() {
        return this.root;
    }
    /* https://stackoverflow.com/questions/22038162/printing-a-tree-structure-in-a-list-like-manner-storing-the-indent-strings-whi */
    print_tree_v2() {
        let res = "Root\n";
        treeIndent(this.get_root().children, {
            hasNextSibling: "┣",
            isLastChild: "┗",
            ancestorHasNextSibling: "┃",
            ancestorIsLastChild: " ",
        }, function (element, indent) {
            let text = element.name;
            if (element.children.length == 0)
                text += `(${element.content})`;
            res += indent.join(" ") + " " + text + "\n";
        }, []);
        console.log(res);
    }
}
function treeIndent(branch, cfg, decorator, indent) {
    branch.forEach(function (node, i) {
        decorator(node, indent.concat(i === branch.length - 1 ? cfg.isLastChild : cfg.hasNextSibling));
        treeIndent(node.children, cfg, decorator, [
            ...indent,
            i === branch.length - 1
                ? cfg.ancestorIsLastChild
                : cfg.ancestorHasNextSibling,
        ]);
    });
}


/***/ }),

/***/ "Y2H/":
/*!***************************************!*\
  !*** ./src/node_types/maths/index.ts ***!
  \***************************************/
/*! exports provided: Addition, Soustraction, Multiplication, Division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addition */ "HXv2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Addition", function() { return _addition__WEBPACK_IMPORTED_MODULE_0__["Addition"]; });

/* harmony import */ var _soustraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soustraction */ "gKFA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Soustraction", function() { return _soustraction__WEBPACK_IMPORTED_MODULE_1__["Soustraction"]; });

/* harmony import */ var _multiplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiplication */ "iEe+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiplication", function() { return _multiplication__WEBPACK_IMPORTED_MODULE_2__["Multiplication"]; });

/* harmony import */ var _division__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./division */ "t1bN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return _division__WEBPACK_IMPORTED_MODULE_3__["Division"]; });








/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _graph_graph_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./graph/graph.module */ "J21m");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload_modal/upload.component */ "Ja+F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _graph_graph_module__WEBPACK_IMPORTED_MODULE_9__["GraphModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _graph_graph_module__WEBPACK_IMPORTED_MODULE_9__["GraphModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]] }); })();


/***/ }),

/***/ "aUbC":
/*!*************************************!*\
  !*** ./src/compiler/lexer/lexer.ts ***!
  \*************************************/
/*! exports provided: simpleCLexer, lex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simpleCLexer", function() { return simpleCLexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lex", function() { return lex; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "Gnqt");

/**
 * A simple function to try to split a content
 * in tokens using a regular expression
 *
 * @param src - the source content
 *
 * @example
 * ```typescript
 * simpleCLexer("void main() {}");
 * ```
 * Would print "void", "main", "(", ")", "{", "}" to the console
 */
function simpleCLexer(src) {
    const re = /void|main|\(|\)|\{|\}|[a-z]+|\=|[0-9]+|\s+/i;
    // while there is still content to process
    while (src.length > 0) {
        // getting the matches
        const matches = src.match(re);
        if (matches == null) {
            // we got no matches
            console.log("unknown token: ", src);
            break;
        }
        // getting the first match
        const prefix = matches[0];
        // logging the result
        console.log("token: ", prefix);
        // updating the src content
        src = src.substr(prefix.length, src.length);
    }
}
/**
 *
 * @param src - the content to lex
 * @param dict - dictionary of words, the grammar of the lexer
 * @returns - a
 */
function lex(src, dict) {
    const res = [];
    let line_number = 1;
    let col_number = 1;
    while (src.length > 0) {
        let foundMatch = false;
        let matches;
        for (const w of dict) {
            matches = src.match(w.regexp);
            if (matches != null && matches.index == 0) {
                const prefix = matches[0];
                src = src.substr(prefix.length, src.length);
                // Generate new token
                if (["NEW_LINE" /* NEW_LINE */, "SPACE" /* SPACE */, "INDENTATION" /* INDENTATION */].indexOf(w.kind) == -1)
                    res.push(new _types__WEBPACK_IMPORTED_MODULE_0__["Token"](new _types__WEBPACK_IMPORTED_MODULE_0__["Position"](line_number, col_number), w, prefix));
                // if newline, change line
                col_number += prefix.length;
                if (w.kind === "NEW_LINE" /* NEW_LINE */) {
                    line_number++;
                    col_number = 1;
                }
                // on a trouvé donc plus besoin de chercher
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) {
            console.error("unknown token: '", src, "'");
            break;
        }
    }
    return res;
}


/***/ }),

/***/ "gKFA":
/*!**********************************************!*\
  !*** ./src/node_types/maths/soustraction.ts ***!
  \**********************************************/
/*! exports provided: Soustraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Soustraction", function() { return Soustraction; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Soustraction extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Soustraction";
        this.addInput("A", "number");
        this.addInput("B", "number");
        this.addOutput("A-B", "number");
        this.properties = { precision: 1 };
    }
    onExecute() {
        let A = this.getInputData(0);
        if (A === undefined)
            A = 0;
        let B = this.getInputData(1);
        if (B === undefined)
            B = 0;
        this.setOutputData(0, A - B);
    }
}


/***/ }),

/***/ "iEe+":
/*!************************************************!*\
  !*** ./src/node_types/maths/multiplication.ts ***!
  \************************************************/
/*! exports provided: Multiplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiplication", function() { return Multiplication; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Multiplication extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Multiplication";
        this.addInput("A", "number");
        this.addInput("B", "number");
        this.addOutput("A*B", "number");
        this.properties = { precision: 1 };
    }
    onExecute() {
        let A = this.getInputData(0);
        if (A === undefined)
            A = 0;
        let B = this.getInputData(1);
        if (B === undefined)
            B = 0;
        this.setOutputData(0, A * B);
    }
}


/***/ }),

/***/ "k/13":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_types_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_types/registry */ "6sZ/");
/* harmony import */ var _compiler_lexer_lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../compiler/lexer/lexer */ "aUbC");
/* harmony import */ var _compiler_lexer_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../compiler/lexer/utils */ "5u9O");
/* harmony import */ var _compiler_parser_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../compiler/parser/parser */ "v5EX");
/* harmony import */ var _compiler_lexer_words__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../compiler/lexer/words */ "85Sp");
/* harmony import */ var src_compiler_ast_ast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/compiler/ast/ast */ "Vnbs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "CHa0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class GraphComponent {
    constructor() {
        this.title = "BluePrintF";
        this.ast = new src_compiler_ast_ast__WEBPACK_IMPORTED_MODULE_7__["AST"]();
        this.graph = new litegraph_js__WEBPACK_IMPORTED_MODULE_1__["LGraph"]();
        this.nodes = [];
    }
    parseProgram(program) {
        let tokens = Object(_compiler_lexer_lexer__WEBPACK_IMPORTED_MODULE_3__["lex"])(program, _compiler_lexer_words__WEBPACK_IMPORTED_MODULE_6__["default"]);
        Object(_compiler_lexer_utils__WEBPACK_IMPORTED_MODULE_4__["printTokens"])(tokens);
        let parser = new _compiler_parser_parser__WEBPACK_IMPORTED_MODULE_5__["Parser"](tokens);
        parser.parse();
        parser.ast.print_tree_v2();
        this.ast = parser.ast;
    }
    loadingTree() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prgm = yield fetch("https://nightlyside.github.io/Typescript-Lexer-Parser/assets/data/simple_add_func.vpy");
            this.parseProgram(yield prgm.text());
        });
    }
    onResize(_) {
        if (this.canvas != undefined) {
            this.fitToContainer(this.canvas.canvas);
        }
    }
    fitToContainer(canvas) {
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            litegraph_js__WEBPACK_IMPORTED_MODULE_1__["LiteGraph"].clearRegisteredTypes();
            Object(_node_types_registry__WEBPACK_IMPORTED_MODULE_2__["default"])();
            this.graph = new litegraph_js__WEBPACK_IMPORTED_MODULE_1__["LiteGraph"].LGraph();
            this.canvas = new litegraph_js__WEBPACK_IMPORTED_MODULE_1__["LGraphCanvas"]("#graph-canvas", this.graph);
            this.fitToContainer(this.canvas.canvas);
            //node_time.connect(0, node_console, 1);
            yield this.loadingTree();
            this.add_tree_to_graph();
        });
    }
    add_tree_to_graph() {
        let blocks = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["ast_to_block"])(this.ast);
        let nodes = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["block_to_nodes"])(blocks);
        this.graph = new litegraph_js__WEBPACK_IMPORTED_MODULE_1__["LGraph"]();
        this.graph.attachCanvas(this.canvas);
        nodes.forEach((node) => {
            this.graph.add(node);
        });
        this.nodes = Array.from(nodes.values());
        Object(_utils__WEBPACK_IMPORTED_MODULE_8__["linking_nodes_on_graph"])(nodes, blocks);
        this.graph.runStep(1);
    }
    update_nodes() {
        this.nodes = this.graph.serialize().nodes;
        let blocks = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["nodes_to_block"])(this.graph, this.nodes);
        this.ast = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["blocks_to_ast"])(blocks);
    }
}
GraphComponent.ɵfac = function GraphComponent_Factory(t) { return new (t || GraphComponent)(); };
GraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: GraphComponent, selectors: [["node-graph"]], hostBindings: function GraphComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("resize", function GraphComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 0, consts: [["id", "graph-canvas", "width", "1024", "height", "720", 2, "border", "1px solid"]], template: function GraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "canvas", 0);
    } }, styles: ["[_nghost-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"] });


/***/ }),

/***/ "q5J3":
/*!****************************************!*\
  !*** ./src/compiler/parser/grammar.ts ***!
  \****************************************/
/*! exports provided: parse_block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse_block", function() { return parse_block; });
/* harmony import */ var _ast_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ast/types */ "/fG4");

const DEBUG_PRINT = false;
function print(indent, msg) {
    if (DEBUG_PRINT)
        console.log(Array(indent * 2)
            .fill(" ")
            .join("") + msg);
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
function parse_block(parser) {
    const indent = parser.indent();
    print(indent, ">>> Block");
    // --- logic
    let block;
    parser.expect("DOUBLE_SEP" /* DOUBLE_SEP */);
    const identity = parse_block_identity(parser);
    parser.expect("SIMPLE_SEP" /* SIMPLE_SEP */);
    const io = parse_block_io(parser);
    const next_sep = parser.show_next();
    if (next_sep.word.kind == "SIMPLE_SEP" /* SIMPLE_SEP */) {
        parser.expect("SIMPLE_SEP" /* SIMPLE_SEP */);
        const links = parse_block_links(parser);
        parser.expect("DOUBLE_SEP" /* DOUBLE_SEP */);
        block = new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Block"](identity, io, links);
    }
    else {
        parser.expect("DOUBLE_SEP" /* DOUBLE_SEP */);
        block = new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Block"](identity, io);
    }
    // --- end of logic
    print(indent, "<<< Block");
    parser.unindent();
    return block;
}
function parse_block_identity(parser) {
    const indent = parser.indent();
    print(indent, ">>> BlockIdentity");
    // --- logic
    let parameters = [];
    let next = parser.show_next();
    while (next.word.kind != "DOUBLE_SEP" /* DOUBLE_SEP */ &&
        next.word.kind != "SIMPLE_SEP" /* SIMPLE_SEP */) {
        parameters.push(parse_identity_statement(parser));
        next = parser.show_next();
    }
    // --- end of logic
    print(indent, "<<< BlockIdentity");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["BlockIdentity"](parameters);
}
function parse_block_io(parser) {
    const indent = parser.indent();
    print(indent, ">>> BlockI/O");
    // --- logic
    let ins_outs = [];
    let next = parser.show_next();
    while (next.word.kind != "DOUBLE_SEP" /* DOUBLE_SEP */ &&
        next.word.kind != "SIMPLE_SEP" /* SIMPLE_SEP */) {
        ins_outs.push(parse_io_statement(parser));
        next = parser.show_next();
    }
    // --- end of logic
    print(indent, "<<< BlockI/O");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["BlockIO"](ins_outs);
}
function parse_block_links(parser) {
    const indent = parser.indent();
    print(indent, ">>> BlockLinks");
    // --- logic
    let links = [];
    let next = parser.show_next();
    while (next.word.kind != "DOUBLE_SEP" /* DOUBLE_SEP */ &&
        next.word.kind != "SIMPLE_SEP" /* SIMPLE_SEP */) {
        links.push(parse_link_statement(parser));
        next = parser.show_next();
    }
    // --- end of logic
    print(indent, "<<< BlockLinks");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["BlockLinks"](links);
}
function parse_identity_statement(parser) {
    const indent = parser.indent();
    print(indent, ">>> IdentityStatement");
    // --- logic
    const id = parser.expect("IDENTIFIER" /* IDENTIFIER */);
    parser.expect("COLON" /* COLON */);
    const value = parser.expectChoice([
        "INTEGER" /* INTEGER */,
        "FLOAT" /* FLOAT */,
        "BOOL" /* BOOL */,
        "IDENTIFIER" /* IDENTIFIER */,
        "STRING" /* STRING */,
        "VECTOR" /* VECTOR */,
    ]);
    // --- end of logic
    print(indent, "<<< IdentityStatement");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["IdentityStatement"](new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Identifier"](id.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](value.value));
}
function parse_io_statement(parser) {
    const indent = parser.indent();
    print(indent, ">>> IdentityStatement");
    // --- logic
    const accepted_values = [
        "INTEGER" /* INTEGER */,
        "FLOAT" /* FLOAT */,
        "BOOL" /* BOOL */,
        "IDENTIFIER" /* IDENTIFIER */,
        "STRING" /* STRING */,
    ];
    const in_out = parser.expect("IDENTIFIER" /* IDENTIFIER */);
    parser.expect("COLON" /* COLON */);
    const name = parser.expectChoice(accepted_values);
    parser.expect("COMMA" /* COMMA */);
    const type = parser.expect("IDENTIFIER" /* IDENTIFIER */);
    parser.expect("COMMA" /* COMMA */);
    const value = parser.expectChoice([
        ...accepted_values,
        "LINKED_ID" /* LINKED_ID */,
    ]);
    // --- end of logic
    print(indent, "<<< IdentityStatement");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["IOStatement"](new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](in_out.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](name.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](type.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](value.value));
}
function parse_link_statement(parser) {
    const indent = parser.indent();
    print(indent, ">>> LinkStatement");
    // --- logic
    parser.expect("IDENTIFIER" /* IDENTIFIER */);
    parser.expect("COLON" /* COLON */);
    const out_id = parser.expect("INTEGER" /* INTEGER */);
    parser.expect("OP_MINUS" /* OP_MINUS */);
    parser.expect("OP_MINUS" /* OP_MINUS */);
    parser.expect("OP_MINUS" /* OP_MINUS */);
    parser.expect("OP_GT" /* OP_GT */); // --->
    const block_id = parser.expect("INTEGER" /* INTEGER */);
    parser.expect("COMMA" /* COMMA */);
    const in_id = parser.expect("INTEGER" /* INTEGER */);
    // --- end of logic
    print(indent, "<<< LinkStatement");
    parser.unindent();
    return new _ast_types__WEBPACK_IMPORTED_MODULE_0__["LinkStatement"](new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](out_id.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](in_id.value), new _ast_types__WEBPACK_IMPORTED_MODULE_0__["Value"](block_id.value));
}



/***/ }),

/***/ "qNX1":
/*!***********************************************!*\
  !*** ./src/node_types/native_types/string.ts ***!
  \***********************************************/
/*! exports provided: String */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "String", function() { return String; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class String extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "String";
        this.size = [180, 30];
        this.addOutput("", "string");
        this.addProperty("value", "", "string");
        this.addWidget("text", "value", "", "value");
        this.widgets_up = true;
    }
    onExecute() {
        this.setOutputData(0, parseFloat(this.properties["value"]));
    }
}


/***/ }),

/***/ "t1bN":
/*!******************************************!*\
  !*** ./src/node_types/maths/division.ts ***!
  \******************************************/
/*! exports provided: Division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return Division; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class Division extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "Division";
        this.addInput("A", "number");
        this.addInput("B", "number");
        this.addOutput("A/B", "number");
        this.properties = { precision: 1 };
    }
    onExecute() {
        let A = this.getInputData(0);
        if (A === undefined)
            A = 0;
        let B = this.getInputData(1);
        if (B === undefined)
            B = 1;
        if (B === 0)
            this.setOutputData(0, Infinity);
        else
            this.setOutputData(0, A - B);
    }
}


/***/ }),

/***/ "v5EX":
/*!***************************************!*\
  !*** ./src/compiler/parser/parser.ts ***!
  \***************************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _grammar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grammar */ "q5J3");
/* harmony import */ var _ast_ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ast/ast */ "Vnbs");


class ParsingError extends Error {
    constructor(message) {
        super(message);
        this.name = "ParsingError";
        if (message != undefined)
            this.message = message;
    }
}
class Parser {
    constructor(tokens) {
        this.tokens = [];
        this.indentation = -1;
        this.ast = new _ast_ast__WEBPACK_IMPORTED_MODULE_1__["AST"]();
        this.tokens = tokens;
    }
    accept_it() {
        let ret = this.tokens.shift();
        if (ret == undefined) {
            throw new ParsingError("Not enough token remaining to accept");
        }
        return ret;
    }
    maybe(kind) {
        if (this.show_next().word.kind === kind) {
            return this.accept_it();
        }
        return undefined;
    }
    expect(kind) {
        let token = this.show_next();
        if (token.word.kind === kind) {
            return this.accept_it();
        }
        else {
            let msg = "Syntax error (line, col): (" + (token === null || token === void 0 ? void 0 : token.position.line) +
                ", " +
                token.position.col +
                "). ";
            msg += "Expecting " + kind + ". Got " + token.word.kind + ".";
            throw new ParsingError(msg);
        }
    }
    expectChoice(kinds) {
        let token = this.show_next();
        if (kinds.indexOf(token.word.kind) > -1) {
            return this.accept_it();
        }
        else {
            let msg = "Syntax error (line, col): (" + (token === null || token === void 0 ? void 0 : token.position.line) +
                ", " +
                token.position.col +
                "). ";
            let choices = "";
            kinds.map((kind) => (choices += ";" + kind));
            msg +=
                "Expecting one of " +
                    choices +
                    ". Got " +
                    token.word.kind +
                    ".";
            throw new ParsingError(msg);
        }
    }
    show_next(n = 1) {
        let next = this.tokens[n - 1];
        if (next != undefined) {
            return next;
        }
        else {
            throw new ParsingError("Show next: Not enough tokens");
        }
    }
    look_ahead(n = 2) {
        let next = this.tokens[n];
        if (next != undefined) {
            return next;
        }
        else {
            throw new ParsingError("Look ahead: Not enough tokens");
        }
    }
    indent() {
        this.indentation++;
        return this.indentation;
    }
    unindent() {
        this.indentation--;
        return this.indentation;
    }
    parse() {
        while (this.tokens.length > 0) {
            this.ast.get_root().add_child(Object(_grammar__WEBPACK_IMPORTED_MODULE_0__["parse_block"])(this));
        }
    }
}


/***/ }),

/***/ "w+rM":
/*!*******************************************!*\
  !*** ./src/node_types/utils/to_string.ts ***!
  \*******************************************/
/*! exports provided: ToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToString", function() { return ToString; });
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litegraph.js */ "bhRC");
/* harmony import */ var litegraph_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litegraph_js__WEBPACK_IMPORTED_MODULE_0__);

class ToString extends litegraph_js__WEBPACK_IMPORTED_MODULE_0__["LGraphNode"] {
    constructor() {
        super();
        this.title = "To String";
        this.addInput("in", "");
        this.addOutput("out", "string");
    }
    onExecute() {
        let in_data = this.getInputData(0);
        if (in_data === undefined)
            in_data = 0;
        this.setOutputData(0, String(in_data));
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map