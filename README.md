# Parametrized Tests for CoffeeCart

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Task

1. Convert tests within `tests/menuTests` folder `cappuccinoAddedToTotal.spec.js` and `espressoAddedToTotal.spec.js` into parametrized test `coffeeAddedToTotal.spec.js` for all coffee types. - Done
2. Convert tests within `tests/menuTests` folder `cappuccinoHasCorrectCost.spec.js` and `espressoHasCorrectCost.spec.js` into parametrized test `coffeeHasCorrectCost.spec.js`  for all coffee types. - Done
3. Convert tests within `tests/removeFromCart` folder `cappuccinoRemovedFromCart.spec.js` and `espressoRemovedFromCart.spec.js` into parametrized test `coffeeRemovedFromCart.spec.js`  for all coffee types. 
    - `coffeeAddedToCart.spec.js` - Done
4. Use `tests/addToCart/coffeeCupAddedToCart.spec.js` as an example. - Done
5. Create new methods to work for any coffee (without hardcoded names) in the page classes.
6. Remove old redundant methods (with hardcoded names) from page classes.
7. Re-run all your tests and make sure they pass after the updates.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
