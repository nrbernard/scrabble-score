var scrabble = function(word) {
  var sum = 0;
  //var scores = { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, w: 4, x: 8, y: 4, z: 10 };

  var a = { letter: "a", score: 1 };
  //var c = { letter: "c", socre: 3 };

  // var score1 = { score: 1, letters: ["a","e","i","o","u","l","n","r","s","t"] };
  // var score2 = { score: 2, letters: ["d","g"] };
  // var score3 = { score: 3, letters: ["b","c","m","p"] };
  // var score4 = { score: 4, letters: ["f","h","v","w","y"] };
  // var score5 = { score: 5, letters: ["k"] };
  // var score8 = { score: 8, letters: ["j","x"] };
  // var score10 = { score: 10, letters: ["q","z"] };

  var letters = [a];

  var scrabbleScore = function(letter) {
    sum = sum + letter.score;
    console.log("scrabbleScore: " + sum);
  };

  letters.forEach(function(letter) {
    scrabbleScore(letter);
  });

  return sum;
}