import { Injectable } from '@nestjs/common';

const catalogue = {
  a: { unitPrice: 10, specialQuantity: 3, specialPrice: 25 },
  b: { unitPrice: 20, specialQuantity: 2, specialPrice: 30 },
  c: { unitPrice: 30, specialQuantity: null, specialPrice: null },
};

enum CatalogueItems {
  a = 'a',
  b = 'b',
  c = 'c',
}

interface IItems {
  [key: string]: number;
}

@Injectable()
export class AppService {
  checkout(items: IItems): number {
    let cost = 0;
    Object.keys(items).forEach((itemName) => {
      // Set currentItem
      const currentItemQuantity: number = items[itemName];

      // If item has a special and is of qualifying quantity...
      if (
        catalogue[itemName]?.specialQuantity != null &&
        currentItemQuantity % catalogue[itemName].specialQuantity === 0
      ) {
        // ...set cost to relative multiple of specialPrice
        cost +=
          (currentItemQuantity / catalogue[itemName].specialQuantity) *
          catalogue[itemName].specialPrice;
      } else {
        // ...else set cost to multiple of standard price
        cost += currentItemQuantity * catalogue[itemName].unitPrice;
      }
    });

    return cost;
  }
}
