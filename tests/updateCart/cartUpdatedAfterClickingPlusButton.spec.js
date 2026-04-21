import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/priceFormatters';
import { COFFEE_PRICES, COFFEE_NAMES } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  const oneCappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino);
  const twoCappuccinoPrice = priceFormatStr(COFFEE_PRICES.cappuccino * 2);
  const oneEspressoPrice = priceFormatStr(COFFEE_PRICES.espresso);
  const twoEspressoPrice = priceFormatStr(COFFEE_PRICES.espresso * 2);
  const totalPriceNum =
    COFFEE_PRICES.cappuccino * 2 + COFFEE_PRICES.espresso * 2;
  const totalPrice = priceFormatStr(totalPriceNum);

  const cappuccino = COFFEE_NAMES.cappuccino;
  const espresso = COFFEE_NAMES.espresso;

  await menuPage.open();
  await menuPage.clickCoffeeCup(cappuccino);
  await menuPage.clickCoffeeCup(espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    espresso,
    oneEspressoPrice,
  );

  await cartPage.clickCoffeeListItemAddOneDrink(espresso);

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    espresso,
    twoEspressoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    cappuccino,
    oneCappuccinoPrice,
  );

  await cartPage.clickCoffeeListItemAddOneDrink(cappuccino);

  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    cappuccino,
    twoCappuccinoPrice,
  );
  await cartPage.assertCoffeeTotalCostContainsCorrectText(
    espresso,
    twoEspressoPrice,
  );

  await cartPage.assertTotalCheckoutContainsValue(totalPrice);
});
