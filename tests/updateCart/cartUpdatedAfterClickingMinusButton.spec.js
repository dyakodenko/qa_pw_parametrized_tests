import { test } from '../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../src/constants';

test('Assert cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  const cappuccino = COFFEE_NAMES.cappuccino;
  const espresso = COFFEE_NAMES.espresso;

  await menuPage.open();
  await menuPage.clickCoffeeCup(cappuccino);
  await menuPage.clickCoffeeCup(espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeNameContainsCorrectText(espresso);

  await cartPage.clickCoffeeListItemRemoveOneDrink(espresso);

  await cartPage.assertCoffeeItemIsNotVisible(espresso);
  await cartPage.assertCoffeeNameContainsCorrectText(cappuccino);

  await cartPage.clickCoffeeListItemRemoveOneDrink(cappuccino);

  await cartPage.assertCoffeeItemIsNotVisible(cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
