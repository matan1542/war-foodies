import { Amount, Delivery, Item, Category } from "./api";

export interface TransformedCategory extends Category {
  itemsAndAmounts: Record<
    string,
    {
      item: Item;
      amounts: Amount[];
    }
  >;
}

export interface TransformedDelivery extends Delivery {
  categories: Record<string, TransformedCategory>;
}
