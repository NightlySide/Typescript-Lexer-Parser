import { expect } from "chai";

import words from "../src/words";

describe("Words list", () => {
    it("should contain 54 words", () => {
        expect(words.length).to.be.equal(54);
    });

    it("should have a name and regexp", () => {
        words.map((word) => {
            expect(word.name).not.to.be.equal("");
            expect(word.regexp).not.to.be.null;
        });
    });
});
