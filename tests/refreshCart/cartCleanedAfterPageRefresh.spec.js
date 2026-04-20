import { test } from '../_fixtures/fixtures';

test('Assert cart cleaned after page refresh', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup('Cappuccino');
  await menuPage.clickCoffeeCup('Espresso');

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible('Cappuccino');

  await cartPage.reload();

  await cartPage.assertCoffeeItemIsNotVisible('Cappuccino');
  await cartPage.assertNoCoffeeMessageIsVisible();
});
