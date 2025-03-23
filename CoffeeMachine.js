import {Coffee} from "./Coffee.js";
import {CoffeeType} from "./CoffeeType.js";

export class CoffeeMachine {
    constructor(wallet, water, milk, coffee, disposableCups) {
        this.wallet = wallet;
        this.water = water;
        this.milk = milk;
        this.coffee = coffee;
        this.disposableCups = disposableCups;
        this.availableRecipes = new Map([
            [CoffeeType.ESPRESSO, new Coffee(250, 0, 16, 4)],
            [CoffeeType.LATTE, new Coffee(350, 75, 20, 7)],
            [CoffeeType.CAPPUCCINO, new Coffee(200, 100, 12, 6)],
        ]);
    }


    printCurrentState() {
        console.log('\nThe coffee machine has:');
        console.log(`${this.water} ml of water`);
        console.log(`${this.milk} ml of milk`);
        console.log(`${this.coffee} g of coffee beans`);
        console.log(`${this.disposableCups} disposable cups`);
        console.log(`$${this.wallet} of money\n`);
    }

    buyCoffee() {
        const choice = Number(prompt('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino'));

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
            default:
                break;
        }
    }

    /**
     * @param {CoffeeType} coffeeType - Coffee which we'll prepared
     */
    makeCoffee(coffeeType) {
        const coffee = this.availableRecipes.get(coffeeType)

        this.water -= coffee.water;
        this.milk -= coffee.milk;
        this.coffee -= coffee.coffee;
        this.wallet += coffee.cost;
        this.disposableCups -= 1;
    }

    fillMachine() {
        const water = Number(prompt('Write how many ml of water you want to add:\n'));
        const milk = Number(prompt('Write how many ml of milk you want to add:\n'));
        const coffee = Number(prompt('Write how many grams of coffee beans you want to add:\n'));
        const cups = Number(prompt('Write how many disposable cups you want to add:\n'));

        this.water += water;
        this.milk += milk;
        this.coffee += coffee;
        this.disposableCups += cups;
    }

    takeMoney() {
        console.log(`I gave you $${this.wallet}`);
        this.wallet = 0;
    }
}
