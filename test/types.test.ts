import { expect } from "chai";

import { Token, Word } from "../src/types";

describe("Class Types", () => {
    it("word should instanciate with correct values", () => {
        const regex = /world/;
        const w = new Word("hello", regex);
        expect(w.name).to.be.equal("hello");
        expect(w.regexp).to.be.equal(regex);
    });

    it("token should instanciate with correct values", () => {
        const w = new Word("hello", /world/);
        const t = new Token(w, "my word");

        expect(t.word).to.be.equal(w);
        expect(t.value).to.be.equal("my word");
    });
});
