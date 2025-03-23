import {CoffeeMachine} from './CoffeeMachine.js'

main()

function main() {
    const coffeeMachine = new CoffeeMachine();
    let coffeeCups = 0;

    setIngredientsAmount()
    coffeeMachine.calculateTotalCoffeCups(coffeeCups)

    function setIngredientsAmount() {
        coffeeMachine.setWater(Number(prompt("Write how many ml of water the coffee machine has:\n")));
        coffeeMachine.setMilk(Number(prompt("Write how many ml of milk the coffee machine has:\n")))
        coffeeMachine.setCoffee(Number(prompt("Write how many grams of coffee beans the coffee machine has:\n")))

        coffeeCups = Number(prompt("Write how many cups of coffee you will need:\n"));
    }
}

