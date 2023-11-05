import { TransformedDelivery } from "@/types/ui";
import Delivery from "../Delivery";

interface Props {
  deliveries: TransformedDelivery[];
}

const Deliveries = ({ deliveries }: Props) => {
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
