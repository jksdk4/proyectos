const assert = require('assert');
const { it } = require('mocha');
const Diamond = require('../diamonds');

describe("NFPA 704 Diamond", () => {
    let greenDiamond;
    beforeEach(() => {
        greenDiamond = new Diamond('green', {0: "gross"});
    });

    it("Create a diamond tile", () => {
        const actualColor = greenDiamond.color;
        const expectedColor = 'green';
        const actualKV = greenDiamond.levels[0];
        const expectedKV = 'gross';
        
        assert.strictEqual(actualColor, expectedColor);
        assert.strictEqual(actualKV, expectedKV);
    });

    it("Changes the color", () => {
        greenDiamond.color = 'orange';
        const actualColor = greenDiamond.color;
        const expectedColor = 'orange';

        assert.strictEqual(actualColor, expectedColor);
    });
});

describe("Quiz structure", () => {
    it("Has 40 questions", () => {
        const bunchaQs = ["hi", "not a q", "bad test"];
        const questionsLen = bunchaQs.length;

        assert.strictEqual(questionsLen, 40);
    });
});