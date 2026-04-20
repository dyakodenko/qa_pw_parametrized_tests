import { test } from '../_fixtures/fixtures';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup('Cappuccino');
  await menuPage.clickCoffeeCup('Espresso');
  await menuPage.clickCoffeeCup('Americano');

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible('Espresso');
  await cartPage.assertDiscountedMochaItemIsHidden();

  await cartPage.assertCoffeeItemIsVisible('Cappuccino');
  await cartPage.assertCoffeeItemIsVisible('Americano');
});
