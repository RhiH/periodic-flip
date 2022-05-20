/**
 * @jest-environment jsdom
 */

const { randomize } = require("../script");

jest.spyOn(window, "alert").mockImplementation(() => { });

let getData;
let checkCards;
let restart;
let cardCreator;

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    getData = require('../script').getData;
    cardData = require('../script').cardData;
    restart = require('../script').restart;
    cardCreator = require('../script').cardCreator;
});

describe("random cards", () => {
    test('expect random numert', () => {
        expect(randomize()).not.toMatch(randomize());
    });
});