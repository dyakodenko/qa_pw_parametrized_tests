import { test } from '../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../src/constants';

test('Assert discounted Mocha is NOT added to the Cart after promo decline', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.americano);

  await menuPage.assertPromoMessageIsVisible();
  await menuPage.clickNoPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);
  await cartPage.assertCoffeeItemIsNotVisible(COFFEE_NAMES.mocha);

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.americano);
});
