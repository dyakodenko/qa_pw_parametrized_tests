import { test } from '../_fixtures/fixtures';

test('Assert cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup('Cappuccino');
  await menuPage.clickCoffeeCup('Espresso');

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeNameContainsCorrectText('Espresso');

  await cartPage.coffeeListItemRemoveOneDrink('Espresso');

  await cartPage.assertCoffeeItemIsNotVisible('Espresso');
  await cartPage.assertCoffeeNameContainsCorrectText('Cappuccino');

  await cartPage.coffeeListItemRemoveOneDrink('Cappuccino');

  await cartPage.assertCoffeeItemIsNotVisible('Cappuccino');
  await cartPage.assertNoCoffeeMessageIsVisible();
});
