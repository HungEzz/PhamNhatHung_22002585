const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const calculateAverage = (scores) => {
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
};

const determineWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    return `Dolphins win with an average score of ${dolphinsAvg}!`;
  } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    return `Koalas win with an average score of ${koalasAvg}!`;
  } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
    return `It's a draw! Both teams have the same average score of ${dolphinsAvg}!`;
  } else {
    return 'No team wins the trophy due to insufficient scores.';
  }
};

const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);
console.log(determineWinner(dolphinsAvg1, koalasAvg1));

const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);
console.log(determineWinner(dolphinsAvgBonus1, koalasAvgBonus1));

const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);
console.log(determineWinner(dolphinsAvgBonus2, koalasAvgBonus2));
