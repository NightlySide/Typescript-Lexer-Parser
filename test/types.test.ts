import { expect } from "chai";
import WordKinds from "../src/kinds";

import { Position, Token, Word } from "../src/types";

describe("Class Types", () => {
    it("word should instanciate with correct values", () => {
        const regex = /world/;
        const w = new Word(WordKinds.UNDEFINED, regex);
        expect(w.kind).to.be.equal(WordKinds.UNDEFINED);
        expect(w.regexp).to.be.equal(regex);
    });

    it("position should instanciate with correct values", () => {
        const position = new Position(2, 3);

        expect(position.line).to.be.equal(2);
        expect(position.col).to.be.equal(3);
    });

    it("token should instanciate with correct values", () => {
        const p = new Position(3, 4);
        const w = new Word(WordKinds.UNDEFINED, /world/);
        const t = new Token(p, w, "my word");

        expect(t.position).to.be.equal(p);
        expect(t.word).to.be.equal(w);
        expect(t.value).to.be.equal("my word");
    });
});
