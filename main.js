import input from 'sync-input'

main()

function main() {
    const ingredients = new Map([
        ['water_milliliters', 200],  // 0 index
        ['milk_milliliters', 50], // 1 index
        ['coffe_beans_grams', 15] // 2 index
    ]);

    const coffeeCups = Number(input("Write how many cups of coffee you will need:\n"));

    makeCoffee(coffeeCups)
}

function makeCoffee(cups) {
    let recipe = []

    for (const [key, value] of ingredients.entries()) {
        const amount = cups * value;
        recipe.push(amount)
    }

    console.log(`For ${cups} of coffe you will need:`)
    console.log(`${recipe[0]} ml of water`)
    console.log(`${recipe[1]} ml of milk`)
    console.log(`${recipe[2]} g of coffee beans`)
}