# Coffee for all

## Description

A real coffee machine doesn't have an infinite supply of water, milk, or coffee beans. And if you input a really big
number, it's almost certain that a real coffee machine wouldn't have the supplies needed to make all that coffee for
you.

In this stage, you need to improve the previous program. Now you will check amounts of water, milk, and coffee beans
available in your coffee machine at the moment.

## Objectives

Write a program that does the following:

1. It requests the amounts of water, milk, and coffee beans available at the moment, and then asks for the number of
   cups a user needs.
2. If the coffee machine has enough supplies to make the specified amount of coffee, the program should print "Yes,
   I can make that amount of coffee".
3. If the coffee machine can make more than that, the program should output "Yes, I can make that amount of coffee (
   and even N more than that)", where N is the number of additional cups of coffee that the coffee machine can make.
4. If the amount of given resources is not enough to make the specified amount of coffee, the program should
   output "No, I can make only N cups of coffee".

Like in the previous stage, the coffee machine needs 200 ml of water, 50 ml of milk, and 15 g of coffee beans to make
one cup of coffee.

## Examples

The greater-than symbol followed by a space (> ) represents the user input. Note that it's not part of the input.

### Example 1:

```shell
Write how many ml of water the coffee machine has:
> 300
Write how many ml of milk the coffee machine has:
> 65
Write how many grams of coffee beans the coffee machine has:
> 100
Write how many cups of coffee you will need:
> 1
Yes, I can make that amount of coffee
```

### Example 2:

```shell
Write how many ml of water the coffee machine has:
> 500
Write how many ml of milk the coffee machine has:
> 250
Write how many grams of coffee beans the coffee machine has:
> 200
Write how many cups of coffee you will need:
> 10
No, I can make only 2 cups of coffee
```

### Example 3:

```shell
Write how many ml of water the coffee machine has:
> 1550
Write how many ml of milk the coffee machine has:
> 299
Write how many grams of coffee beans the coffee machine has:
> 300
Write how many cups of coffee you will need:
> 3
Yes, I can make that amount of coffee (and even 2 more than that)
```

### Example 4:

```
Write how many ml of water the coffee machine has:
> 0
Write how many ml of milk the coffee machine has:
> 0
Write how many grams of coffee beans the coffee machine has:
> 0
Write how many cups of coffee you will need:
> 1
No, I can make only 0 cups of coffee
```

### Example 5:

```shell
Write how many ml of water the coffee machine has:
> 0
Write how many ml of milk the coffee machine has:
> 0
Write how many grams of coffee beans the coffee machine has:
> 0
Write how many cups of coffee you will need:
> 0
Yes, I can make that amount of coffee
```

### Example 6:

```shell
Write how many ml of water the coffee machine has:
> 200
Write how many ml of milk the coffee machine has:
> 50
Write how many grams of coffee beans the coffee machine has:
> 15
Write how many cups of coffee you will need:
> 0
Yes, I can make that amount of coffee (and even 1 more than that)
```