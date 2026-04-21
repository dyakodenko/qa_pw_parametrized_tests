const { expect } = require('@playwright/test');

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartListLocator = page.getByRole('list').nth(1);

    this.discountedMochaItem = this.cartListLocator
      .getByRole('listitem')
      .filter({ hasText: '(Discounted) Mocha' });
    this.discountedMochaName = this.discountedMochaItem.locator('div').nth(0);
    this.discountedMochaUnit = this.discountedMochaItem.locator('div').nth(1);
    this.discountedMochaTotalCost = this.discountedMochaItem
      .locator('div')
      .nth(3);

    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
    this.totalCheckout = page.getByTestId('checkout');
  }

  coffeeListItemLocator(name) {
    return this.cartListLocator.getByRole('listitem').filter({ hasText: name });
  }

  coffeeListItemNameCell(name) {
    return this.coffeeListItemLocator(name).locator('div').nth(0);
  }

  coffeeListItemUnitCell(name) {
    return this.coffeeListItemLocator(name).locator('div').nth(1);
  }

  coffeeListItemTotalCostCell(name) {
    return this.coffeeListItemLocator(name).locator('div').nth(3);
  }

  coffeeListItemRemoveAllButton(name) {
    return this.coffeeListItemLocator(name).getByRole('button', {
      name: `Remove all ${name}`,
    });
  }

  coffeeListItemAddOneDrink(name) {
    return this.coffeeListItemLocator(name).getByRole('button', {
      name: `Add one ${name}`,
    });
  }

  coffeeListItemRemoveOneDrink(name) {
    return this.coffeeListItemLocator(name).getByRole('button', {
      name: `Remove one ${name}`,
    });
  }

  async open() {
    await this.page.goto('/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('/cart');
  }

  async reload() {
    await this.page.reload();
  }

  async assertCoffeeItemIsVisible(name) {
    await expect(this.coffeeListItemNameCell(name)).toBeVisible();
  }

  async assertCoffeeItemIsNotVisible(name) {
    await expect(this.coffeeListItemNameCell(name)).toBeHidden();
  }

  async assertCoffeeNameContainsCorrectText(name) {
    await expect(this.coffeeListItemNameCell(name)).toContainText(name);
  }

  async assertCoffeeUnitContainsCorrectText(name, text) {
    await expect(this.coffeeListItemUnitCell(name)).toContainText(text);
  }

  async assertCoffeeTotalCostContainsCorrectText(name, text) {
    await expect(this.coffeeListItemTotalCostCell(name)).toContainText(text);
  }

  async assertDiscountedMochaItemIsHidden() {
    await expect(this.discountedMochaItem).toBeHidden();
  }

  async assertDiscountedMochaTotalCostContainsCorrectText(text) {
    await expect(this.discountedMochaTotalCost).toContainText(text);
  }

  async assertNoCoffeeMessageIsVisible() {
    await expect(this.notCoffeeMessage).toBeVisible();
  }

  async assertTotalCheckoutContainsValue(value) {
    await expect(this.totalCheckout).toContainText(value);
  }

  async clickCoffeeListItemRemoveAllButton(name) {
    await this.coffeeListItemRemoveAllButton(name).click();
  }

  async clickCoffeeListItemAddOneDrink(name) {
    await this.coffeeListItemAddOneDrink(name).click();
  }

  async clickCoffeeListItemRemoveOneDrink(name) {
    await this.coffeeListItemRemoveOneDrink(name).click();
  }
}
