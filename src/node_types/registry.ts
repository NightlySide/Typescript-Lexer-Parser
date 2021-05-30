import { LiteGraph } from "litegraph.js";

import { Addition, Division, Multiplication, Soustraction } from "./maths";
import { Booleen, Nombre, String } from "./native_types";
import { Print, ProgramStart, ToString } from "./utils";

function registerMaths() {
    LiteGraph.registerNodeType("maths/addition", Addition);
    LiteGraph.registerNodeType("maths/soustraction", Soustraction);
    LiteGraph.registerNodeType("maths/multiplication", Multiplication);
    LiteGraph.registerNodeType("maths/division", Division);
}

function registerTypes() {
    LiteGraph.registerNodeType("types/booleen", Booleen);
    LiteGraph.registerNodeType("types/nombre", Nombre);
    LiteGraph.registerNodeType("types/string", String);
}

function registerUtils() {
    LiteGraph.registerNodeType("utils/print", Print);
    LiteGraph.registerNodeType("utils/to_string", ToString);
    LiteGraph.registerNodeType("utils/prgm_init", ProgramStart);
}

export default () => {
    registerTypes();
    registerMaths();
    registerUtils();
};
