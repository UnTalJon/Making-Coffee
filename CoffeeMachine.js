export class CoffeeMachine {
    ingredients = new Map([
        ['water', {totalAvailable: 0, minAmount: 200, availableCups: 0}],
        ['milk', {totalAvailable: 0, minAmount: 50, availableCups: 0}],
        ['coffee', {totalAvailable: 0, minAmount: 15, availableCups: 0}],
    ]);

    setWater(total) {
        this.ingredients.get('water').totalAvailable = total
    }

    setMilk(total) {
        this.ingredients.get('milk').totalAvailable = total
    }

    setCoffee(total) {
        this.ingredients.get('coffee').totalAvailable = total
    }

    calculateAmountOfIngredients() {
        for (const [key, value] of this.ingredients.entries()) {
            this.ingredients.get(key).availableCups = parseInt(value.totalAvailable / value.minAmount)
        }
    }

    calculateTotalCoffeCups(cups) {
        this.calculateAmountOfIngredients()
        let ingredientCups = []

        for (const [key, value] of this.ingredients.entries()) {
            ingredientCups.push(value.availableCups);
        }

        const availableCups = Math.min(...ingredientCups)
        const differenceCups = availableCups - cups

        if (differenceCups > 0) {
            console.log(`Yes, I can make that amount of coffee (and even ${differenceCups} more than that)`)
        } else if (differenceCups === 0) {
            console.log("Yes, I can make that amount of coffee")
        } else {
            console.log(`No, I can make only ${availableCups} cups of coffee`)
        }
    }
}