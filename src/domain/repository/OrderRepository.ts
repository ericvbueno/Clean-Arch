import Order from "../entity/Order";

export default interface OrderRepository {
    save(Order: Order): void;
    count(): number;
}