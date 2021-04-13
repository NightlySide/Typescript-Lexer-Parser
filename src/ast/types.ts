class ASTNode {
    name: string;
    content: any;
    children: ASTNode[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public get_children(): ASTNode[] {
        return this.children;
    }

    public add_child(node: ASTNode) {
        this.children.push(node);
    }
}

class Root extends ASTNode {
    constructor() {
        super("Root");
    }
}

class ProgramInit extends ASTNode {
    constructor() {
        super("ProgramInit");
        this.content = "int main()";
    }
}

class Block extends ASTNode {
    constructor(statements: ASTNode[]) {
        super("Block");
        this.children = statements;
    }
}

class Operator extends ASTNode {
    constructor(value: string) {
        super("Operator");
        this.content = value;
    }
}

class Binary extends ASTNode {
    constructor(left: ASTNode, op: Operator, right: ASTNode) {
        super("Binary");
        this.children = [left, op, right];
    }
}

class Id extends ASTNode {
    constructor(id: any) {
        super("Id");
        this.content = id;
    }
}

class Value extends ASTNode {
    constructor(value: any) {
        super("Value");
        this.content = value;
    }
}

class Type extends ASTNode {
    constructor(type: string) {
        super("Type");
        this.content = type;
    }
}

class Return extends ASTNode {
    constructor(value: number) {
        super("Return");
        this.content = value;
    }
}

class Assignment extends ASTNode {
    constructor(identifier: string, value: ASTNode) {
        super("Assignment");
        this.children = [new Id(identifier), new Value(value)];
    }

    public get_identifier(): Id {
        return this.children[1]!;
    }

    public get_value(): Value {
        return this.children[2]!;
    }
}

class Expression extends ASTNode {
    constructor(tokens: any[]) {
        super("Expression");
        this.content = tokens;
    }
}

class Declaration extends ASTNode {
    m_has_assignement = false;

    constructor(type: string, identifier: string, assignment?: Assignment) {
        super("Declaration");
        this.children = [new Type(type), new Id(identifier)];
        if (assignment != undefined) {
            this.m_has_assignement = true;
            this.children.push(assignment);
        }
    }

    public has_assignement(): boolean {
        return this.m_has_assignement;
    }

    public get_type(): Type {
        return this.children[0]!;
    }

    public get_identifier(): Id {
        return this.children[1]!;
    }

    public get_assignement(): Assignment | null {
        if (this.has_assignement()) {
            return this.children[2]! as Assignment;
        }
        return null;
    }
}

class Loop extends ASTNode {
    constructor(name: string) {
        super(name);
    }

    public get_condition(): Comparison | ForDeclaration {
        return this.children[0]! as Comparison | ForDeclaration;
    }

    public get_block(): Block {
        return this.children[1]!;
    }
}

class While extends Loop {
    constructor(condition: Comparison, block: Block) {
        super("While");
        this.children = [condition, block];
    }
}

class For extends Loop {
    constructor(condition: ForDeclaration, block: Block) {
        super("For");
        this.children = [condition, block];
    }
}

class Comparison extends ASTNode {
    constructor(left_part: string, op: string, right_part: string) {
        super("Condition");
        this.children = [new Value(left_part), new Operator(op), new Value(right_part)];
    }

    public get_left(): Value {
        return this.children[0]!;
    }

    public get_right(): Value {
        return this.children[2]!;
    }

    public get_operator(): Operator {
        return this.children[1]!;
    }
}

class ForDeclaration extends ASTNode {
    constructor(assignement: Assignment, comparison: Comparison, incrementation: Expression) {
        super("ForDeclaration");
        this.children = [assignement, comparison, incrementation];
    }
}

class If extends ASTNode {
    constructor(condition: Expression, block: Block, else_node?: Else) {
        super("If");
        this.children = [condition, block];
        if (else_node != undefined) {
            this.children.push(else_node);
        }
    }
}

class Else extends ASTNode {
    constructor(block: Block) {
        super("Else");
        this.children = [block];
    }
}

export {
    ASTNode,
    Root,
    Binary,
    Id,
    Operator,
    ProgramInit,
    Block,
    Return,
    Value,
    Type,
    Assignment,
    Expression,
    Declaration,
    While,
    For,
    Comparison,
    ForDeclaration,
    If,
    Else,
};
