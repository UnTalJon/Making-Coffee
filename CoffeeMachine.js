import {Coffee} from "./Coffee.js";
import {CoffeeType} from "./CoffeeType.js";
import {MenuOption} from "./MenuOption.js";
import {Resource} from "./Resource.js";

export class CoffeeMachine {
    constructor(water, milk, coffee, disposableCups, cash) {
        this.water = new Resource('Water', water, 'ml');
        this.milk = new Resource('Milk', milk, 'ml');
        this.coffee = new Resource('Coffee beans', coffee, 'g');
        this.disposableCups = new Resource('Disposable cups', disposableCups, 'units');
        this.cash = new Resource('Cash', cash, 'dollars', false);

        this.availableRecipes = new Map([
            [CoffeeType.ESPRESSO, new Coffee(250, 0, 16, 1, -4)],
            [CoffeeType.LATTE, new Coffee(350, 75, 20, 1, -7)],
            [CoffeeType.CAPPUCCINO, new Coffee(200, 100, 12, 1, -6)],
            [CoffeeType.AMERICANO, new Coffee(375, 0, 20, 1, -5)],
            [CoffeeType.MOCHA, new Coffee(250, 100, 18, 1, -8)],
            [CoffeeType.MACCHIATO, new Coffee(250, 50, 17, 1, -6)],
            [CoffeeType.FLAT_WHITE, new Coffee(200, 150, 15, 1, -7)],
            [CoffeeType.RISTRETTO, new Coffee(150, 0, 20, 1, -5)],
            [CoffeeType.AFFOGATO, new Coffee(50, 0, 10, 1, -9)],
            [CoffeeType.CORTADO, new Coffee(150, 50, 15, 1, -5)],
        ]);
    }

    clone = () =>
        new CoffeeMachine(this.water.quantity, this.milk.quantity, this.coffee.quantity, this.disposableCups.quantity, this.cash.quantity);

    startMachine() {
        let choice = MenuOption.UNDETERMINED;
        do {
            choice = prompt('\nWrite action (buy, fill, take, remaining, exit):\n>');
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

        for (const property in this) {
            if (this[property] instanceof Resource) {
                this[property].printRemainingQuantity();
            }
        }
    }

    buyCoffee() {
        let choice = MenuOption.UNDETERMINED
        while (choice !== MenuOption.BACK) {
            let index = 1;

            console.log('\nWhat do you want to buy?');
            for (const coffeeName of this.availableRecipes.keys()) {
                console.log(`${index} - ${coffeeName}`)
                index++;
            }
            console.log('back - main menu');

            choice = prompt('>');
            switch (choice) {
                case '1':
                    this.makeCoffee(CoffeeType.ESPRESSO)
                    return;
                case '2':
                    this.makeCoffee(CoffeeType.LATTE)
                    return;
                case '3':
                    this.makeCoffee(CoffeeType.CAPPUCCINO)
                    return;
                case '4':
                    this.makeCoffee(CoffeeType.AMERICANO)
                    return;
                case '5':
                    this.makeCoffee(CoffeeType.MOCHA)
                    return;
                case '6':
                    this.makeCoffee(CoffeeType.MACCHIATO)
                    return;
                case '7':
                    this.makeCoffee(CoffeeType.FLAT_WHITE)
                    return;
                case '8':
                    this.makeCoffee(CoffeeType.RISTRETTO)
                    return;
                case '9':
                    this.makeCoffee(CoffeeType.AFFOGATO)
                    return;
                case '10':
                    this.makeCoffee(CoffeeType.CORTADO)
                    return;
                case MenuOption.BACK:
                    console.log('Returning to the main menu');
                    break;
                default:
                    console.log('Invalid choice!');
                    break;
            }
        }
    }

    /**
     * @param {CoffeeType} coffeeType - Coffee which we'll prepared
     */
    makeCoffee(coffeeType) {
        if (!this.canMakeCoffee(coffeeType)) return;
        const recipe = this.availableRecipes.get(coffeeType);

        this.water.use(recipe.water);
        this.milk.use(recipe.milk);
        this.coffee.use(recipe.coffee);
        this.disposableCups.use(recipe.cups);
        this.cash.use(recipe.cost);

        console.log('I have enough resources, making you a coffee!');
    }

    /**
     * @param {CoffeeType} coffeeType - Coffee which we'll prepared
     */
    canMakeCoffee(coffeeType) {
        const recipe = this.availableRecipes.get(coffeeType);
        const clonedMachine = this.clone();

        if (!clonedMachine.water.use(recipe.water)) return false;
        if (!clonedMachine.milk.use(recipe.milk)) return false;
        if (!clonedMachine.coffee.use(recipe.coffee)) return false;
        return clonedMachine.disposableCups.use(recipe.cups);
    }

    fillMachine() {
        for (const property in this) {
            if (this[property] instanceof Resource && this[property].fillable) {
                this[property].add();
            }
        }
    }

    takeMoney() {
        console.log(`\nI gave you $${this.cash.quantity}`);
        this.cash.resetQuantity();
    }
}
