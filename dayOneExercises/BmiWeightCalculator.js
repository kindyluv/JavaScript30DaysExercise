//Body mass index (BMI) calculator
const bmi = (weight, height) => {
    let kg = 0.45359237;
    weight = weight * kg;
    let bmi = weight / (height * height)
    if (bmi < 18.5){
        return `${'Your weight is Underweight'}`
    }else
    if(bmi >= 18.5 && bmi <= 24.9){
        return `${'Your weight is Normal Weight'}`
    }else
    if(bmi >= 25 && bmi <= 29.9){
        return `${'Your weight is Overweight'}`
    }else
        return `${'You are Obese'}`
}

console.log(bmi(52, 5.7))