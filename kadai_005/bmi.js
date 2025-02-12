let weight = 68;
let height_m = 1.7;

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let bmi = calculateBMI(weight, height_m);

console.log("体重: " + weight + " kg");
console.log("身長: " + height_m + " m");
console.log("BMI: " + bmi.toFixed(2))