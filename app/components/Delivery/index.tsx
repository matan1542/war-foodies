import { DeliveryFrontend } from "@/types/delivery";
import { Box } from "@mui/material";
import FoodCatagory from "../FoodCatagory";

interface DeliveryProps {
  delivery: DeliveryFrontend;
}

const Delivery = ({ delivery }: DeliveryProps) => {
  const catagories = delivery.order.catagories;
  // MATAN-TODO - replace with loader component

  if (!delivery) return <div>...loading</div>;
  return (
    <Box>
      {Object.entries(catagories).map(([catagoryName, items]) => {
        return <FoodCatagory catagoryName={catagoryName} items={items} />;
      })}
    </Box>
  );
};

export default Delivery;
