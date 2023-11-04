import { Item } from "@/types/api";
import { Amount } from "@prisma/client";

interface FoodItemProps {
  item: Item;
  amounts: Amount[];
}

const FoodItem = ({ item, amounts }: FoodItemProps) => {
  const totalAmount = amounts.reduce((acc, amount) => acc + amount.amount, 0);
  return (
    <div>
      <div>{item.name}</div>
      <div>{totalAmount}</div>
    </div>
  );
};

export default FoodItem;
