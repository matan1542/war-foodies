import { Box } from "@mui/material";
import FoodCategory from "../FoodCategory";
import { TransformedDelivery } from "@/types/ui";

interface Props {
  delivery: TransformedDelivery;
}

const Delivery = ({ delivery }: Props) => {
  const { categories } = delivery;
  if (!delivery) return <div>...loading</div>;
  return (
    <Box>
      {Object.entries(categories).map(([categoryId, category]) => {
        return <FoodCategory key={categoryId} category={category} />;
      })}
    </Box>
  );
};

export default Delivery;
