'use client'
import { Delivery, DeliveryFrontend } from "@/types/delivery";
import { parseDeliveryStructure } from "@/utils/delivery.service";
import React from "react";

export type handleDelivery = (deliveries: Delivery[]) => void;

export interface DeliveryContext {
    deliveries: DeliveryFrontend[],
    handleDeliveries: handleDelivery
}

export const DeliveryContext = React.createContext({} as DeliveryContext);

export const DeliveryProvider = ({ children }: { children: React.ReactNode }) => {
    const [deliveries, setDeliveries] = React.useState<DeliveryFrontend[]>(null as unknown as DeliveryFrontend[]);

    const handleDeliveries = (deliveries: Delivery[]) => { 
        let parsedDeliveries = deliveries.map(delivery => {
            return parseDeliveryStructure(delivery)
         })
        setDeliveries(parsedDeliveries);
    }

    const value = {
        deliveries,
        handleDeliveries
    }

    return (
        <DeliveryContext.Provider value={value}>
            {children}
        </DeliveryContext.Provider>
    )
}
