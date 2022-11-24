class Calculator{
    calc(str){
        let [num1, opt, num2] = str.split(" ");
        num1 = +num1;
        num2 = +num2;
        for (let i in this){
            if(i == opt){
                return this[i](num1, num2)
            }
        }
    }
    "+" = (a, b) => a + b;
    "-" = (a, b) => a - b;
    addMethod(opt , func){
        this[opt] = func;
    }
}
const test1 = new Calculator;
test1.addMethod('**', (a, b) => a ** b);
test1.addMethod('/', (a, b) => a / b);
console.log(test1.calc('7 / 2'));