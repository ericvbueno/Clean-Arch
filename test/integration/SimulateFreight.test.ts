import SimulateFreight from "../../src/application/usecase/simulate-freight/SimulateFreight";
import ItemRepositoryMemory from "../../src/infra/repository/memory/itemRepositoryMemory";

test("Deve simular o frete de um pedido", function () {
    const itemRepository = new ItemRepositoryMemory();
    const simulateFreight = new SimulateFreight(itemRepository);
    const input = {
        orderItems: [
            {idItem: 1,  quantity: 1},
            {idItem: 2,  quantity: 1},
            {idItem: 3,  quantity: 3}
        ]
    };
    const output = simulateFreight.execute(input);
    expect(output.total).toBe(260);
})

test("Deve rotornar uma exceção ao tentar simular o frete de um pedido com um item inexistente", function () {
    const itemRepository = new ItemRepositoryMemory();
    const simulateFreight = new SimulateFreight(itemRepository);
    const input = {
        orderItems: [
            {idItem: 1,  quantity: 1},
            {idItem: 2,  quantity: 1},
            {idItem: 4,  quantity: 3}
        ]
    };
    expect(() => simulateFreight.execute(input)).toThrow(new Error("Item not found"));
})