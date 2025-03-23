main()

function main() {
    makeCoffee();

    function makeCoffee() {
        const stages = [
            'Starting to make a coffee',
            'Grinding coffee beans',
            'Boiling water',
            'Mixing boiled water with crushed coffee beans',
            'Pouring coffee into the cup',
            'Pouring some milk into the cup',
            'Coffee is ready!',
        ];

        stages.forEach(x => console.log(x));
    }
}