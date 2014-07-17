describe("scrabble", function () {
	it("calculates the score of a single letter", function () {
		scrabble("a").should.equal(1);
	});
});