import { Visitor } from "../visitor/visitor";

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

    public accept(visitor: Visitor) {
        console.error("Visiting basic node!!!");
    }
}

class Root extends ASTNode {
    constructor() {
        super("Root");
    }

    public accept(visitor: Visitor) {
        visitor.visit_root(this);
    }
}

class Block extends ASTNode {
    constructor(identity: BlockIdentity, io: BlockIO, links?: BlockLinks) {
        super("Block");
        if (links != undefined) this.children = [identity, io, links];
        else this.children = [identity, io];
    }

    public accept(visitor: Visitor) {
        visitor.visit_block(this);
    }
}

class BlockIdentity extends ASTNode {
    constructor(parameters: IdentityStatement[]) {
        super("BlockIdentity");
        this.children = parameters;
    }

    public accept(visitor: Visitor) {
        visitor.visit_block_identity(this);
    }
}

class BlockIO extends ASTNode {
    constructor(ins_outs: IOStatement[]) {
        super("BlockI/O");
        this.children = ins_outs;
    }

    public accept(visitor: Visitor) {
        visitor.visit_block_io(this);
    }
}

class BlockLinks extends ASTNode {
    constructor(links: LinkStatement[]) {
        super("BlockLinks");
        this.children = links;
    }

    public accept(visitor: Visitor) {
        visitor.visit_block_links(this);
    }
}

class Identifier extends ASTNode {
    constructor(value: string) {
        super("Identifier");
        this.content = value;
    }

    public accept(visitor: Visitor) {
        visitor.visit_identifier(this);
    }
}

class Value extends ASTNode {
    constructor(value: any) {
        super("Value");
        this.content = value;
    }

    public accept(visitor: Visitor) {
        visitor.visit_value(this);
    }
}

class IdentityStatement extends ASTNode {
    constructor(id: Identifier, value: Value) {
        super("IdentityStatement");
        this.children = [id, value];
    }

    public accept(visitor: Visitor) {
        visitor.visit_identity_statement(this);
    }
}

class IOStatement extends ASTNode {
    constructor(in_or_out: Value, name: Value, type: Value, value: Value) {
        super("IdentityStatement");
        this.children = [in_or_out, name, type, value];
    }

    public accept(visitor: Visitor) {
        visitor.visit_io_statement(this);
    }
}

class LinkStatement extends ASTNode {
    constructor(in_id: Value, out_id: Value, block_id: Value) {
        super("LinkStatement");
        this.children = [in_id, out_id, block_id];
    }

    public accept(visitor: Visitor) {
        visitor.visit_link_statement(this);
    }
}

export {
    ASTNode,
    Root,
    Block,
    BlockIdentity,
    BlockIO,
    BlockLinks,
    Identifier,
    Value,
    IdentityStatement,
    IOStatement,
    LinkStatement,
};
