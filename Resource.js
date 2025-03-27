export class Resource {
    /**
     * Represents a resource used in the coffee machine.
     *
     * @class Resource
     * @param {String} name - The name of the resource (e.g., "Water", "Milk").
     * @param {Number} quantity - The initial quantity of the resource.
     * @param {String} units - The name or abbreviation of the measurement units (e.g., "ml", "g").
     * @param {Boolean} fillable - Indicates whether the resource can be refilled.
     */
    constructor(name, quantity, units, fillable = true) {
        this.name = name;
        this.quantity = quantity;
        this.units = units;
        this.fillable = fillable;
    }

    add() {
        const amount = this.getValidNumer(`Write how many ${this.units} of ${this.name} you want to add:\n>`);
        this.quantity += amount;
    }

    /**
     * @param {Number} amount - Amount that will be use
     */
    use(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
            return true;
        } else {
            console.log(`Sorry, not enouth ${this.name} u only have ${this.quantity}`);
            return false;
        }
    }

    resetQuantity() {
        this.quantity = 0;
    }

    printRemainingQuantity() {
        console.log(`${this.quantity} ${this.units} of ${this.name}`);
    }

    getValidNumer(message) {
        let num;

        do {
            num = prompt(message);
            if (num === null) return 0;
            num = Number(num);
        } while (isNaN(num) || num < 0 || !Number.isInteger(num))

        return num;
    }
}