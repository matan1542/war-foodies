import { DeliveryFrontend } from "@/types/api";
import Delivery from "../Delivery";

const Deliveries = ({ deliveries }: { deliveries: DeliveryFrontend[] }) => {
  if (!deliveries) return <div>...loading</div>;

  return (
    <div>
      {deliveries.map((delivery) => {
        return <Delivery delivery={delivery} />;
      })}
    </div>
  );
};

export default Deliveries;
