import { Item } from "@/types/api";
import { Amount } from "@prisma/client";

interface Props {
  item: Item;
  amounts: Amount[];
}

const FoodItem = ({ item, amounts }: Props) => {
  const totalAmount = amounts.reduce((acc, amount) => acc + amount.amount, 0);
  return (
    <div>
      <div>{item.heName}</div>
      <div>{totalAmount}</div>
    </div>
  );
};

export default FoodItem;
