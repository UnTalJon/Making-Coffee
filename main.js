import {CoffeeMachine} from "./CoffeeMachine.js";
import {MenuOption} from "./MenuOption.js";

main()

function main() {

    const coffeeMachine = new CoffeeMachine(550, 400, 540, 120, 9);

    coffeeMachine.printCurrentState();
    printMainMenu(coffeeMachine);
    coffeeMachine.printCurrentState();


    /**
     * @param {CoffeeMachine} coffeeMachine - Instante of a coffee machine to apply the menu options.
     */
    function printMainMenu(coffeeMachine) {
        const choice = prompt('\nWrite action (buy, fill, take):\n');

        switch (choice) {
            case MenuOption.BUY:
                coffeeMachine.buyCoffee();
                break;
            case MenuOption.FILL:
                coffeeMachine.fillMachine();
                break;
            case MenuOption.TAKE:
                coffeeMachine.takeMoney();
                break;
            default:
                break;
        }
    }
}

