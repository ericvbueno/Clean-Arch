import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/memory/itemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/place-order/PlaceOrder";

test("Deve fazer um pedido", function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "219.858.810-20",
        orderItems: [
            {idItem: 1,  quantity: 1},
            {idItem: 2,  quantity: 1},
            {idItem: 3,  quantity: 3}
        ],
        coupon: "VALE20",
        issueDate: new Date("2021-03-01T10:00:00")
    };
    const output = placeOrder.execute(input);
    expect(output.total).toBe(4872);
});

test("Deve fazer um pedido calculando o código", function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "219.858.810-20",
        orderItems: [
            {idItem: 1,  quantity: 1},
            {idItem: 2,  quantity: 1},
            {idItem: 3,  quantity: 3}
        ],
        coupon: "VALE20",
        issueDate: new Date("2021-03-01T10:00:00")
    };
    placeOrder.execute(input);
    const output = placeOrder.execute(input);
    expect(output.code).toBe("202100000002");
});