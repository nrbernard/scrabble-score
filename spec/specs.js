describe("scrabble", function () {
	it("calculates the score of a single letter", function () {
		scrabble("a").should.equal(1);
	});

	it("calculates the score for a short word", function () {
		scrabble("cat").should.equal(5);
	})
});