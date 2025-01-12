const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const calculateTip = (bill) => {
  return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
};

const tip1 = calculateTip(bill1);
const tip2 = calculateTip(bill2);
const tip3 = calculateTip(bill3);

const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${total1}`);
console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${total2}`);
console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${total3}`);
