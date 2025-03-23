import {Coffee} from "./Coffee.js";
import {CoffeeType} from "./CoffeeType.js";
import {MenuOption} from "./MenuOption.js";

export class CoffeeMachine {
    constructor(water, milk, coffee, disposableCups, cash) {
        this.machine = new Coffee(water, milk, coffee, disposableCups, cash)
        this.availableRecipes = new Map([
            [CoffeeType.ESPRESSO, new Coffee(250, 0, 16, 1, -4)],
            [CoffeeType.LATTE, new Coffee(350, 75, 20, 1, -7)],
            [CoffeeType.CAPPUCCINO, new Coffee(200, 100, 12, 1, -6)],
        ]);
    }

    startMachine() {
        let choice = MenuOption.UNDETERMINED;

        do {
            choice = prompt('\nWrite action (buy, fill, take, remaining, exit):\n');

            switch (choice) {
                case MenuOption.BUY:
                    this.buyCoffee();
                    break;
                case MenuOption.FILL:
                    this.fillMachine();
                    break;
                case MenuOption.TAKE:
                    this.takeMoney();
                    break;
                case MenuOption.REMAINING:
                    this.printRemainingResources();
                    break;
                default:
                    break;
            }
        } while (choice !== MenuOption.EXIT)
    }

    printRemainingResources() {
        console.log('\nThe coffee machine has:');
        console.log(`${this.machine.water} ml of water`);
        console.log(`${this.machine.milk} ml of milk`);
        console.log(`${this.machine.coffee} g of coffee beans`);
        console.log(`${this.machine.cups} disposable cups`);
        console.log(`$${this.machine.cost} of money\n`);
    }

    buyCoffee() {
        const menu = 'What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu\n'
        const choice = Number(prompt(menu));

        switch (choice) {
            case 1:
                this.makeCoffee(CoffeeType.ESPRESSO)
                break;
            case 2:
                this.makeCoffee(CoffeeType.LATTE)
                break;
            case 3:
                this.makeCoffee(CoffeeType.CAPPUCCINO)
                break;
            // NaN or 'back' case
            default:
                break;
        }
    }

    /**
     * @param {CoffeeType} coffeeType - Coffee which we'll prepared
     */
    makeCoffee(coffeeType) {
        const coffee = this.availableRecipes.get(coffeeType);

        /** Check all ingredients before use them in the machine */
        for (const key in this.machine) {
            let ingredient = this.machine[key]
            const remainingResource = ingredient -= coffee[key];

            if (remainingResource < 0) {
                console.log(`Sorry, not enough ${key}!`);
                return;
            }
        }

        /** If we have enough ingredients we make a coffe :) */
        for (const key in this.machine) {
            this.machine[key] -= coffee[key];
        }

        console.log('I have enough resources, making you a coffee!');
    }

    fillMachine() {
        const water = Number(prompt('Write how many ml of water you want to add:\n'));
        const milk = Number(prompt('Write how many ml of milk you want to add:\n'));
        const coffee = Number(prompt('Write how many grams of coffee beans you want to add:\n'));
        const cups = Number(prompt('Write how many disposable cups you want to add:\n'));

        this.machine.water += water;
        this.machine.milk += milk;
        this.machine.coffee += coffee;
        this.machine.cups += cups;
    }

    takeMoney() {
        console.log(`\nI gave you $${this.machine.cost}`);
        this.machine.cost = 0;
    }
}
