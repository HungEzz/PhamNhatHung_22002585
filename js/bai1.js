const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95; 

const markBMI1 = markMass1 / (markHeight1 ** 2);
const johnBMI1 = johnMass1 / (johnHeight1 ** 2);

const markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1 - Mark BMI:", markBMI1);
console.log("Data 1 - John BMI:", johnBMI1);
console.log("Data 1 - Does Mark have a higher BMI than John?", markHigherBMI1);

const markMass2 = 95; 
const markHeight2 = 1.75;
const johnMass2 = 85;
const johnHeight2 = 1.80; 

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 2 - Mark BMI:", markBMI2);
console.log("Data 2 - John BMI:", johnBMI2);
console.log("Data 2 - Does Mark have a higher BMI than John?", markHigherBMI2);
