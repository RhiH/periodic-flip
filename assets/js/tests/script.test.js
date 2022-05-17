/**
 * @jest-environment jsdom
 */
const { getData, randomize, cardCreator, checkCards, restart } = require('../script');
jest.spyOn(window, "alert").mockImplementation(() => { });

 // attempted fix Gemma_CI
//  let appendCard;

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
     // attempted fix Gemma_CI
    //  appendCard = require('../script').appendCard;
 });


describe("flippedCards", () => {

  // attempted fix Gemma_CI

  // beforeAll(() => {
  //   let card = document.getElementsByClassName("card");
  //   card.flipped = true;
  //   appendCard(card);

  // })

 test('the number of cards flipped over', () => {
    section = document.querySelector('section');
    cardCreator();
    expect(flippedCards.length).toBe(3);
  });

});