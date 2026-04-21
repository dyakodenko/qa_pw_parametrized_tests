import { test } from '../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../src/constants';

test('Assert cart cleaned after page refresh', async ({
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

  await cartPage.assertCoffeeItemIsVisible(cappuccino);

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsNotVisible(cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
