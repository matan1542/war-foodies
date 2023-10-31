export interface Item {
  id: string;
  name: string;
  amount: number;
}

export interface Catagory {
  name: string;
  items: Item[];
}

export interface Order {
  id: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deliveryId: number;
  catagories: Catagory[];
}

export interface Delivery {
  id: string;
  amount: number;
  deadline: Date;
  orders: Order[];
}

export interface ItemFrontend {
  [key: string]: {
    id: string;
    amount: number;
  };
}

export interface CatagoryFrontend {
  [key: string]: ItemFrontend;
}

export interface OrderFrontend {
  catagories: CatagoryFrontend;
}

export interface DeliveryFrontend {
  id: string;
  amount: number;
  deadline: Date;
  order: OrderFrontend;
}
