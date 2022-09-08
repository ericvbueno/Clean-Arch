import Cpf from "../../src/domain/entity/Cpf";

test("Deve testar um cpf válido", function() {
    const cpf = new Cpf("580.169.450-15");
    expect(cpf.getValue()).toBe("580.169.450-15");
});

test("Deve testar um cpf inválido com digitos iguais", function() {
    expect(() => new Cpf("111.111.111-11")).toThrow(new Error("CPF Inválido"));
});

test("Deve testar um cpf inválido com digitos diferentes", function() {
    expect(() => new Cpf("123.456.789-99")).toThrow(new Error("CPF Inválido"));
});

test("Deve retornar uma exceção ao tentar criar um cpf com valor vazio", function() {
    expect(() => new Cpf('')).toThrow(new Error("CPF Inválido"));
});

test("Deve retornar uma exceção se a quantidade de dígitos for diferente de 11", function() {
    expect(() => new Cpf('123.456.789-1')).toThrow(new Error("CPF Inválido"));
});

