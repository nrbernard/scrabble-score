describe("scrabble", function () {
	it("calculates the score of a single letter", function () {
		scrabble("a").should.equal(1);
	});

	it("calculates the score for a word with three characters", function () {
		scrabble("cat").should.equal(5);
	});

	it("calculates the score for a word with eight characters", function () {
		scrabble("epicodus").should.equal(13);
	});

	it("calculates the score for a word with mixed characters", function () {
		scrabble("ePiCOdus").should.equal(13);
	});
});