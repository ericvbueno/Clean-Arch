import Order from "../entity/Order";

export default interface OrderRepository {
    save(Order: Order): Promise<void>;
    count(): Promise<number>;
}