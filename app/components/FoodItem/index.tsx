import { Delivery, Item } from "@/types/delivery";

interface FoodItemProps extends Item {}

const FoodItem = ({ amount, name, id }: FoodItemProps) => {
  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
    </div>
  );
};

export default FoodItem;
