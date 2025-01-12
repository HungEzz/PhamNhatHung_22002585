const markMass1 = 78; 
const markHeight1 = 1.69; 
const johnMass1 = 92; 
const johnHeight1 = 1.95;

const markBMI1 = markMass1 / (markHeight1 ** 2);
const johnBMI1 = johnMass1 / (johnHeight1 ** 2);

const markHigherBMI1 = markBMI1 > johnBMI1;

if (markHigherBMI1) {
    console.log(`Mark's BMI ${markBMI1} is higher than John ${johnBMI1}`);
} else {
    console.log(`John's BMI ${johnBMI1} is higher than Mark ${markBMI1}`);
}

const markMass2 = 95; 
const markHeight2 = 1.75; 
const johnMass2 = 85; 
const johnHeight2 = 1.80;

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI2) {
    console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}`);
} else {
    console.log(`John's BMI ${johnBMI2} is higher than Mark's ${markBMI2}`);
}
