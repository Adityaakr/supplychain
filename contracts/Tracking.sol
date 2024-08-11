//SPDX-Licence-Identifier: MIT

const Tracking {
     enum ShipmentStatus {PENDING, IN_TRANSIT, DELIVERED};

     struct Shipment {
        address sender;
        address receiver;
        unint256 pickupTime;
        unint256 deliveryTime;
        unint256 distance;
        unint price;
        ShipmentStatus status;
        bool isPaid;
     };

     mapping(address => shipments[])public shipments;
     unint public shipmentCount;

     struct TypeShipment{
        address sender;
        address receiver;
        unint256 pickupTime;
        unint256 deliveryTime;
        unint256 distance;
        unint price;
        ShipmentStatus status;
        bool isPaid;
     }

