import { expect } from "chai";
import WordKinds from "../src/kinds";

import words from "../src/words";

describe("Words list", () => {
    it("should contain 28 words", () => {
        expect(words.length).to.be.equal(28);
    });

    it("should have a name and regexp", () => {
        words.map((word) => {
            expect(word.kind).not.to.be.equal(WordKinds.UNDEFINED);
            expect(word.regexp).not.to.be.null;
        });
    });
});
