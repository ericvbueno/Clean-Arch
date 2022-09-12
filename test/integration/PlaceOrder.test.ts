import PlaceOrder from "../../src/application/usecase/place-order/PlaceOrder";
import PostgreSQLConnectionAdapter from "../../src/infra/database/PostgreSQLConnectionAdapter";
import Connection from "../../src/infra/database/Connection";
import RepositoryFactory from "../../src/domain/factory/RepositoryFactory";
import DatabaseRepositoryFactory from "../../src/infra/factory/DatabaseRepositoryFactory";

let connection: Connection;
let repositoryFactory: RepositoryFactory;

beforeEach(function () {
    connection = new PostgreSQLConnectionAdapter();
    repositoryFactory = new DatabaseRepositoryFactory(connection);
    // repositoryFactory = new MemoryRepositoryFactory();
})

test("Deve fazer um pedido", async function() {
    const placeOrder = new PlaceOrder(repositoryFactory);
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
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(5132);
});

test("Deve fazer um pedido calculando o código", async function() {
    const placeOrder = new PlaceOrder(repositoryFactory);
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
    await placeOrder.execute(input);
    const output = await placeOrder.execute(input);
    expect(output.code).toBe("202100000002");
});

afterEach(async function () {
    await connection.close();
})