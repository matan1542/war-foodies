import { TransformedDelivery } from "@/types/ui";
import Delivery from "../Delivery";

const Deliveries = ({ deliveries }: { deliveries: TransformedDelivery[] }) => {
  if (!deliveries) return <div>...loading</div>;

  return (
    <div>
      {deliveries.map((delivery) => {
        return <Delivery key={delivery.id} delivery={delivery} />;
      })}
    </div>
  );
};

export default Deliveries;
